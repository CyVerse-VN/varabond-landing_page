#!/usr/bin/env python3
"""Varabond landing page - ghép mọi thứ thành MỘT file HTML tự chứa.

Cách chạy (trong Terminal, đứng ở thư mục code):
    python3 build.py

Kết quả: file ../varabond-landing.html (ngay cạnh thư mục code) được tạo lại,
đã nhúng sẵn ảnh, font, video (và giọng Vara nếu có file assets/vara_voice.mp3).
"""
import base64, re, os, json, sys

B = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(B, 'src')
AS = os.path.join(B, 'assets')
FS = os.path.join(B, 'fonts')
OUT = os.path.join(os.path.dirname(B), 'varabond-landing.html')


def b64(path):
    with open(path, 'rb') as f:
        return base64.b64encode(f.read()).decode()


# ---------- fonts (chỉ lấy bộ chữ Latin + tiếng Việt) ----------
fonts_css = []
for pkg, weights in [('anton', [400]), ('be-vietnam-pro', [300, 400, 500, 600, 700]),
                     ('dancing-script', [600]), ('lora', [400, '400-italic', 600])]:
    for w in weights:
        css = open(os.path.join(FS, pkg, f'{w}.css'), encoding='utf-8').read()
        for name, face in re.findall(r'/\* ([^*]+) \*/\s*(@font-face\s*\{.*?\})', css, re.S):
            if not (name.startswith(pkg + '-latin-') and not name.startswith(pkg + '-latin-ext')
                    or name.startswith(pkg + '-vietnamese-')):
                continue
            m = re.search(r"url\(\./files/([^)]+\.woff2)\)", face)
            data = b64(os.path.join(FS, pkg, 'files', m.group(1)))
            face = re.sub(r"src:[^;]+;", f"src: url(data:font/woff2;base64,{data}) format('woff2');", face)
            fonts_css.append(face)
fonts_css = '\n'.join(fonts_css)

# ---------- images ----------
A = {}
for fn in sorted(os.listdir(AS)):
    if fn.endswith('.webp'):
        A[fn[:-5]] = 'data:image/webp;base64,' + b64(os.path.join(AS, fn))

body = open(os.path.join(SRC, 'body.html'), encoding='utf-8').read()
used = set(re.findall(r'\{\{A:([a-z_0-9]+)\}\}', body))
missing = [u for u in used if u not in A and u != 'vara_video']
if missing:
    sys.exit('Thiếu ảnh trong thư mục assets: %s' % missing)
body = body.replace('src="{{A:vara_video}}"', '')
body = body.replace('poster="{{A:vara_poster}}"', 'data-poster="vara_poster"')
body = re.sub(r'src="\{\{A:([a-z_0-9]+)\}\}"', r'data-a="\1"', body)
body = body.replace('{{VOICE_SRC}}', '')

css = open(os.path.join(SRC, 'style.css'), encoding='utf-8').read()
qr_js_path = os.path.join(os.path.dirname(B), 'js', 'qr-helper.js')
qr_js = open(qr_js_path, encoding='utf-8').read() if os.path.exists(qr_js_path) else ''
js = qr_js + '\n' + open(os.path.join(SRC, 'app.js'), encoding='utf-8').read()
video = b64(os.path.join(AS, 'vara_video.mp4'))

# Giọng Vara: thả file assets/vara_voice.mp3 (hoặc .m4a/.wav/.aac/.ogg) rồi chạy lại
voice_js = ''
for ext, typ in [('mp3', 'audio/mpeg'), ('m4a', 'audio/mp4'), ('wav', 'audio/wav'),
                 ('aac', 'audio/aac'), ('ogg', 'audio/ogg')]:
    p = os.path.join(AS, 'vara_voice.' + ext)
    if os.path.exists(p):
        voice_js = f'window.__VOICE="{b64(p)}";window.__VOICE_T="{typ}";'
        break

html = f'''<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Varabond — Cùng AR khám phá thành phố Hồ Chí Minh</title>
<meta name="description" content="Varabond — ứng dụng du lịch khám phá Sài Gòn với công nghệ AR cùng người bạn đồng hành chim Vara.">
<meta name="theme-color" content="#f7fbff">
<script>try{{if(localStorage.getItem('vb_theme')==='night')document.documentElement.classList.add('night')}}catch(e){{}}</script>
<link rel="icon" href="{A['app_icon']}">
<style>
{fonts_css}
{css}
</style>
</head>
<body>
{body}
<script>window.__A={json.dumps(A)};window.__V="{video}";{voice_js}</script>
<script>
{js}
</script>
</body>
</html>
'''
open(OUT, 'w', encoding='utf-8').write(html)
print('OK', OUT, round(os.path.getsize(OUT) / 1024 / 1024, 2), 'MB')
