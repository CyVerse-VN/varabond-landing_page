# Varabond – Landing page (mã nguồn)

Thư mục này chứa "nguyên liệu" để làm ra file `varabond-landing.html`.
Bạn **không cần** đụng vào đây để xem trang: chỉ cần bấm đúp file `varabond-landing.html` ở thư mục ngoài.

## Bên trong có gì

| Thư mục / file | Là gì |
|---|---|
| `src/body.html` | Nội dung trang: chữ, các phần, nút bấm |
| `src/style.css` | Màu sắc, cỡ chữ, bố cục, hiệu ứng chuyển động |
| `src/app.js` | Phần "chạy": nút ngày/đêm, VI/EN, ảnh bìa tự chuyển, lật sách, các demo nhỏ |
| `assets/` | Ảnh (Vara, ký hiệu, ảnh địa danh) và video Vara |
| `fonts/` | Các font chữ dùng trên trang (Be Vietnam Pro, Lora, Anton, Dancing Script) |
| `build.py` | Công cụ ghép tất cả thành một file HTML duy nhất |
| `NGUON-ANH.txt` | Tác giả và giấy phép của ảnh địa danh (bắt buộc giữ khi đăng trang) |

## Muốn sửa rồi làm lại file HTML

1. Sửa chữ trong `src/body.html` (tiếng Việt) hoặc `src/app.js` (bản tiếng Anh và nội dung quyển sách).
2. Đổi ảnh: thay file trong `assets/`, **giữ nguyên tên file** (định dạng .webp).
3. Thêm giọng Vara: đặt file ghi âm tên `vara_voice.mp3` (hoặc .m4a) vào `assets/`.
4. Mở Terminal, vào thư mục `code`, gõ: `python3 build.py`
   File `varabond-landing.html` ở thư mục ngoài sẽ được tạo lại.

Nếu không quen Terminal, chỉ cần gửi Claude thư mục này kèm yêu cầu sửa.

## Giấy phép
- Font: SIL Open Font License (xem file LICENSE trong từng thư mục font).
- Ảnh địa danh: Wikimedia Commons, xem `NGUON-ANH.txt`. Ảnh mascot Vara thuộc đội dự án Varabond.
