(function () {
  'use strict';
  var A = window.__A || {};
  ['app_icon', 'app_map_day', 'app_map_night', 'app_screen_discover', 'app_screen_journal', 'app_screen_passport', 'app_screen_planner', 'app_usp_alley', 'app_usp_ar', 'app_usp_mystery', 'ch0_s01', 'ch0_s02', 'ch0_s03', 'ch0_s04', 'ch0_s05', 'ch0_s06', 'ch0_s07', 'ch0_s08', 'ch0_s09', 'night_frame', 'pb_cover_bd_center', 'pb_cover_hcm_cathedral_night', 'pb_cover_hcm_night', 'pb_cover_hcm_night2', 'pb_cover_hcm_postoffice', 'pb_cover_vt_beach', 'pb_tile_alley', 'pb_tile_benthanh', 'pb_tile_cafe', 'pb_tile_postoffice_inside', 'ph_cover_bd_center', 'ph_cover_bd_night', 'ph_cover_hcm_cathedral_night', 'ph_cover_hcm_night', 'ph_cover_hcm_postoffice', 'ph_cover_hcm_river', 'ph_cover_vt_beach', 'ph_cover_vt_night', 'pt_tile_alley', 'pt_tile_cafe', 'sym_flow', 'sym_gate', 'sym_moon', 'sym_star', 'sym_sun', 'vara_ar', 'vara_card', 'vara_fly', 'vara_hero', 'vara_point', 'vara_poster', 'vara_read', 'vara_search', 'vara_stamp', 'vara_victory', 'vara_wave'].forEach(function (k) { if (!A[k]) A[k] = 'assets/' + k + '.webp'; });
  Array.prototype.forEach.call(document.querySelectorAll('[data-a]'), function (el) { var k = el.getAttribute('data-a'); if (A[k]) el.setAttribute('src', A[k]); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-poster]'), function (el) { var k = el.getAttribute('data-poster'); if (A[k]) el.setAttribute('poster', A[k]); });
  var $ = function (s, c) { return (c || document).querySelector(s) };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)) };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && matchMedia('(pointer:fine)').matches;
  var LANG = 'vi';
  try { var saved = localStorage.getItem('vb_lang'); if (saved === 'en' || saved === 'vi') LANG = saved; } catch (e) { }

  /* ===================== EN dictionary for static text ===================== */
  var EN = {
    nav_vb: 'Varabond', nav_profile: 'Project profile', nav_profile_s: 'Idea, MVP, roadmap', nav_dict: 'Varabond glossary', nav_dict_s: 'Ky Gioi, sigils, symbols',
    nav_tools: 'Features', f1_t: 'Wander', nav_f1_s: 'Map & itinerary', f2_t: 'Discover', nav_f2_s: 'Vara guides you by location', f4_t: 'Passport', nav_f4_s: 'Badges & memories', f3_t: 'Journal', nav_f3_s: 'Chapters & clues', nav_help: 'Support', soon_short: 'Coming soon',
    hero_lead: 'Explore, with AR, a<br><strong>Ho Chi Minh City</strong> you have never seen.',
    hero_desc: 'Travel Ho Chi Minh City with AR and your companion, Vara the bird. You won’t just visit new places — you’ll discover Saigon’s culture through missions and story chapters that unfold by day and by night.',
    cta_start: 'Start the journey', soon_k: 'Coming soon on', chip1: '📍 Real places', chip2: '🏛 Local culture', chip3: '✨ AR experiences',
    ar_scan: 'AR · Detecting surface…', tap: 'Tap to hear Vara say hi', scroll: 'Scroll',
    dn_day: 'The city at dawn', c_hcm: 'Ho Chi Minh City', c_bd: 'Binh Duong', c_vt: 'Vung Tau', sym_sun: 'The Sun',
    dn_day_c: 'Saigon by day — the signal to begin a journey of 5 missions.', sym_gate: 'The Gate', gate_c: 'The moment the day and night worlds connect. Give it a tap!',
    dn_night: 'The city at night', sym_moon: 'The Moon', dn_night_c: 'Saigon by night — the signal to begin solving 3 mysteries.',
    j_eye: '4 features · 1 journey', j_title: 'Begin your <span class="hl">journey of discovery</span>',
    j1_gk: 'Today’s plan', j1_g: '3 stops · suggested by time & budget', j1_p: 'Find great places from local communities and build a flexible plan.', more: 'See feature',
    j2_g: '“You’re near Saigon Central Post Office!”', j2_p: 'Get close to a place and Vara shares its history, architecture and culture.',
    j3_gk: 'Just unlocked', j3_g: 'Memory Fragment: The Message', j3_p: 'Keep the chapters, clues and evidence you uncover yourself.',
    j4_gk: 'Badge', j4_g: 'Saigon Post Office · No. 01', j4_p: 'Collect a stamp at every place you visit — badges and memories.',
    p_title: 'Project profile', pt1: 'About Varabond', pt2: 'AR in the app', pt3: 'The experience', pt4: 'MVP scope & test limits', pt5: 'Roadmap', pt6: 'Team',
    p1_h: 'A more delightful way to explore Saigon',
    p1_a: 'Varabond is a travel app for exploring Saigon with AR. With Vara the bird as your companion, you don’t just visit new places — you discover the culture of Saigon, past and present, through missions and story chapters set by day and by night.',
    p1_q: '“Less time planning. More time exploring. Turn every trip into an adventure.”',
    p1_b: '<b>Three problems Varabond sets out to solve:</b>', p1_t1: '🧩 Scattered travel information', p1_t2: '🧭 Little guidance on the spot', p1_t3: '🌙 Few interactive cultural experiences at night',
    p2_h: 'AR is the doorway into the story',
    p2_a: 'AR (augmented reality — virtual images layered on the real scene through your phone camera) works as an emotional doorway, taking players from the real city into the world of Ky Gioi.',
    p2_b1h: 'AR moments', p2_b1a: 'A 3D sigil appears — tap it to open the Ky Gioi map', p2_b1b: 'Memory Scene: an envelope, glowing words and a flock of paper birds', p2_b1c: 'At night the camera opens for just two AR moments',
    p2_b2h: 'Safety principles', p2_b2a: 'AR only in safe public spaces', p2_b2b: 'Never use your phone while crossing the street', p2_b2c: 'No fictional imagery placed on religious symbols',
    p3_h: 'Four stages, one journey',
    p3_1: 'Discover & plan', p3_1d: 'Find places from local communities, check costs and build a flexible plan.',
    p3_2: 'Explore with Vara', p3_2d: 'Near a place, Vara steps in to introduce it and suggest things to do.',
    p3_3: 'Collect & keep', p3_3d: 'Earn badges, personalise them with photos/videos, keep them in your Memory Passport.',
    p3_4: 'Awaken Ky Gioi', p3_4d: 'Solve cultural mysteries through missions, puzzles and AR interaction.',
    p4_h: 'Chapter Zero — The Letter That Never Arrived',
    p4_a: 'The first release is a free, complete story chapter that introduces the product and tests the appeal of AR-powered travel.',
    p4_b1h: 'In the MVP', p4_b1a: 'By day: Saigon Central Post Office', p4_b1b: 'By night: the public area outside Notre-Dame Cathedral', p4_b1c: 'The night part can be played on another evening',
    p4_b2h: 'Test limits', p4_b2a: 'Minimal camera use, always with an alternative way to finish', p4_b2b: 'Fictional content is clearly labelled as game art', p4_b2c: 'Expected impact still needs real-world testing',
    p4_s1: 'Core MVP', p4_s1v: 'Completed', p4_s2: 'Field testing', p4_s2v: 'Checking AR stability',
    p5_h: 'Free exploration + Premium experiences',
    p5_t1: '🗺 Free map, itinerary & Vara guidance', p5_t2: '🌙 Premium AR story chapters', p5_t3: '📖 AR Booklet — scannable souvenirs', p5_t4: '🎀 Outfits & accessories for Vara', p5_t5: '🤝 Partnerships with destinations & local businesses',
    p5_bh: 'Expansion roadmap', p5_b1: 'Launching first on Android', p5_b2: 'Cho Lon food route, craft villages, Vung Tau', p5_b3: 'An AR chapter model that scales to many destinations',
    p6_h: 'The Varabond team', p6_a: 'Team details are being updated.', mem: 'Team member', upd: 'Coming soon',
    dict_t: 'Glossary ·',
    f1_n: 'Feature 01', f1_say: '“Got half a day free? Let me plan a trip that fits your time and your wallet!”', f1_c1: '⏱ By time', f1_c2: '💰 By budget', f1_c3: '❤️ By interest',
    exp: 'Try it', d1_q1: 'How much time do you have?', d1_t1: '2 hours', d1_t2: 'Half a day', d1_t3: 'Evening', d1_q2: 'What do you love?', d1_l1: 'Architecture', d1_l2: 'Cafés & alleys', d1_l3: 'Riverside',
    d1_go: 'Ask Vara for a plan', d1_note: 'Sample itinerary — a simulation of the in-app feature.',
    intro: 'About this feature', f1_i: 'No more digging through TikTok, Threads, Facebook or Google Maps. Varabond gathers great places from local communities and suggests a route that fits your time, budget and interests.',
    ui_time: 'Time', ui_budget: 'Budget', ui_like: 'Interests', ui1_h: 'Your itinerary', ui1_m: '3 stops · on foot', pl_po: 'Saigon Central Post Office', pl_book: 'Nguyen Van Binh Book Street', pl_nd: 'Notre-Dame Cathedral (outside)',
    f1_l1: 'Discovery map', f1_l2: 'Flexible itinerary', f1_l3: 'Budget-aware tips', f1_l4: 'Community-picked places',
    f2_n: 'Feature 02', f2_say: '“I can tell where you are! Come closer and I’ll tell you the story of this place.”', f2_c1: '📡 GPS location', f2_c2: '🏛 History & architecture', f2_c3: '💬 Chat with Vara',
    d2_lab: 'Drag to walk to the Post Office', d2_pop: 'Ding! You’ve reached Saigon Central Post Office. Look up above the main entrance — something there is still keeping time!',
    f2_i: 'When you get close to a supported place, Vara recognises your location via GPS and a geofence (an invisible circle around the spot), then introduces its history, architecture and culture, and suggests things worth trying. It’s the core of the free version.',
    ui2_b: 'Looks like you’re near Saigon Central Post Office. Want to hear its story?', ui2_k: 'You are near', ui2_tags: 'History · Architecture', ui2_btn: 'Listen to Vara',
    f2_l1: 'Location-aware', f2_l2: 'Vara tells stories', f2_l3: 'History · Architecture', f2_l4: 'Things to try',
    ch_head: 'A <span>Ho Chi Minh City</span> like no other',
    fl1: 'Send', fl1d: 'By day at the Post Office, you trace an envelope with no recipient.', fl2: 'The Gate', fl2d: 'Dusk opens a path between the real city and Ky Gioi.',
    fl3: 'Keep', fl3d: 'At night, an AR sigil reveals case files to investigate.', fl4: 'Pass on', fl4d: 'You leave your own message for whoever comes next.',
    book_hint: 'Tap to open the memory book', ch_side_h: 'How play and chapters flow',
    ch_side_p: 'Every chapter is built from local history, architecture and culture, blended with a touch of fictional mystery. Complete missions by day, solve mysteries by night — and pause or resume whenever it suits you.',
    f3_n: 'Feature 03', f3_say: '“Every clue you find, I write down. Tired? Take a break — we’ll read on tomorrow!”', f3_c1: '📜 Chapters', f3_c2: '🔍 Evidence', f3_c3: '⏸ Pause & resume',
    f3_i: 'The Journal keeps your whole journey in each chapter: evidence found, Memory Fragments restored and clues still open. The night part of a chapter can be finished on another evening.',
    ui3_a: 'Chapter Zero · Day', ui3_ad: '4/4 scenes · Post Office', ui3_b: 'Trace of Time', ui3_bd: 'Evidence · façade', ui3_c: 'Trace of Connection', ui3_cd: 'Evidence · signal', ui3_d: 'Chapter Zero · Night', ui3_dd: 'Waiting for another evening', ui3_e: 'Memory Scene', ui3_ed: '🔒 Locked',
    f3_l1: 'Day & night chapters', f3_l2: 'Evidence & clues', f3_l3: 'Memory Fragments', f3_l4: 'Pause, resume',
    f4_n: 'Feature 04', f4_say: '“Thunk! I stamp a seal everywhere you go. Collect the full set for a Grand Badge!”', f4_c1: '🏅 Landmark Badges', f4_c2: '📸 Your photos & videos', f4_c3: '🏆 Grand Badge',
    d4_btn: 'Stamp it', d4_note: 'Simulation: in the app, a badge is stamped only when you are actually there.', d4_g: 'Grand Badge!', d4_gp: 'You collected all 5 badges.', d4_r: 'Play again',
    f4_i: 'The Memory Passport keeps your journey: earn Landmark Badges, personalise them with photos or videos, complete collections for a Grand Badge and share memories with friends.',
    ui4_k: 'Memory Passport', ui4_h: 'Your badges', f4_l1: 'Landmark Badges', f4_l2: 'Personal photos & videos', f4_l3: 'Collections', f4_l4: 'Grand Badge',
    s_p: 'Contact our hotline for help', q1: 'When does Varabond launch?', a1: 'Varabond will launch first on Android. Release dates will be posted here.',
    q2: 'Is it free to play?', a2: 'The map, itinerary, Vara’s guidance, badges and the opening Chapter Zero are all free. In-depth AR story chapters will be Premium.',
    q3: 'Is evening AR play safe?', a3: 'AR spots are placed only in safe public spaces. Stop walking while using your phone and never use it while crossing the street.',
    v_t: 'Vara watching the city at night', v_s: 'Every light is a story waiting to be told.',
    ft_p: 'Explore, with AR, a Ho Chi Minh City you have never seen — find stories by day, awaken Ky Gioi by night.', ft_ch: 'Story chapters', ft_contact: 'Contact', ft_faq: 'FAQ', soon_and: 'Coming soon on Android',
    tagline: 'Explore by day. Awaken by night.', drag: 'Drag down to close', totop: 'Fly back to top',
    nav_meet: 'Meet Vara', nav_meet_s: 'Your AR companion', nav_usp: 'What makes us different', nav_usp_s: 'AR · Hidden alleys · Night mysteries', nav_book: 'The Memory Book', nav_book_s: 'Turn the pages of Chapter 0',
    cv_lead: 'Explore, with AR, a <strong>Ho Chi Minh City</strong> you have never seen.',
    meet_eye: 'Your companion', meet_h: 'Hi, I’m <span class="hl">Vara</span>', meet_p: 'A little white-and-turquoise bird who is both your guide and your travel buddy. Vara appears right in the real scene through your camera, tells the story of each street corner and leads you through chapters set by day and by night.', meet_video: 'Watch Vara on video',
    tl1k: 'Stop 01 · Day', tl1r: '✓ Arrived', tl2k: 'Hidden alley', tl2b: 'Sock-filter coffee down the alley', tl2r: 'Vara’s pick', tl3b: 'A sigil is awakening', tl3btn: 'Open the Ky Gioi lens', tl4b: 'Sea & wind', tl5b: 'A new journey', tl6k: 'Mystery 1/3', tl6b: 'The shape of time', tl7k: 'Memory Fragment', tl7b: 'The Message', tl7r: '✓ Restored', tl8a: 'Post Office', tl8b: 'Book Street', tl8c: 'Cathedral (outside)',
    usp_eye: 'What makes us different', usp_h: 'Three reasons to <span class="hl">travel with Vara</span>',
    u1_t: 'Interactive AR', u1_p: 'Sigils, Memory Scenes and Vara herself appear right on the real scene through your phone camera. You tap, observe and decode — not just watch.', u1_c1: 'Ky Gioi lens · LIVE', u1_c2: 'A sigil has appeared · Tap to open', u1_l1: '3D sigils', u1_l2: 'Memory Scenes', u1_l3: 'Vara in the real world', u1_l4: 'Camera only when needed',
    u2_t: 'Hidden Alleys & Secret Corners', u2_p: 'Follow the trail of sock-filter coffee, storybook alleys and little-known street tales — places ordinary maps rarely mention.', u2_gk: 'Secret corners near you', u2_s1: 'Cheo Leo Café', u2_s1d: 'Long-running sock-filter coffee', u2_s2: 'Hao Si Phuong Alley', u2_s2d: 'An old alley in Cho Lon', u2_s3: '42 Ton That Dam Apartments', u2_s3d: 'Tiny cafés in an old block', u2_l1: 'Sock-filter coffee', u2_l2: 'Storybook alleys', u2_l3: 'Street tales', u2_l4: 'Tips from locals',
    u3_t: 'Story-driven mysteries', u3_p: 'More reasons to explore the city at night through missions, storylines and cultural activities — always at safe public spots, with clear guidance.', u3_gk: 'Case file · Night', u3_r1: 'Sigil opened', u3_r2: 'The shape of time', u3_r3: 'What should be kept?', u3_safe: '✓ Safe public spot', u3_l1: 'Missions & puzzles', u3_l2: 'A day-to-night storyline', u3_l3: 'Cultural activities', u3_l4: 'Safety-first guidance',
    bk_eye: 'The Memory Book · Chapter 0', ch_head2: '<span>A Ho Chi Minh City</span> like no other', bk_hint: 'Drag a page corner, tap the page edge or use the ← → keys to turn.', bk_list: 'See all 9 scenes', cr_t: 'Landmark photo credits ▾',
    ch_gal_eye: 'Real in-app moments', ch_gal_title: 'Visual Walkthrough <span class="hl">Chapter 0</span>', gal_all: 'All (9 scenes)', gal_day: '☀️ Daytime · Post Office', gal_night: '🌙 Nighttime · Cathedral',
    nav_ar_dd: '3D & AR Testing Lab', nav_ar_dd_s: 'Place Vara on your desk & test 6 actions', nav_try_ar: 'Try 3D AR',
    cta_try_ar: 'Try AR with Vara ✨',
    ar_try_badge: '3D & AR TESTING LAB', ar_try_sub: 'Pick 1 of 6 actions to try right now:',
    act_idle: 'Listening', act_bow: 'Gentle Bow', act_wing: 'Wing Swirl', act_gangnam: 'Gangnam Dance', act_break: 'Breakdance', act_cardio: 'Energy Dance',
    ar_try_main: 'Try 3D Mascot & AR Now', ar_try_qr: 'Mobile QR Code',
    usp_try_ar: 'Try AR & 6 Actions →', dn_try_ar: 'Open Ky Gioi AR Lab →',
    qr_badge: 'SCAN QR ON MOBILE', qr_title: 'Place Vara on your real desk',
    qr_desc: 'Open your phone camera (iOS Safari or Android Chrome) and scan the QR code to launch the <b>3D & AR Lab</b> directly. You can also pre-select an action for Vara to perform right away:',
    qr_pick_lbl: 'Pre-select action when opening link:',
    qr_s1: '<b>Step 1:</b> Scan the QR code with your phone camera or open directly in your browser.',
    qr_s2: '<b>Step 2:</b> Rotate 360° and test all 6 of Vara’s actions on the web.',
    qr_s3: '<b>Step 3:</b> Tap <b>“Place Vara in Real Space (AR)”</b> and point your camera at the floor or table.',
    qr_open_now: 'Open 3D Studio on this device →', qr_copy: 'Copy link'
  };
  var VI = {};

  /* ===================== dynamic strings ===================== */
  var S = {
    vi: {
      title: 'Varabond — Cùng AR khám phá thành phố Hồ Chí Minh',
      ar_found: 'AR · Đã tìm thấy mặt phẳng', ar_spawn: 'AR · Vara đã xuất hiện',
      greet: ['Xin chào! Mình là Vara — hướng dẫn viên kiêm bạn đồng hành của bạn ✨', 'Ban ngày, mình cùng bạn chinh phục 5 nhiệm vụ. Đêm xuống, ta giải mã 3 vụ án nhé!', 'Mỗi nơi bạn đặt chân đến sẽ để lại một huy hiệu trong Hộ chiếu đó. Đi thôi nào!'],
      wx_day: '☀ Nắng nhẹ', wx_night: '🌙 Trời quang',
      day: { hcm: { k: 'Chapter Zero · Ban ngày', t: 'Bưu điện Trung tâm Sài Gòn', m: '5 nhiệm vụ', b: 'Vào nhiệm vụ' }, bd: { k: 'Bình Dương · Ban ngày', t: 'Hành trình đang được chuẩn bị', p: 'Vara đang chuẩn bị những câu chuyện mới tại đây.' }, vt: { k: 'Vũng Tàu · Ban ngày', t: 'Biển & gió — trong lộ trình mở rộng', p: 'Những chương truyện ven biển sẽ sớm cập bến.' } },
      night: { hcm: { k: 'Chapter Zero · Ban đêm', t: 'Khu vực ngoài Nhà thờ Đức Bà', m: '3 vụ án', b: 'Mở Ống kính Ký Giới' }, bd: { k: 'Bình Dương · Ban đêm', t: 'Ký Giới chưa thức tỉnh ở đây', p: 'Những vụ án đêm đang được viết tiếp.' }, vt: { k: 'Vũng Tàu · Ban đêm', t: 'Đêm biển còn đang ngủ', p: 'Hãy quay lại khi Ký Giới thức tỉnh nơi này.' } },
      soon: 'Sắp ra mắt', notify: 'Đang chuẩn bị',
      tabs: ['Du ngoạn', 'Khám phá', 'Nhật ký', 'Hộ chiếu'],
      ask: function (t) { return 'Vara ơi, ' + t + ' là gì?' }, flip: 'Chạm để lật', back: 'Chạm để lật lại',
      terms: [
        { id: 'kygioi', n: 'Ký giới', img: 'vara_ar', d: 'Thế giới song song được hình thành từ những ký ức và câu chuyện từng có ý nghĩa nhưng đang dần bị lãng quên.' },
        { id: 'anky', n: 'Ấn ký', img: 'vara_card', d: 'Dấu ấn AR xuất hiện vào ban đêm tại vị trí an toàn. Chạm vào, những vòng sáng xoay và mở ra Bản đồ Ký Giới.' },
        { id: 'manh', n: 'Mảnh ký ức', img: 'vara_point', d: 'Phần thưởng được khôi phục sau mỗi nhiệm vụ, như Mảnh Ký Ức: Lời Nhắn. Không phải tiền ảo hay hộp quà may rủi.' },
        { id: 'huy', n: 'Huy hiệu', img: 'vara_stamp', d: 'Huy hiệu Địa danh nhận tại mỗi điểm đến, có thể gắn ảnh hoặc video của riêng bạn. Đủ bộ sưu tập sẽ mở Đại Huy Hiệu.' },
        { id: 'nguoi', n: 'Người lắng nghe', img: 'vara_wave', d: 'Vai trò của bạn trong câu chuyện: người khám phá tự tìm chứng cứ, cùng Vara giải mã những câu chuyện bị phong ấn.' }
      ],
      syms: [
        { id: 'sun', n: 'Mặt trời', img: 'sym_sun', d: 'Sài Gòn vào ban ngày, tín hiệu bắt đầu hành trình khám phá 5 nhiệm vụ.' },
        { id: 'moon', n: 'Mặt trăng', img: 'sym_moon', d: 'Sài Gòn thành phố về đêm, tín hiệu bắt đầu hành trình giải mã 3 vụ án.' },
        { id: 'gate', n: 'Cánh cổng', img: 'sym_gate', d: 'Thời điểm hai thế giới ngày và đêm được kết nối với nhau.' },
        { id: 'flow', n: 'Dòng chảy', img: 'sym_flow', d: 'Hành trình khám phá du lịch qua những chương truyện tại Sài Gòn.' },
        { id: 'star', n: 'Ánh sáng', img: 'sym_star', d: 'Dấu hiệu về những điều kỳ lạ chưa được khám phá trên hành trình.' }
      ],
      places: { po: ['Bưu điện Trung tâm Sài Gòn', 'Kiến trúc Pháp, chiếc đồng hồ trên lối vào'], book: ['Đường sách Nguyễn Văn Bình', 'Phố sách ngay cạnh Bưu điện'], nd: ['Nhà thờ Đức Bà (bên ngoài)', 'Ngắm hai tháp chuông từ khu vực công cộng'], cheo: ['Cà phê Cheo Leo', 'Quán cà phê vợt lâu năm trong hẻm'], ttd: ['Chung cư 42 Tôn Thất Đạm', 'Chung cư cũ với những quán cà phê nhỏ'], hsp: ['Hẻm Hào Sĩ Phường', 'Con hẻm cổ ở Chợ Lớn'], nh: ['Phố đi bộ Nguyễn Huệ', 'Không khí buổi tối nhộn nhịp'], bach: ['Bến Bạch Đằng', 'Ngắm sông Sài Gòn'] },
      thinking: 'Vara đang xếp lịch trình…',
      journal: [
        { k: 'Chứng cứ 01', h: 'Dấu Vết Thời Gian', p: 'Tìm thấy khi tái dựng tấm bưu thiếp bị khuyết bằng cách quan sát mặt tiền Bưu điện thật.', s: 'Đã tìm' },
        { k: 'Chứng cứ 02', h: 'Dấu Vết Kết Nối', p: 'Những dấu vết gợi nhắc một thời con người tìm cách gửi tin đi thật xa.', s: 'Đã tìm' },
        { k: 'Phần thưởng', h: 'Mảnh Ký Ức: Lời Nhắn', p: 'Một phong thư không có tên người nhận… Phần còn lại sẽ mở ra khi đêm xuống.', s: 'Mới' },
        { k: 'Ban đêm', h: 'Ấn Ký thức tỉnh', p: 'Trở lại vào một buổi tối bất kỳ, ở khu vực công cộng ngoài Nhà thờ Đức Bà.', s: 'Chờ bạn' }
      ],
      slots: ['Bưu điện', 'Nhà thờ', 'Đường sách', 'Sông SG', 'Phố đi bộ'],
      pcs: [{ c: 't-day', k: 'Hồi ngày', t: 'Bưu điện Trung tâm', s: '4 cảnh · Mặt trời', img: 'sym_sun', to: 'day' }, { c: 't-gate', k: 'Chapter Zero', t: 'Lá Thư Chưa Từng Đến', s: 'Chương mở đầu · Miễn phí', img: 'sym_gate', to: 'all' }, { c: 't-night', k: 'Hồi đêm', t: 'Nhà thờ Đức Bà', s: '5 cảnh · Mặt trăng', img: 'sym_moon', to: 'night' }],
      sheet: {
        k: 'Chapter Zero', t: 'Lá Thư Chưa Từng Đến', intro: 'Có những lời nhắn không lạc đường. Chúng chỉ đang chờ một người chịu lắng nghe.',
        day: 'Ban ngày · Bưu điện Trung tâm Sài Gòn', night: 'Ban đêm · Khu vực ngoài Nhà thờ Đức Bà',
        sc: [['Lời gọi giữa thành phố', 'Vara nghe thấy tiếng gọi từ một phong thư vô danh.'], ['Mật mã trên mặt tiền', 'Quan sát mặt tiền thật để tái dựng tấm bưu thiếp.'], ['Những con đường không thấy được', 'Nối các đường truyền để gửi tín hiệu đi xa.'], ['Gấp lại một ngày', 'Nhận Huy hiệu Bưu điện và Mảnh Ký Ức.'], ['Ấn Ký thức tỉnh', 'Chạm Ấn Ký AR để mở Bản đồ Ký Giới.'], ['Ba dấu cộng hưởng', 'Tự chọn thứ tự mở các hồ sơ điều tra.'], ['Cuộc điều tra', 'Ghép lập luận với bằng chứng bạn tìm được.'], ['Những lời đã gửi', 'Để lại lời nhắn của bạn cho người đến sau.'], ['Dấu niêm phong còn lại', 'Một bí ẩn lớn hơn đang chờ ở mùa truyện sau.']]
      },
      vPlay: 'Phát', vPause: 'Tạm dừng',
      cv_pre: ['Explore by day · Thành phố buổi sớm mai', 'Awaken by night · Thành phố về đêm'],
      bk_cover: 'Bìa sách', bk_back: 'Bìa sau', bk_pg: 'Trang', bk_sent: 'Đã gửi ✓',
      toc: [['Bìa', 0], ['Nhân vật', 2], ['Hồi I', 3], ['Cánh cổng', 7], ['Hồi II', 8], ['Kết', 11], ['Lời nhắn', 12]],
      cr_intro: 'Ảnh địa danh lấy từ Wikimedia Commons (đã thu nhỏ hoặc làm mờ để trình bày):',
      book: [{ c: 'cv', h: '<span class="pg-k">Chapter Zero</span><img src="{app_icon}" alt=""><h3>Lá Thư Chưa Từng Đến</h3><small>Cuốn Sách Ký Ức · Sài Gòn</small><span class="hint">Chạm hoặc kéo để mở sách →</span>' }, { c: 'endp', h: '<span class="orn">✦ ✦ ✦</span><p class="say" style="font-size:clamp(17px,2vw,26px)">“Có những lời nhắn không lạc đường. Chúng chỉ đang chờ một người chịu lắng nghe.”</p><span class="orn">✦</span><p class="note" style="border:0;text-align:center">Cuốn sách này thuộc về một Người Lắng Nghe.</p>' }, { c: '', h: '<div class="pg-k">Mở đầu</div><h4>Những người trong câu chuyện</h4><div class="cast"><div><img src="{vara_wave}" alt=""><span><b>Vara</b>Chú chim nhỏ trắng và xanh ngọc, hiếu kỳ, đôi khi hơi vụng về. Người dẫn chuyện của bạn.</span></div><div><img src="{vara_search}" alt=""><span><b>Bạn — Người Lắng Nghe</b>Người tự tìm chứng cứ và có quyền phản biện Vara.</span></div><div><img src="{sym_flow}" alt=""><span><b>Người viết thư</b>Không hiện hình, chỉ tồn tại qua những dòng chữ ngắn.</span></div></div>' }, { c: '', h: '<div class="pg-k">Hồi I · Ban ngày</div><h4>Lời gọi giữa thành phố</h4><p class="dropcap">Gần Bưu điện Trung tâm Sài Gòn, Vara nghe thấy một tiếng gọi yếu ớt. Đó là một phong thư: không tên người nhận, không địa chỉ, một phần nội dung đã bị niêm phong trong Ký Giới.</p><p class="say">“Cậu có nghe thấy không? Có gì đó vừa gọi tớ từ toà nhà màu vàng kia!”</p><div class="ill"><img src="{sym_sun}" alt=""></div>' }, { c: '', h: '<div class="pg-k">Nhiệm vụ 1 · S01 & S02</div><h4>Mật mã trên mặt tiền</h4><p>Ghép 2 mảnh bưu thiếp khuyết và lật mặt sau qua quan sát kiến trúc Bưu điện thật.</p><div class="pg-phones"><div class="pg-phone" title="S01: Mật mã trên mặt tiền"><img src="{ch0_s01}" alt="S01: Mật mã trên mặt tiền"></div><div class="pg-phone" title="S02: Lật bưu thiếp Dư Ức"><img src="{ch0_s02}" alt="S02: Lật bưu thiếp Dư Ức"></div></div><p class="say" style="text-align:center;margin:3px 0">“Thời gian · Kết nối”</p>' }, { c: '', h: '<div class="pg-k">Nhiệm vụ 2 · S03</div><h4>Khôi phục tín hiệu</h4><p>Xoay từng đoạn dây truyền tin theo sơ đồ mạng lưới điện báo Sài Gòn 1936 để nối mạch thông tin.</p><div class="pg-phone-center"><div class="pg-phone" title="S03: Khôi phục tín hiệu"><img src="{ch0_s03}" alt="S03: Khôi phục tín hiệu"></div></div><p class="say" style="text-align:center;margin:3px 0">…nhưng vì sao lá thư vẫn không đến nơi?</p>' }, { c: '', h: '<div class="pg-k">Khép lại chặng ngày · S04</div><h4>Gấp lại một ngày</h4><p>Khép lại hành trình ban ngày tại Bưu điện, nhận Mảnh Ký Ức: Lời Nhắn và hẹn gặp khi đêm xuống.</p><div class="pg-phone-center"><div class="pg-phone" title="S04: Gấp lại một ngày"><img src="{ch0_s04}" alt="S04: Gấp lại một ngày"></div></div><p class="say" style="text-align:center;margin:3px 0">“Hẹn cậu khi đêm xuống nhé!”</p>' }, { c: 'dusk', h: '<div class="pg-k" style="text-align:center">Giao thời</div><div class="ill"><img src="{sym_gate}" alt="" style="width:44%"></div><h4 style="text-align:center">Khi hai thế giới chạm vào nhau</h4><p style="text-align:center">Hoàng hôn buông xuống, lớp Ký Giới dần hiện ra trên những con phố quen.</p><p class="note">Phần đêm có thể chơi vào bất kỳ buổi tối nào, không bắt buộc ngay trong ngày.</p>' }, { c: '', h: '<div class="pg-k">Hồi II · Ban đêm · S05</div><h4>Ấn Ký thức tỉnh</h4><p class="dropcap">Khu vực ngoài Nhà thờ Đức Bà, bạn mở Ống kính Ký Giới. Ấn Ký AR thức tỉnh, xoay mở cánh cổng huyền bí.</p><div class="pg-phone-center"><div class="pg-phone" title="S05: Ấn Ký thức tỉnh"><img src="{ch0_s05}" alt="S05: Ấn Ký thức tỉnh"></div></div><p class="note">An toàn: AR chỉ dùng tại không gian công cộng an toàn.</p>' }, { c: '', h: '<div class="pg-k">Cuộc điều tra · S06 & S07</div><h4>Ba dấu cộng hưởng</h4><p>Khảo sát tiến trình tháp chuông, gỡ 3 vòng niêm phong và khớp lập luận Người nhận — Nguyên nhân — Hành động.</p><div class="pg-phones"><div class="pg-phone" title="S06: Ba dấu cộng hưởng"><img src="{ch0_s06}" alt="S06: Ba dấu cộng hưởng"></div><div class="pg-phone" title="S07: Bàn chứng cứ suy luận"><img src="{ch0_s07}" alt="S07: Bàn chứng cứ suy luận"></div></div><p class="say" style="text-align:center;margin:3px 0">“Gìn giữ không phải lúc nào cũng là khoá chặt.”</p>' }, { c: '', h: '<div class="pg-k">Cảnh Ký Ức · S08</div><h4>Những lời đã gửi</h4><p>Soạn lời nhắn gửi người đến sau. Phong thư mở ra và đàn chim giấy bay vút lên bầu trời đêm AR.</p><div class="pg-phone-center"><div class="pg-phone" title="S08: Những lời đã gửi"><img src="{ch0_s08}" alt="S08: Những lời đã gửi"></div></div><div class="birds"><i style="--l:12%;--dx:-30px;--dl:0s"></i><i style="--l:26%;--dx:20px;--dl:.25s"></i><i style="--l:40%;--dx:-12px;--dl:.5s"></i><i style="--l:54%;--dx:34px;--dl:.15s"></i><i style="--l:66%;--dx:-24px;--dl:.65s"></i><i style="--l:78%;--dx:16px;--dl:.4s"></i><i style="--l:88%;--dx:-8px;--dl:.8s"></i></div>' }, { c: '', h: '<div class="pg-k">Kết · S09</div><h4>Dấu niêm phong còn lại</h4><p>Đọc trọn lá thư Dư Ức từ người viết vô danh: khép lại kịch bản Chapter 0 nhưng để lại bí ẩn mở.</p><div class="pg-phone-center"><div class="pg-phone" title="S09: Đọc trọn lá thư Dư Ức"><img src="{ch0_s09}" alt="S09: Đọc trọn lá thư Dư Ức"></div></div><p class="say" style="text-align:center;margin:3px 0">“Cảm ơn cậu đã lắng nghe.” — Vara</p>' }, { c: '', h: '<div class="pg-k">Trang của bạn</div><h4>Viết lời nhắn cho người đến sau</h4><div class="lines"><textarea class="pg-int" id="bkNote" maxlength="220" placeholder="Viết một lời nhắn…"></textarea></div><div class="birds"><i style="--l:12%;--dx:-30px;--dl:0s"></i><i style="--l:26%;--dx:20px;--dl:.25s"></i><i style="--l:40%;--dx:-12px;--dl:.5s"></i><i style="--l:54%;--dx:34px;--dl:.15s"></i><i style="--l:66%;--dx:-24px;--dl:.65s"></i><i style="--l:78%;--dx:16px;--dl:.4s"></i><i style="--l:88%;--dx:-8px;--dl:.8s"></i></div><button class="send pg-int" id="bkSend">Gửi cùng chim giấy ✈</button><p class="note">Lời nhắn chỉ lưu trên trình duyệt của bạn.</p>' }, { c: 'cv', h: '<span class="wm2"><span>v</span><span class="a">a</span><span class="r">r</span><span>abond</span></span><img src="{vara_victory}" alt=""><small>Chapter Zero · Miễn phí</small><small style="margin-top:6px">Sắp ra mắt trên Android</small>' }]
    },
    en: {
      title: 'Varabond — Explore Ho Chi Minh City with AR',
      ar_found: 'AR · Surface found', ar_spawn: 'AR · Vara has appeared',
      greet: ['Hi there! I’m Vara — your guide and travel buddy ✨', 'By day we’ll take on 5 missions together. When night falls, we solve 3 mysteries!', 'Every place you visit leaves a badge in your Passport. Let’s go!'],
      wx_day: '☀ Light sun', wx_night: '🌙 Clear sky',
      day: { hcm: { k: 'Chapter Zero · Day', t: 'Saigon Central Post Office', m: '5 missions', b: 'Start mission' }, bd: { k: 'Binh Duong · Day', t: 'A journey in the making', p: 'Vara is preparing new stories here.' }, vt: { k: 'Vung Tau · Day', t: 'Sea & wind — on the roadmap', p: 'Seaside chapters are coming ashore soon.' } },
      night: { hcm: { k: 'Chapter Zero · Night', t: 'Outside Notre-Dame Cathedral', m: '3 mysteries', b: 'Open the Ky Gioi lens' }, bd: { k: 'Binh Duong · Night', t: 'Ky Gioi hasn’t awakened here yet', p: 'The night mysteries are still being written.' }, vt: { k: 'Vung Tau · Night', t: 'The seaside night still sleeps', p: 'Come back when Ky Gioi awakens here.' } },
      soon: 'Coming soon', notify: 'In progress',
      tabs: ['Wander', 'Discover', 'Journal', 'Passport'],
      ask: function (t) { return 'Vara, what is “' + t + '”?' }, flip: 'Tap to flip', back: 'Tap to flip back',
      terms: [
        { id: 'kygioi', n: 'Ky Gioi', img: 'vara_ar', d: 'A parallel world formed from memories and stories that once mattered but are slowly being forgotten.' },
        { id: 'anky', n: 'Sigil', img: 'vara_card', d: 'An AR mark that appears at night in a safe spot. Tap it and rings of light spin open the Ky Gioi map.' },
        { id: 'manh', n: 'Memory Fragment', img: 'vara_point', d: 'A reward restored after each mission, like the Memory Fragment: The Message. Not a virtual currency or a loot box.' },
        { id: 'huy', n: 'Badge', img: 'vara_stamp', d: 'A Landmark Badge earned at each place, personalised with your own photo or video. Complete a set to unlock the Grand Badge.' },
        { id: 'nguoi', n: 'The Listener', img: 'vara_wave', d: 'Your role in the story: an explorer who finds the evidence and helps Vara decode sealed stories.' }
      ],
      syms: [
        { id: 'sun', n: 'The Sun', img: 'sym_sun', d: 'Saigon by day — the signal to begin a journey of 5 missions.' },
        { id: 'moon', n: 'The Moon', img: 'sym_moon', d: 'Saigon by night — the signal to begin solving 3 mysteries.' },
        { id: 'gate', n: 'The Gate', img: 'sym_gate', d: 'The moment the day and night worlds connect.' },
        { id: 'flow', n: 'The Flow', img: 'sym_flow', d: 'The travel journey through Saigon’s story chapters.' },
        { id: 'star', n: 'The Light', img: 'sym_star', d: 'Signs of wonders yet to be discovered along the way.' }
      ],
      places: { po: ['Saigon Central Post Office', 'French architecture, the clock above the entrance'], book: ['Nguyen Van Binh Book Street', 'A street of books next to the Post Office'], nd: ['Notre-Dame Cathedral (outside)', 'See the twin bell towers from the public area'], cheo: ['Cheo Leo Café', 'A long-running sock-filter coffee spot in an alley'], ttd: ['42 Ton That Dam Apartments', 'An old block filled with tiny cafés'], hsp: ['Hao Si Phuong Alley', 'An old alley in Cho Lon'], nh: ['Nguyen Hue Walking Street', 'Lively evening atmosphere'], bach: ['Bach Dang Wharf', 'Views over the Saigon River'] },
      thinking: 'Vara is planning your route…',
      journal: [
        { k: 'Evidence 01', h: 'Trace of Time', p: 'Found by rebuilding a torn postcard while looking closely at the real Post Office façade.', s: 'Found' },
        { k: 'Evidence 02', h: 'Trace of Connection', p: 'Traces that recall a time when people searched for ways to send messages far away.', s: 'Found' },
        { k: 'Reward', h: 'Memory Fragment: The Message', p: 'An envelope with no recipient’s name… The rest opens when night falls.', s: 'New' },
        { k: 'Night', h: 'The Sigil Awakens', p: 'Come back any evening, to the public area outside Notre-Dame Cathedral.', s: 'Waiting' }
      ],
      slots: ['Post Office', 'Cathedral', 'Book St.', 'Saigon River', 'Walking St.'],
      pcs: [{ c: 't-day', k: 'Day act', t: 'Central Post Office', s: '4 scenes · The Sun', img: 'sym_sun', to: 'day' }, { c: 't-gate', k: 'Chapter Zero', t: 'The Letter That Never Arrived', s: 'Opening chapter · Free', img: 'sym_gate', to: 'all' }, { c: 't-night', k: 'Night act', t: 'Notre-Dame Cathedral', s: '5 scenes · The Moon', img: 'sym_moon', to: 'night' }],
      sheet: {
        k: 'Chapter Zero', t: 'The Letter That Never Arrived', intro: 'Some messages never lose their way. They are simply waiting for someone willing to listen.',
        day: 'Day · Saigon Central Post Office', night: 'Night · Outside Notre-Dame Cathedral',
        sc: [['A call in the city', 'Vara hears a faint call from a nameless envelope.'], ['The code on the façade', 'Study the real façade to rebuild the postcard.'], ['Invisible roads', 'Connect the lines to send a signal far away.'], ['Folding up the day', 'Earn the Post Office Badge and a Memory Fragment.'], ['The sigil awakens', 'Tap the AR sigil to open the Ky Gioi map.'], ['Three resonant marks', 'Choose the order in which to open the case files.'], ['The investigation', 'Match your reasoning to the evidence you found.'], ['The words we sent', 'Leave your own message for whoever comes next.'], ['The seal that remains', 'A bigger mystery awaits in the next season.']]
      },
      vPlay: 'Play', vPause: 'Pause',
      cv_pre: ['Explore by day · The city at dawn', 'Awaken by night · The city after dark'],
      bk_cover: 'Front cover', bk_back: 'Back cover', bk_pg: 'Page', bk_sent: 'Sent ✓',
      toc: [['Cover', 0], ['Characters', 2], ['Act I', 3], ['The Gate', 7], ['Act II', 8], ['Ending', 11], ['Your note', 12]],
      cr_intro: 'Landmark photos from Wikimedia Commons (resized or blurred for display):',
      book: [{ c: 'cv', h: '<span class="pg-k">Chapter Zero</span><img src="{app_icon}" alt=""><h3>The Letter That Never Arrived</h3><small>The Memory Book · Saigon</small><span class="hint">Tap or drag to open →</span>' }, { c: 'endp', h: '<span class="orn">✦ ✦ ✦</span><p class="say" style="font-size:clamp(17px,2vw,26px)">“Some messages never lose their way. They are simply waiting for someone willing to listen.”</p><span class="orn">✦</span><p class="note" style="border:0;text-align:center">This book belongs to a Listener.</p>' }, { c: '', h: '<div class="pg-k">Prologue</div><h4>The people in this story</h4><div class="cast"><div><img src="{vara_wave}" alt=""><span><b>Vara</b>A little white-and-turquoise bird — curious, sometimes a bit clumsy. Your storyteller.</span></div><div><img src="{vara_search}" alt=""><span><b>You — the Listener</b>The one who finds the evidence and may question Vara.</span></div><div><img src="{sym_flow}" alt=""><span><b>The letter writer</b>Never seen — present only through a few short lines.</span></div></div>' }, { c: '', h: '<div class="pg-k">Act I · Day</div><h4>A call in the city</h4><p class="dropcap">Near Saigon Central Post Office, Vara hears a faint call. It comes from an envelope with no recipient’s name and no address, part of it sealed away in Ky Gioi.</p><p class="say">“Did you hear that? Something just called me from that yellow building!”</p><div class="ill"><img src="{sym_sun}" alt=""></div>' }, { c: '', h: '<div class="pg-k">Mission 1 · S01 & S02</div><h4>The code on the façade</h4><p>Rebuild the postcard and flip to its reverse by observing the real Post Office façade.</p><div class="pg-phones"><div class="pg-phone" title="S01: The code on the façade"><img src="{ch0_s01}" alt="S01: The code on the façade"></div><div class="pg-phone" title="S02: The postcard’s reverse"><img src="{ch0_s02}" alt="S02: The postcard’s reverse"></div></div><p class="say" style="text-align:center;margin:3px 0">“Time · Connection”</p>' }, { c: '', h: '<div class="pg-k">Mission 2 · S03</div><h4>Invisible roads</h4><p>Rotate wire segments along the 1936 telegraph map to restore the transmission signal.</p><div class="pg-phone-center"><div class="pg-phone" title="S03: Restoring the signal"><img src="{ch0_s03}" alt="S03: Restoring the signal"></div></div><p class="say" style="text-align:center;margin:3px 0">…so why does the letter still not arrive?</p>' }, { c: '', h: '<div class="pg-k">Closing the day · S04</div><h4>Folding up the day</h4><p>Conclude the daytime chapter at the Post Office, receive the Memory Fragment: The Message.</p><div class="pg-phone-center"><div class="pg-phone" title="S04: Folding up the day"><img src="{ch0_s04}" alt="S04: Folding up the day"></div></div><p class="say" style="text-align:center;margin:3px 0">“See you when night falls!”</p>' }, { c: 'dusk', h: '<div class="pg-k" style="text-align:center">Twilight</div><div class="ill"><img src="{sym_gate}" alt="" style="width:44%"></div><h4 style="text-align:center">When two worlds touch</h4><p style="text-align:center">As dusk settles, the layer of Ky Gioi slowly appears over familiar streets.</p><p class="note">The night part can be played on any evening — not necessarily the same day.</p>' }, { c: '', h: '<div class="pg-k">Act II · Night · S05</div><h4>The sigil awakens</h4><p class="dropcap">Outside Notre-Dame Cathedral, open the Ky Gioi lens. The AR sigil awakens, unlocking the hidden realm.</p><div class="pg-phone-center"><div class="pg-phone" title="S05: The sigil awakens"><img src="{ch0_s05}" alt="S05: The sigil awakens"></div></div><p class="note">Safety: AR is used only in safe public spaces.</p>' }, { c: '', h: '<div class="pg-k">The investigation · S06 & S07</div><h4>Three resonant marks</h4><p>Examine spire timelines, break 3 seal rings and link Recipient — Reason — Action on the deduction board.</p><div class="pg-phones"><div class="pg-phone" title="S06: Three resonant marks"><img src="{ch0_s06}" alt="S06: Three resonant marks"></div><div class="pg-phone" title="S07: The deduction desk"><img src="{ch0_s07}" alt="S07: The deduction desk"></div></div><p class="say" style="text-align:center;margin:3px 0">“Keeping something safe doesn’t always mean locking it away.”</p>' }, { c: '', h: '<div class="pg-k">Memory Scene · S08</div><h4>The words we sent</h4><p>Compose your note for the next traveler. The letter glows as origami birds take flight in AR.</p><div class="pg-phone-center"><div class="pg-phone" title="S08: The words we sent"><img src="{ch0_s08}" alt="S08: The words we sent"></div></div><div class="birds"><i style="--l:12%;--dx:-30px;--dl:0s"></i><i style="--l:26%;--dx:20px;--dl:.25s"></i><i style="--l:40%;--dx:-12px;--dl:.5s"></i><i style="--l:54%;--dx:34px;--dl:.15s"></i><i style="--l:66%;--dx:-24px;--dl:.65s"></i><i style="--l:78%;--dx:16px;--dl:.4s"></i><i style="--l:88%;--dx:-8px;--dl:.8s"></i></div>' }, { c: '', h: '<div class="pg-k">Ending · S09</div><h4>The seal that remains</h4><p>Read the unsealed letter: Chapter 0 concludes, leaving a deeper mystery for the next season.</p><div class="pg-phone-center"><div class="pg-phone" title="S09: The lingering seal"><img src="{ch0_s09}" alt="S09: The lingering seal"></div></div><p class="say" style="text-align:center;margin:3px 0">“Thank you for listening.” — Vara</p>' }, { c: '', h: '<div class="pg-k">Your page</div><h4>Write a note for whoever comes next</h4><div class="lines"><textarea class="pg-int" id="bkNote" maxlength="220" placeholder="Write a message…"></textarea></div><div class="birds"><i style="--l:12%;--dx:-30px;--dl:0s"></i><i style="--l:26%;--dx:20px;--dl:.25s"></i><i style="--l:40%;--dx:-12px;--dl:.5s"></i><i style="--l:54%;--dx:34px;--dl:.15s"></i><i style="--l:66%;--dx:-24px;--dl:.65s"></i><i style="--l:78%;--dx:16px;--dl:.4s"></i><i style="--l:88%;--dx:-8px;--dl:.8s"></i></div><button class="send pg-int" id="bkSend">Send with paper birds ✈</button><p class="note">Your note is saved only in your browser.</p>' }, { c: 'cv', h: '<span class="wm2"><span>v</span><span class="a">a</span><span class="r">r</span><span>abond</span></span><img src="{vara_victory}" alt=""><small>Chapter Zero · Free</small><small style="margin-top:6px">Coming soon on Android</small>' }]
    }
  };
  function L() { return S[LANG] }

  /* ===================== i18n apply ===================== */
  var i18nEls = $$('[data-i18n]');
  i18nEls.forEach(function (el) { var k = el.getAttribute('data-i18n'); if (!(k in VI)) VI[k] = el.innerHTML; });
  function applyLang() {
    document.documentElement.lang = LANG;
    i18nEls.forEach(function (el) { var k = el.getAttribute('data-i18n'); var v = (LANG === 'en' ? EN[k] : VI[k]); if (v != null) el.innerHTML = v; });
    document.title = L().title;
    var lg = $('#lang'); lg.setAttribute('data-l', LANG);
    $$('#lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === LANG) });
    renderCities(); renderDict(); renderJournal(); renderSlots(); updateArStatus(); renderBook(); renderCredits(); renderCover(true);
    if (lastPlan) renderPlan(false);
    if (bubble && bubble.classList.contains('show') && gi > 0) { typeInto(bubbleTxt, L().greet[(gi - 1) % L().greet.length], 14); }
    if (sheetOpen) fillSheet(sheetMode);
    try { localStorage.setItem('vb_lang', LANG) } catch (e) { }
  }
  $$('#lang button').forEach(function (b) { b.addEventListener('click', function () { if (LANG !== b.dataset.lang) { LANG = b.dataset.lang; applyLang(); } }) });

  /* ===================== nav ===================== */
  var nav = $('#nav'), lastY = 0, prog = $('#progress'), toTop = $('#toTop');
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
    if (!nav.classList.contains('mopen')) { if (y > lastY + 6 && y > 320) nav.classList.add('hide'); else if (y < lastY - 6) nav.classList.remove('hide'); }
    lastY = y;
    toTop.classList.toggle('show', y > 900);
    updateFlow(); if (typeof tilesUpd === 'function') tilesUpd();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  $$('.mi>button.pill').forEach(function (b) {
    b.addEventListener('click', function (e) {
      var li = b.parentNode, open = !li.classList.contains('open');
      $$('.mi.open').forEach(function (m) { m.classList.remove('open'); m.firstElementChild.setAttribute('aria-expanded', 'false') });
      if (open) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      e.stopPropagation();
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.mi')) $$('.mi.open').forEach(function (m) { m.classList.remove('open') }); });
  $('#burger').addEventListener('click', function () { nav.classList.toggle('mopen'); nav.classList.remove('hide'); });
  $$('.menu a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('mopen'); $$('.mi.open').forEach(function (m) { m.classList.remove('open') }); }) });
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }) });

  /* ===================== reveal ===================== */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }) }, { threshold: .14, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.rv, #iconsSky').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });

  /* ===================== stars ===================== */
  (function () { var st = $('#stars'); if (!st) return; var h = ''; for (var i = 0; i < 70; i++) { var t = Math.random() * 100, l = Math.random() * 100, s = Math.random() * 2 + 1.5; h += '<i style="top:' + t + '%;left:' + l + '%;width:' + s + 'px;height:' + s + 'px;animation-delay:' + (-Math.random() * 3).toFixed(2) + 's;animation-duration:' + (2 + Math.random() * 3).toFixed(2) + 's"></i>' } st.innerHTML = h; })();

  /* ===================== sparkles util ===================== */
  var SPC = ['#ffd444', '#e7aa59', '#37a8b6', '#927ddb', '#fff'];
  function sparkle(container, x, y, n) {
    if (reduce) return; n = n || 14;
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span'); s.className = 'spark'; var a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 90;
      s.style.left = x + 'px'; s.style.top = y + 'px'; s.style.setProperty('--x', Math.cos(a) * d + 'px'); s.style.setProperty('--y', Math.sin(a) * d + 'px');
      s.style.setProperty('--s', (6 + Math.random() * 10) + 'px'); s.style.setProperty('--c', SPC[i % SPC.length]);
      container.appendChild(s); setTimeout((function (el) { return function () { el.remove() } })(s), 1000);
    }
  }

  /* ===================== HERO AR ===================== */
  var ar = $('#ar'), varaBtn = $('#varaBtn'), varaWrap = $('#varaWrap'), bubble = $('#bubble'), bubbleTxt = $('#bubbleTxt'), tapBtn = $('#tapBtn'), voice = $('#varaVoice');
  var arState = 'scanning';
  function updateArStatus() { var el = $('#arStatus'); if (!el) return; if (arState === 'found') el.textContent = L().ar_found; else if (arState === 'spawned') el.textContent = L().ar_spawn; else el.innerHTML = (LANG === 'en' ? EN.ar_scan : VI.ar_scan); }
  function startAR() {
    if (ar._go) return; ar._go = 1;
    setTimeout(function () { arState = 'found'; ar.classList.add('found'); updateArStatus(); }, reduce ? 0 : 1200);
    setTimeout(function () { arState = 'spawned'; ar.classList.remove('scanning'); ar.classList.add('spawned'); updateArStatus(); var r = ar.getBoundingClientRect(); sparkle(ar, r.width / 2, r.height * .6, 18); }, reduce ? 0 : 2000);
  }
  if ('IntersectionObserver' in window) { new IntersectionObserver(function (es) { if (es[0].isIntersecting) startAR(); }, { threshold: .4 }).observe(ar); } else startAR();
  if (fine && !reduce) {
    ar.addEventListener('pointermove', function (e) {
      var r = ar.getBoundingClientRect(); var dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
      varaWrap.style.setProperty('--tx', (dx * 26) + 'px'); varaWrap.style.setProperty('--ty', (dy * 16) + 'px'); varaWrap.style.setProperty('--rot', (dx * 8) + 'deg');
      $('#arShadow').style.transform = 'translateX(' + (dx * 20) + 'px)';
    });
    ar.addEventListener('pointerleave', function () { varaWrap.style.setProperty('--tx', '0px'); varaWrap.style.setProperty('--ty', '0px'); varaWrap.style.setProperty('--rot', '0deg'); $('#arShadow').style.transform = ''; });
  }
  var gi = 0, typing = null;
  function typeInto(el, text, speed, done) {
    clearInterval(el._t); el.textContent = ''; if (reduce) { el.textContent = text; done && done(); return; }
    var i = 0; el._t = setInterval(function () { el.textContent = text.slice(0, ++i); if (i >= text.length) { clearInterval(el._t); done && done(); } }, speed || 28);
  }
  function speak(text) {
    // 1) file ghi âm (nếu có) cho lời chào đầu tiên
    if (voice && voice.getAttribute('src') && gi === 1) { try { voice.currentTime = 0; var p = voice.play(); if (p && p.catch) p.catch(function () { }); tapBtn.classList.add('playing'); voice.onended = function () { tapBtn.classList.remove('playing') }; return; } catch (e) { } }
    // 2) giọng đọc của trình duyệt (chỉ khi có giọng đúng ngôn ngữ)
    if (!('speechSynthesis' in window)) return;
    try {
      speechSynthesis.cancel();
      var want = LANG === 'en' ? 'en' : 'vi', vs = speechSynthesis.getVoices().filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(want) === 0 });
      if (!vs.length) return;
      var u = new SpeechSynthesisUtterance(text.replace(/[✨!]/g, function (m) { return m === '!' ? '!' : '' })); u.voice = vs[0]; u.lang = vs[0].lang; u.pitch = 1.35; u.rate = 1.02;
      u.onstart = function () { tapBtn.classList.add('playing') }; u.onend = function () { tapBtn.classList.remove('playing') };
      speechSynthesis.speak(u);
    } catch (e) { }
  }
  if ('speechSynthesis' in window) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = function () { } } catch (e) { } }
  function talk() {
    if (arState !== 'spawned') return;
    var lines = L().greet, text = lines[gi % lines.length]; gi++;
    varaBtn.classList.remove('hop'); void varaBtn.offsetWidth; varaBtn.classList.add('hop');
    var r = ar.getBoundingClientRect(); sparkle(ar, r.width * .55, r.height * .45, 12);
    bubble.classList.add('show'); typeInto(bubbleTxt, text, 26);
    speak(text);
  }
  varaBtn.addEventListener('click', talk); tapBtn.addEventListener('click', talk);

  /* ===================== DAY / NIGHT PHONES ===================== */
  var cityState = { dayPhone: 'hcm', nightPhone: 'hcm' };
  var CLOUD = '<svg viewBox="0 0 200 90"><g fill="#fff"><circle cx="62" cy="54" r="30"/><circle cx="104" cy="38" r="36"/><circle cx="146" cy="56" r="26"/><rect x="36" y="54" width="136" height="32" rx="16"/></g></svg>';
  var SB = function (light) { return '<div class="sbar' + (light ? ' light' : '') + '"><span>' + (light ? '19:45' : '06:42') + '</span><span class="ic"><span class="bars"><i style="height:4px"></i><i style="height:6px"></i><i style="height:8px"></i><i style="height:10px"></i></span><span class="bat"></span></span></div>' };
  var CITY_SVG = {
    hcm: '<svg class="city" viewBox="0 0 260 150"><g fill="none" stroke="#163b65" stroke-width="1.6" stroke-linecap="round"><path d="M40 34q5-5 10 0q5-5 10 0"/><path d="M70 22q4-4 8 0q4-4 8 0"/></g><g fill="#9fd6cf" stroke="#163b65" stroke-width="2"><circle cx="14" cy="112" r="16"/><circle cx="248" cy="108" r="18"/></g><g fill="#fff7e8" stroke="#163b65" stroke-width="2.2" stroke-linejoin="round"><rect x="24" y="82" width="212" height="68"/><rect x="94" y="62" width="72" height="88"/><path d="M88 64 L130 32 L172 64z"/><rect x="112" y="102" width="36" height="48" rx="18" fill="#f5deb5"/><circle cx="130" cy="82" r="10" fill="#fff"/></g><rect x="24" y="78" width="212" height="6" fill="#f5deb5" stroke="#163b65" stroke-width="2"/><path d="M130 82v-6M130 82l4 3" stroke="#163b65" stroke-width="1.6" stroke-linecap="round"/><g fill="#cce8f5" stroke="#163b65" stroke-width="1.6"><rect x="34" y="96" width="13" height="22" rx="6.5"/><rect x="54" y="96" width="13" height="22" rx="6.5"/><rect x="74" y="96" width="13" height="22" rx="6.5"/><rect x="173" y="96" width="13" height="22" rx="6.5"/><rect x="193" y="96" width="13" height="22" rx="6.5"/><rect x="213" y="96" width="13" height="22" rx="6.5"/></g><rect x="0" y="146" width="260" height="4" fill="#163b65" opacity=".18"/></svg>',
    bd: '<svg class="city" viewBox="0 0 260 120"><g fill="#e3f3fc" stroke="#163b65" stroke-width="2"><rect x="20" y="58" width="40" height="62"/><rect x="66" y="30" width="34" height="90"/><rect x="108" y="48" width="50" height="72"/><rect x="164" y="20" width="30" height="100"/><rect x="200" y="64" width="44" height="56"/></g><g fill="#cce8f5"><rect x="74" y="40" width="6" height="8"/><rect x="86" y="40" width="6" height="8"/><rect x="74" y="56" width="6" height="8"/><rect x="172" y="30" width="6" height="8"/><rect x="172" y="46" width="6" height="8"/><rect x="118" y="60" width="8" height="8"/><rect x="134" y="60" width="8" height="8"/></g></svg>',
    vt: '<svg class="city" viewBox="0 0 260 120"><path d="M0 96 Q30 88 60 96 T120 96 T180 96 T260 96 V120 H0z" fill="#37a8b6" opacity=".7"/><path d="M0 104 Q30 98 60 104 T120 104 T180 104 T260 104 V120 H0z" fill="#14658e" opacity=".8"/><g stroke="#163b65" stroke-width="2"><path d="M190 92 L196 40 L206 40 L212 92z" fill="#fff7e8"/><rect x="192" y="30" width="18" height="10" fill="#f5deb5"/><path d="M190 30 L201 20 L212 30z" fill="#e7aa59"/></g><path d="M150 80 L60 72 L60 84z" fill="#ffd444" opacity=".35"/><path d="M20 92 Q60 70 110 92z" fill="#cce8f5" stroke="#163b65" stroke-width="2"/></svg>'
  };
  var CITY_NIGHT_SVG = {
    bd: '<svg class="city" viewBox="0 0 260 120"><g fill="#17284b"><rect x="20" y="58" width="40" height="62"/><rect x="66" y="30" width="34" height="90"/><rect x="108" y="48" width="50" height="72"/><rect x="164" y="20" width="30" height="100"/><rect x="200" y="64" width="44" height="56"/></g><g fill="#ffd444"><rect class="tw" x="74" y="40" width="5" height="7"/><rect x="86" y="56" width="5" height="7"/><rect x="172" y="30" width="5" height="7"/><rect x="172" y="62" width="5" height="7"/><rect x="118" y="60" width="7" height="7"/><rect x="30" y="70" width="5" height="7"/><rect x="214" y="76" width="5" height="7"/></g></svg>',
    vt: '<svg class="city" viewBox="0 0 260 120"><path d="M0 96 Q30 88 60 96 T120 96 T180 96 T260 96 V120 H0z" fill="#14658e" opacity=".6"/><path d="M0 104 Q30 98 60 104 T120 104 T180 104 T260 104 V120 H0z" fill="#17284b"/><g><path d="M190 92 L196 40 L206 40 L212 92z" fill="#223966"/><rect x="192" y="30" width="18" height="10" fill="#ffd444"/><path d="M192 35 L60 20 L60 50z" fill="#ffd444" opacity=".18"/></g><path d="M20 92 Q60 70 110 92z" fill="#223966"/></svg>'
  };
  function tabbarHTML(dark, on) {
    var t = L().tabs, ic = ['<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zm0 2 6 2v10l-6-2V6z"/>', '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.5 6.5-2 5-5 2 2-5 5-2z"/>', '<path d="M5 3h11l3 3v15H5z"/>', '<path d="M6 2h12v20H6zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>'];
    return '<div class="tabbar' + (dark ? ' dark' : '') + '">' + t.map(function (n, i) { return '<span' + (i === on ? ' class="on"' : '') + '><svg viewBox="0 0 24 24" fill="currentColor">' + ic[i] + '</svg><b>' + n + '</b></span>' }).join('') + '</div>'
  }
  function dayPane(c) {
    var d = L().day[c];
    if (c === 'hcm') return '<div class="pane real-pane" data-c="hcm"><img class="app-shot" src="' + A.app_map_day + '" alt="Varabond — Bản đồ 3D ban ngày"></div>';
    var h = '<div class="pane" data-c="' + c + '">' + SB(false) + '<div class="ill day"><img class="sym sun" src="' + A.sym_sun + '" alt=""><span class="mini-cloud" style="top:92px">' + CLOUD + '</span><span class="mini-cloud" style="top:130px;animation-delay:-7s;width:50px;opacity:.8">' + CLOUD + '</span>' + CITY_SVG[c] + '</div>' +
      '<div class="app-head"><span class="logo"><span>v</span><span class="a">a</span><span class="r">r</span><span>abond</span></span><span class="wx">' + L().wx_day + '</span></div>' +
      '<div class="mcard"><span class="k">' + d.k + '</span><h4>' + d.t + '</h4><p>' + d.p + '</p><div class="mrow"><span class="lock">🔒 ' + L().soon + '</span><span class="mbtn ghost">' + L().notify + '</span></div></div>';
    return h + tabbarHTML(false, 0) + '</div>';
  }
  function nightPane(c) {
    var d = L().night[c];
    if (c === 'hcm') return '<div class="pane real-pane" data-c="hcm"><img class="app-shot" src="' + A.app_map_night + '" alt="Varabond — Bản đồ 3D ban đêm"></div>';
    var tw = ''; for (var i = 0; i < 14; i++) tw += '<i class="tw" style="left:' + (Math.random() * 95) + '%;top:' + (Math.random() * 55) + '%;animation-delay:' + (-Math.random() * 2.4).toFixed(2) + 's"></i>';
    var h = '<div class="pane" data-c="' + c + '">' + SB(true) + '<div class="ill night">' + tw + '<img class="sym moon" src="' + A.sym_moon + '" alt="">' + CITY_NIGHT_SVG[c] +
      '</div><div class="app-head dark"><span class="logo"><span>v</span><span class="a">a</span><span class="r">r</span><span>abond</span></span><span class="wx">' + L().wx_night + '</span></div>' +
      '<div class="mcard dark"><span class="k">' + d.k + '</span><h4>' + d.t + '</h4><p>' + d.p + '</p><div class="mrow"><span class="lock">🔒 ' + L().soon + '</span></div></div>';
    return h + tabbarHTML(true, 1) + '</div>';
  }
  function renderCities() {
    ['dayPhone', 'nightPhone'].forEach(function (id) {
      var sc = document.getElementById(id); if (!sc) return; var f = id === 'dayPhone' ? dayPane : nightPane;
      sc.innerHTML = ['hcm', 'bd', 'vt'].map(f).join('');
      var on = sc.querySelector('.pane[data-c="' + cityState[id] + '"]'); if (on) on.classList.add('on');
    });
  }
  $$('.city-tabs').forEach(function (tl) {
    tl.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; var id = tl.dataset.target, c = b.dataset.city; if (cityState[id] === c) return;
      $$('button', tl).forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false') });
      var sc = document.getElementById(id), cur = sc.querySelector('.pane.on'), nx = sc.querySelector('.pane[data-c="' + c + '"]');
      if (cur) { cur.classList.remove('on'); cur.classList.add('out'); setTimeout(function () { cur.classList.remove('out') }, 560); } nx.classList.add('on'); cityState[id] = c;
    });
  });
  $('#gateBtn').addEventListener('click', function (e) {
    var v = $('#veil'), sec = $('#ngay-dem'), r = sec.getBoundingClientRect(), b = e.currentTarget.getBoundingClientRect();
    v.style.left = (b.left + b.width / 2 - r.left) + 'px'; v.style.top = (b.top + b.height / 2 - r.top) + 'px';
    v.classList.remove('go'); void v.offsetWidth; v.classList.add('go');
    sparkle(sec, b.left + b.width / 2 - r.left, b.top + b.height / 2 - r.top, 22);
    $$('#ngay-dem .phone').forEach(function (p) { p.animate && p.animate([{ transform: p.style.transform || 'none' }, { transform: 'perspective(1100px) rotateY(12deg) scale(.97)' }, { transform: 'none' }], { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)' }) });
  });

  /* ===================== tilt ===================== */
  if (fine && !reduce) {
    $$('.tiltable').forEach(function (p) {
      p.addEventListener('pointermove', function (e) { var r = p.getBoundingClientRect(); var dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5; p.style.setProperty('--ry', (dx * 14) + 'deg'); p.style.setProperty('--rx', (-dy * 10) + 'deg'); });
      p.addEventListener('pointerleave', function () { p.style.setProperty('--ry', '0deg'); p.style.setProperty('--rx', '0deg'); });
    });
    $$('.j-card').forEach(function (c) { c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(); c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%'); c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%'); }) });
  }

  /* ===================== PROFILE TABS ===================== */
  var pTabs = $$('#pTabs .p-tab'), pPanels = $$('.p-panel'), notch = $('#pNotch');
  function setTab(i) {
    pTabs.forEach(function (t, j) { t.setAttribute('aria-selected', j === i ? 'true' : 'false') });
    pPanels.forEach(function (p, j) { p.classList.toggle('on', j === i) });
    var bw = $('#pBubble').clientWidth; notch.style.setProperty('left', Math.round(60 + (bw - 200) * (i / 5)) + 'px');
  }
  pTabs.forEach(function (t, i) { t.addEventListener('click', function () { setTab(i) }); t.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); var n = (i + 1) % 6; setTab(n); pTabs[n].focus() } if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); var p = (i + 5) % 6; setTab(p); pTabs[p].focus() } }) });
  window.addEventListener('resize', function () { var i = pTabs.findIndex(function (t) { return t.getAttribute('aria-selected') === 'true' }); setTab(i < 0 ? 0 : i) });

  /* ===================== DICTIONARY ===================== */
  var dictSel = 'kygioi', dictShown = false;
  function renderDict() {
    var d = L(), all = d.terms.concat(d.syms);
    $('#pChips').innerHTML = all.map(function (t) { return '<button data-id="' + t.id + '" class="' + (t.id === dictSel ? 'on' : '') + '">' + t.n + '</button>' }).join('');
    $('#termGrid').innerHTML = d.terms.map(function (t, i) { return '<div class="flip rv' + (dictShown ? ' in' : '') + '" style="--d:' + (i * .06) + 's" data-id="' + t.id + '" role="button" tabindex="0" aria-label="' + t.n + '"><div class="flip-in"><div class="face"><div class="art"><span class="hint-flip">' + d.flip + '</span><img src="' + A[t.img] + '" alt=""></div><div class="cap"><b>' + t.n + '</b><small>• • •</small></div></div><div class="face back"><b>' + t.n + '</b><p>' + t.d + '</p><span class="hint">' + d.back + '</span></div></div></div>' }).join('');
    $('#symGrid').innerHTML = d.syms.map(function (t, i) { return '<div class="flip sym rv' + (dictShown ? ' in' : '') + '" style="--d:' + (i * .06 + .3) + 's" data-id="' + t.id + '" role="button" tabindex="0" aria-label="' + t.n + '"><div class="flip-in"><div class="face"><div class="art"><img src="' + A[t.img] + '" alt=""></div><div class="cap"><b>' + t.n + '</b><small>' + t.d + '</small></div></div><div class="face back"><b>' + t.n + '</b><p>' + t.d + '</p><span class="hint">' + d.back + '</span></div></div></div>' }).join('');
    askDict(dictSel, true);
  }
  function findTerm(id) { var d = L(); return d.terms.concat(d.syms).filter(function (t) { return t.id === id })[0] }
  function askDict(id, instant) {
    dictSel = id; var t = findTerm(id); if (!t) return;
    $$('#pChips button').forEach(function (b) { b.classList.toggle('on', b.dataset.id === id) });
    $('#pQ').textContent = L().ask(t.n);
    if (instant) { $('#pA').textContent = t.d; } else typeInto($('#pA'), t.d, 18);
  }
  $('#pChips').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return; askDict(b.dataset.id);
    var card = $('.flip[data-id="' + b.dataset.id + '"]'); if (card) { card.classList.add('on'); setTimeout(function () { card.classList.remove('on') }, 2600); }
  });
  function flipCard(c) { c.classList.toggle('on'); askDict(c.dataset.id); }
  $('#termGrid').addEventListener('click', function (e) { var c = e.target.closest('.flip'); if (c) flipCard(c) });
  $('#symGrid').addEventListener('click', function (e) { var c = e.target.closest('.flip'); if (c) flipCard(c) });
  ['#termGrid', '#symGrid'].forEach(function (s) { $(s).addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('flip')) { e.preventDefault(); flipCard(e.target) } }) });
  // tự gõ câu trả lời khi kéo tới phần từ điển
  if (io) {
    var dio = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { askDict(dictSel); dio.disconnect() } }, { threshold: .35 }); dio.observe($('.prompt'));
    var gio = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { dictShown = true; $$('#termGrid .flip,#symGrid .flip').forEach(function (c) { c.classList.add('in') }); gio.disconnect() } }, { threshold: .12 }); gio.observe($('#termGrid'));
  } else dictShown = true;

  /* ===================== DEMO 1: PLANNER ===================== */
  var PLANS = {
    short: { arch: [['06:30', 'po'], ['07:15', 'book'], ['08:00', 'nd']], cafe: [['06:30', 'cheo'], ['07:30', 'po'], ['08:00', 'book']], river: [['06:30', 'bach'], ['07:30', 'nh'], ['08:10', 'po']] },
    half: { arch: [['07:00', 'po'], ['08:00', 'book'], ['09:00', 'nd'], ['10:30', 'hsp']], cafe: [['07:00', 'cheo'], ['09:00', 'ttd'], ['10:30', 'hsp']], river: [['07:00', 'bach'], ['08:30', 'nh'], ['09:30', 'po'], ['10:30', 'book']] },
    eve: { arch: [['18:00', 'po'], ['18:40', 'nd'], ['19:30', 'nh']], cafe: [['18:00', 'ttd'], ['19:15', 'nh'], ['20:00', 'bach']], river: [['18:00', 'bach'], ['19:00', 'nh'], ['20:00', 'ttd']] }
  };
  var planSel = { time: 'short', like: 'arch' }, lastPlan = null;
  $$('#demoPlan .chipset').forEach(function (g) { g.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; $$('button', g).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false') }); planSel[g.dataset.group] = b.dataset.v; }) });
  function renderPlan(anim) {
    var list = $('#planList'), P = L().places;
    list.innerHTML = lastPlan.map(function (s, i) { var p = P[s[1]]; return '<li style="--i:' + (anim ? i : 0) + (anim ? '' : ';animation-duration:.01s') + '"><time>' + s[0] + '</time><span><b>' + p[0] + '</b><small>' + p[1] + '</small></span></li>' }).join('');
  }
  $('#planGo').addEventListener('click', function () {
    var btn = this, list = $('#planList'); btn.disabled = true; list.innerHTML = '<li style="--i:0;grid-template-columns:1fr"><small>' + L().thinking + '</small></li>';
    setTimeout(function () { lastPlan = PLANS[planSel.time][planSel.like]; renderPlan(true); btn.disabled = false; var r = btn.getBoundingClientRect(), pr = $('#demoPlan').getBoundingClientRect(); sparkle($('#demoPlan'), r.left - pr.left + r.width / 2, r.top - pr.top + r.height / 2, 10); }, reduce ? 0 : 700);
  });

  /* ===================== DEMO 2: GEOFENCE ===================== */
  var gr = $('#geoRange'), me = $('#geoMe'), gm = $('#geoMap'), gd = $('#geoDist'), gp = $('#geoPop'), geoIn = false;
  function geo() {
    var v = +gr.value; gr.style.setProperty('--p', v + '%'); me.style.left = (6 + v * 0.72) + '%'; var m = Math.round(450 * (1 - v / 100)); gd.textContent = (m < 15 ? '✓ ' : '') + m + ' m';
    var inside = v >= 82; if (inside !== geoIn) { geoIn = inside; gm.classList.toggle('inside', inside); gp.classList.toggle('show', inside); if (inside) { var r = gm.getBoundingClientRect(), dr = $('#demoGeo').getBoundingClientRect(); sparkle($('#demoGeo'), r.right - dr.left - 60, r.top - dr.top + r.height / 2, 14); } }
  }
  gr.addEventListener('input', geo); geo();

  /* ===================== DEMO 3: JOURNAL ===================== */
  var jp = 0;
  function renderJournal() {
    var J = L().journal, el = $('#journal');
    el.innerHTML = J.slice().reverse().map(function (p, ri) { var i = J.length - 1 - ri; return '<div class="jpage' + (i < jp ? ' gone' : '') + '" data-i="' + i + '" style="z-index:' + (10 - i) + '"><span class="k">' + p.k + '</span><h5>' + p.h + '</h5><p>' + p.p + '</p><span class="stampy">' + p.s + '</span></div>' }).join('');
    $('#jDots').innerHTML = J.map(function (_, i) { return '<i class="' + (i === jp ? 'on' : '') + '"></i>' }).join('');
  }
  function goJ(n) {
    var J = L().journal; n = Math.max(0, Math.min(J.length - 1, n)); if (n === jp) return; jp = n;
    $$('#journal .jpage').forEach(function (pg) { var i = +pg.dataset.i; pg.classList.toggle('gone', i < jp) });
    $$('#jDots i').forEach(function (d, i) { d.classList.toggle('on', i === jp) });
  }
  $('#jNext').addEventListener('click', function () { goJ(jp + 1) }); $('#jPrev').addEventListener('click', function () { goJ(jp - 1) });
  (function () { var sx = null, el = $('#journal'); el.addEventListener('pointerdown', function (e) { sx = e.clientX }); el.addEventListener('pointerup', function (e) { if (sx == null) return; var dx = e.clientX - sx; if (dx < -30) goJ(jp + 1); else if (dx > 30) goJ(jp - 1); sx = null }); })();

  /* ===================== DEMO 4: PASSPORT ===================== */
  var got = 0;
  function renderSlots() {
    var sl = L().slots, now = new Date(), dd = ('0' + now.getDate()).slice(-2) + '.' + ('0' + (now.getMonth() + 1)).slice(-2);
    $('#passSlots').innerHTML = sl.map(function (n, i) { return '<span class="slot' + (i < got ? ' got' : '') + '"><span class="nm">' + n + '</span><span class="stp">' + n + '<br>No.0' + (i + 1) + '<br>' + dd + '</span></span>' }).join('');
  }
  function passUI() { $('#passBar').style.width = (got / 5 * 100) + '%'; $('#passCount').textContent = got + '/5'; }
  $('#stampBtn').addEventListener('click', function () {
    if (got >= 5) return; var s = $$('#passSlots .slot')[got]; s.classList.add('got'); got++; passUI();
    var demo = $('#demoPass'); setTimeout(function () { demo.classList.remove('shake'); void demo.offsetWidth; demo.classList.add('shake'); var r = s.getBoundingClientRect(), dr = demo.getBoundingClientRect(); sparkle(demo, r.left - dr.left + r.width / 2, r.top - dr.top + r.height / 2, 10); }, 300);
    if (got === 5) setTimeout(function () { $('#grand').classList.add('show') }, 800);
  });
  $('#passReset').addEventListener('click', function () { got = 0; renderSlots(); passUI(); $('#grand').classList.remove('show') });

  /* ===================== THEME (ngày / đêm) ===================== */
  var NIGHT = false;
  try { NIGHT = localStorage.getItem('vb_theme') === 'night'; } catch (e) { }
  document.documentElement.classList.toggle('night', NIGHT);
  function setTheme(n, fromEl) {
    NIGHT = n; document.documentElement.classList.toggle('night', n);
    try { localStorage.setItem('vb_theme', n ? 'night' : 'day') } catch (e) { }
    if (fromEl && !reduce) {
      var r = fromEl.getBoundingClientRect(), v = $('#veilfx'); v.style.left = (r.left + r.width / 2) + 'px'; v.style.top = (r.top + r.height / 2) + 'px';
      v.style.background = n ? 'radial-gradient(circle,rgba(75,68,123,.95),rgba(6,11,24,.7) 50%,transparent 70%)' : 'radial-gradient(circle,rgba(255,247,232,.98),rgba(204,232,245,.7) 50%,transparent 70%)';
      v.classList.remove('go'); void v.offsetWidth; v.classList.add('go');
    }
    renderCover(true);
  }
  $('#themeBtn').addEventListener('click', function () { setTheme(!NIGHT, this) });

  /* ===================== COVER SLIDESHOW ===================== */
  var COV = {
    day: [{ img: 'ph_cover_hcm_postoffice', city: 'c_hcm', name: { vi: 'Bưu điện Trung tâm Sài Gòn', en: 'Saigon Central Post Office' }, cr: 'alex.ch · CC BY 2.0', kx: '-2%', ky: '1%' },
    { img: 'ph_cover_hcm_river', city: 'c_hcm', name: { vi: 'Sông Sài Gòn', en: 'Saigon River' }, cr: 'Diego Delso · CC BY-SA 3.0', kx: '2%', ky: '-1%' },
    { img: 'ph_cover_bd_center', city: 'c_bd', name: { vi: 'Trung tâm Hành chính Bình Dương', en: 'Binh Duong Administrative Center' }, cr: 'Nhoxleminhtien · CC BY 4.0', kx: '0%', ky: '2%' },
    { img: 'ph_cover_vt_beach', city: 'c_vt', name: { vi: 'Bãi Trước, Vũng Tàu', en: 'Front Beach, Vung Tau' }, cr: 'NDTK08 · CC BY 4.0', kx: '-2%', ky: '-1%' }],
    night: [{ img: 'ph_cover_hcm_night', city: 'c_hcm', name: { vi: 'Sài Gòn lên đèn', en: 'Saigon lights up' }, cr: 'John Gremory · CC BY-SA 2.0', kx: '2%', ky: '1%' },
    { img: 'ph_cover_hcm_cathedral_night', city: 'c_hcm', name: { vi: 'Nhà thờ Đức Bà về đêm', en: 'Notre-Dame Cathedral at night' }, cr: 'Chauduyan · Public domain', kx: '0%', ky: '-2%' },
    { img: 'ph_cover_bd_night', city: 'c_bd', name: { vi: 'Cầu Phú Cường về đêm', en: 'Phu Cuong Bridge at night' }, cr: 'Dat Pham · CC BY 2.0', kx: '-2%', ky: '1%' },
    { img: 'ph_cover_vt_night', city: 'c_vt', name: { vi: 'Vũng Tàu về đêm', en: 'Vung Tau at night' }, cr: 'Eirien · CC BY 2.0', kx: '2%', ky: '0%' }]
  };
  var cvIdx = 0, cvTimer = null, CV_DUR = 6500;
  function cvList() { return COV[NIGHT ? 'night' : 'day'] }
  function renderCover(keep) {
    var list = cvList();
    $('#cvSlides').innerHTML = list.map(function (s, i) { return '<div class="cv-slide"><i style="background-image:url(' + A[s.img] + ');--kx:' + s.kx + ';--ky:' + s.ky + '"></i></div>' }).join('');
    $('#cvDots').innerHTML = list.map(function (_, i) { return '<button aria-label="' + (i + 1) + '"><i></i></button>' }).join('');
    $('#cvPre').textContent = L().cv_pre[NIGHT ? 1 : 0];
    if (!keep) cvIdx = 0; cvIdx = cvIdx % list.length;
    showSlide(cvIdx, true);
  }
  function showSlide(i, instant) {
    var list = cvList(); i = (i + list.length) % list.length; cvIdx = i; var s = list[i];
    $$('#cvSlides .cv-slide').forEach(function (el, j) { el.classList.toggle('on', j === i) });
    $$('#cvDots button').forEach(function (d, j) { d.classList.remove('on'); d.classList.toggle('done', j < i) });
    var d = $$('#cvDots button')[i]; if (d) { d.style.setProperty('--dur', CV_DUR + 'ms'); void d.offsetWidth; d.classList.add('on') }
    var pl = $('#cvPlace');
    function fill() { $('#cvCity').textContent = (LANG === 'en' ? EN[s.city] : VI[s.city]) || ''; $('#cvName').textContent = s.name[LANG]; $('#cvCredit').textContent = '📷 ' + s.cr + ' · Wikimedia Commons'; }
    if (instant) fill(); else { pl.classList.add('swap'); setTimeout(function () { fill(); pl.classList.remove('swap') }, 360); }
    clearTimeout(cvTimer); if (!reduce) cvTimer = setTimeout(function () { showSlide(cvIdx + 1) }, CV_DUR);
  }
  $('#cvPrev').addEventListener('click', function () { showSlide(cvIdx - 1) });
  $('#cvNext').addEventListener('click', function () { showSlide(cvIdx + 1) });
  $('#cvDots').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; showSlide(Array.prototype.indexOf.call(b.parentNode.children, b)) });
  (function () { var sx = null, c = $('#top'); c.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX }, { passive: true }); c.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) showSlide(cvIdx + (dx < 0 ? 1 : -1)); sx = null }, { passive: true }); })();
  document.addEventListener('visibilitychange', function () { if (document.hidden) clearTimeout(cvTimer); else showSlide(cvIdx, true); });

  /* ===================== MEET: ô ảnh trôi kiểu Lightspark ===================== */
  var tiles = $$('#tiles .tile'), meetSec = $('#vara'), tmx = 0, tmy = 0;
  function tilesUpd() {
    if (reduce || innerWidth <= 900) return; var r = meetSec.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
    var off = (r.top + r.height / 2 - innerHeight / 2);
    tiles.forEach(function (t) { var d = +t.dataset.depth || .6; t.style.setProperty('--px', (tmx * d * 22) + 'px'); t.style.setProperty('--py', (off * d * -0.14 + tmy * d * 16) + 'px'); });
  }
  if (fine) meetSec.addEventListener('pointermove', function (e) { tmx = e.clientX / innerWidth - .5; tmy = e.clientY / innerHeight - .5; tilesUpd() });

  /* ===================== USP: danh sách sáng lần lượt ===================== */
  setInterval(function () { $$('.usp-row.in').forEach(function (row) { var lis = $$('.usp-r li', row); var i = (+row.dataset.hi || 0) % lis.length; lis.forEach(function (l, j) { l.classList.toggle('on', j === i) }); row.dataset.hi = i + 1; }); }, 1700);

  /* ===================== CUỐN SÁCH KÝ ỨC (lật trang thật) ===================== */
  var bk = $('#bk'), bkStage = $('#bkStage'), BK = { sheets: [], cur: 0, mode: '' };
  function bkModeNow() { return innerWidth <= 640 ? 'single' : 'spread' }
  function pageHTML(i) { var p = L().book[i]; if (!p) return { c: '', h: '' }; return { c: p.c || '', h: p.h.replace(/\{([a-z_0-9]+)\}/g, function (m, k) { return A[k] || m }) }; }
  function pnum(i) { var n = L().book.length; return (i >= 2 && i <= n - 2) ? '<span class="pg-n">— ' + i + ' —</span>' : ''; }
  function curPage() { if (!BK.sheets.length) return 0; return BK.mode === 'spread' ? (BK.cur === 0 ? 0 : 2 * BK.cur - 1) : BK.cur; }
  function pageToCur(p) { var n = BK.sheets.length; return BK.mode === 'spread' ? (p <= 0 ? 0 : Math.min(n, Math.floor((p + 1) / 2))) : Math.max(0, Math.min(n - 1, p)); }
  function renderBook() {
    var keep = curPage(); BK.mode = bkModeNow(); var n = L().book.length;
    $$('.sht', bk).forEach(function (s) { s.remove() }); BK.sheets = [];
    var count = BK.mode === 'spread' ? Math.ceil(n / 2) : n;
    for (var s = 0; s < count; s++) {
      var fi = BK.mode === 'spread' ? 2 * s : s, bi = BK.mode === 'spread' ? 2 * s + 1 : -1;
      var f = pageHTML(fi), b = (bi >= 0 && bi < n) ? pageHTML(bi) : { c: 'blank', h: '' };
      var el = document.createElement('div'); el.className = 'sht';
      el.innerHTML = '<div class="pg f ' + f.c + '" data-p="' + fi + '">' + f.h + pnum(fi) + '</div><div class="pg b ' + b.c + '" data-p="' + bi + '">' + b.h + (bi >= 0 ? pnum(bi) : '') + '</div>';
      bk.appendChild(el); BK.sheets.push(el);
    }
    BK.cur = pageToCur(keep);
    BK.sheets.forEach(function (s, i) { s.classList.toggle('flipped', i < BK.cur) });
    bkZ(); bkState(); renderToc(); bindBookUI();
  }
  function bkZ() { var n = BK.sheets.length, c = BK.cur; BK.sheets.forEach(function (s, i) { if (!s.classList.contains('turning')) s.style.zIndex = i < c ? (i + 1) : (2 * n - i); }); }
  function bkMax() { return BK.mode === 'spread' ? BK.sheets.length : BK.sheets.length - 1; }
  function bkState() {
    var n = BK.sheets.length, c = BK.cur, T = L().book.length - 1;
    bk.classList.toggle('closed-front', BK.mode === 'spread' && c === 0);
    bk.classList.toggle('closed-back', BK.mode === 'spread' && c === n);
    $('#bkEdgeR').style.setProperty('--th', (3 + (n - c) / n * 12) + 'px'); $('#bkEdgeL').style.setProperty('--th', (3 + c / n * 12) + 'px');
    $('#bkEdgeR').style.opacity = (BK.mode === 'spread' && c === n) ? 0 : 1; $('#bkEdgeL').style.opacity = c === 0 ? 0 : 1;
    var txt;
    if (BK.mode === 'spread') txt = c === 0 ? L().bk_cover : c === n ? L().bk_back : L().bk_pg + ' ' + (2 * c - 1) + ' – ' + (2 * c) + ' / ' + T;
    else txt = c === 0 ? L().bk_cover : c === T ? L().bk_back : L().bk_pg + ' ' + c + ' / ' + T;
    $('#bkPages').textContent = txt;
    $('#bkPrev').disabled = c === 0; $('#bkNext').disabled = c >= bkMax();
    var vis = curPage(); $$('#bkToc button').forEach(function (b) { var p = +b.dataset.p; b.classList.toggle('on', BK.mode === 'spread' ? (p === vis || p === vis + 1 || (c === 0 && p === 0)) : p === vis); });
    setTimeout(birdsCheck, 1150);
  }
  function birdsCheck() {
    var vis = BK.mode === 'spread' ? [2 * BK.cur - 1, 2 * BK.cur] : [BK.cur];
    vis.forEach(function (p) { var pg = $('.pg[data-p="' + p + '"]', bk); if (pg && pg.querySelector('.birds') && !pg.classList.contains('show-birds')) { pg.classList.add('show-birds'); } });
    $$('.pg.show-birds', bk).forEach(function (pg) { if (vis.indexOf(+pg.dataset.p) < 0) pg.classList.remove('show-birds'); });
  }
  var actx = null;
  function paperSound() { if (reduce) return; try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); var d = .32, sr = actx.sampleRate, b = actx.createBuffer(1, Math.floor(sr * d), sr), ch = b.getChannelData(0); for (var i = 0; i < ch.length; i++) { var t = i / ch.length; ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 2.2) * (t < .1 ? t / .1 : 1) * (.7 + .3 * Math.sin(t * 40)); } var src = actx.createBufferSource(); src.buffer = b; var f = actx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2200; f.Q.value = .7; var g = actx.createGain(); g.gain.value = .1; src.connect(f); f.connect(g); g.connect(actx.destination); src.start(); } catch (e) { } }
  function flipOne(dir, silent) {
    var c = BK.cur; if (dir > 0 && c >= bkMax()) return false; if (dir < 0 && c <= 0) return false;
    var s = dir > 0 ? BK.sheets[c] : BK.sheets[c - 1];
    s.classList.add('turning'); s.style.zIndex = 500; s.classList.remove('drag');
    if (dir > 0) s.classList.add('flipped'); else s.classList.remove('flipped');
    s.style.transform = ''; s.style.opacity = '';
    BK.cur = c + dir; if (!silent) paperSound();
    clearTimeout(s._t); s._t = setTimeout(function () { s.classList.remove('turning'); bkZ(); }, 1170);
    bkZ(); bkState(); return true;
  }
  function bkGo(p) { var target = pageToCur(p); var step = function () { if (BK.cur === target) return; flipOne(target > BK.cur ? 1 : -1, Math.abs(target - BK.cur) > 1); setTimeout(step, 170); }; step(); }
  $('#bkNext').addEventListener('click', function () { flipOne(1) }); $('#bkPrev').addEventListener('click', function () { flipOne(-1) });
  function renderToc() { $('#bkToc').innerHTML = L().toc.map(function (t) { return '<button data-p="' + t[1] + '">' + t[0] + '</button>' }).join(''); }
  $('#bkToc').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) bkGo(+b.dataset.p) });
  document.addEventListener('keydown', function (e) { if (e.target.closest && e.target.closest('textarea,input')) return; var r = bkStage.getBoundingClientRect(); if (r.top > innerHeight * .8 || r.bottom < innerHeight * .2) return; if (e.key === 'ArrowRight') { flipOne(1); e.preventDefault() } if (e.key === 'ArrowLeft') { flipOne(-1); e.preventDefault() } });
  (function () {
    var st = null;
    bkStage.addEventListener('pointerdown', function (e) {
      if (e.button > 0 || e.target.closest('.pg-int,textarea,button,a')) return;
      var r = bkStage.getBoundingClientRect(), x = e.clientX - r.left, c = BK.cur, n = BK.sheets.length, dir;
      if (BK.mode === 'spread') { dir = c === 0 ? 1 : c === n ? -1 : (x > r.width / 2 ? 1 : -1); }
      else dir = x > r.width * .3 ? 1 : -1;
      if ((dir > 0 && c >= bkMax()) || (dir < 0 && c <= 0)) return;
      st = { x: e.clientX, dir: dir, s: dir > 0 ? BK.sheets[c] : BK.sheets[c - 1], moved: false, w: BK.mode === 'spread' ? r.width / 2 : r.width, t: Date.now(), p: 0, id: e.pointerId };
    });
    bkStage.addEventListener('pointermove', function (e) {
      if (!st) return; var dx = e.clientX - st.x;
      if (!st.moved) { if (Math.abs(dx) < 7) return; st.moved = true; try { bkStage.setPointerCapture(st.id) } catch (_) { } st.s.classList.add('drag'); st.s.style.zIndex = 500; st.s.style.opacity = 1; }
      var p = st.dir > 0 ? Math.min(1, Math.max(0, -dx / (st.w * 1.05))) : Math.min(1, Math.max(0, dx / (st.w * 1.05))); st.p = p;
      st.s.style.transform = 'rotateY(' + (st.dir > 0 ? -180 * p : -180 + 180 * p) + 'deg)';
    });
    function end() {
      if (!st) return; var s = st.s;
      if (!st.moved) { flipOne(st.dir); st = null; return; }
      s.classList.remove('drag');
      var fast = (Date.now() - st.t) < 280 && st.p > .06;
      if (st.p > .33 || fast) flipOne(st.dir); else { s.style.transform = ''; s.style.opacity = ''; setTimeout(bkZ, 1100); }
      st = null;
    }
    bkStage.addEventListener('pointerup', end); bkStage.addEventListener('pointercancel', function () { if (st) { st.s.classList.remove('drag'); st.s.style.transform = ''; st.s.style.opacity = ''; st = null; } });
  })();
  function bindBookUI() {
    $$('.gap', bk).forEach(function (g) { g.addEventListener('click', function () { if (g.classList.contains('ok')) return; g.classList.add('ok'); g.textContent = g.dataset.l; var r = g.getBoundingClientRect(), br = bkStage.getBoundingClientRect(); sparkle(bkStage, r.left - br.left + r.width / 2, r.top - br.top + r.height / 2, 10); }); });
    var ta = $('#bkNote'); if (ta) { try { ta.value = localStorage.getItem('vb_note') || '' } catch (e) { } ta.addEventListener('input', function () { try { localStorage.setItem('vb_note', ta.value) } catch (e) { } }); }
    var sd = $('#bkSend'); if (sd) sd.addEventListener('click', function () { var pg = sd.closest('.pg'); pg.classList.remove('show-birds'); void pg.offsetWidth; pg.classList.add('show-birds'); sd.textContent = L().bk_sent; });
  }
  var bkResizeT = null; window.addEventListener('resize', function () { clearTimeout(bkResizeT); bkResizeT = setTimeout(function () { if (bkModeNow() !== BK.mode) renderBook(); }, 220) });
  $('#openScenes').addEventListener('click', function () { openSheet('all') });

  /* nguồn ảnh */
  var CREDITS = [['Bưu điện Trung tâm Sài Gòn', 'Saigon Central Post Office', 'alex.ch', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'], ['Sông Sài Gòn', 'Saigon River', 'Diego Delso', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'], ['Trung tâm Hành chính Bình Dương', 'Binh Duong Administrative Center', 'Nhoxleminhtien', 'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'], ['Bãi Trước, Vũng Tàu', 'Front Beach, Vung Tau', 'NDTK08', 'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'], ['Sài Gòn về đêm', 'Saigon at night', 'John Gremory', 'CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/'], ['Ven sông Sài Gòn về đêm', 'Saigon riverside at night', 'lumoplank', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'], ['Nhà thờ Đức Bà về đêm', 'Notre-Dame Cathedral at night', 'Chauduyan (Wikivoyage)', 'Public domain', ''], ['Cầu Phú Cường, Bình Dương', 'Phu Cuong Bridge, Binh Duong', 'Dat Pham', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'], ['Vũng Tàu về đêm', 'Vung Tau at night', 'Eirien', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'], ['Chợ Bến Thành', 'Ben Thanh Market', 'Bahnfrend', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'], ['Bên trong Bưu điện', 'Inside the Post Office', 'Balon Greyjoy', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'], ['Cà phê phin', 'Phin coffee', 'Takeaway', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'], ['Một con hẻm', 'An alley', 'RG72', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/']];
  function renderCredits() { $('#credits').innerHTML = L().cr_intro + ' ' + CREDITS.map(function (c) { return (LANG === 'en' ? c[1] : c[0]) + ' — ' + c[2] + ' (' + (c[4] ? '<a href="' + c[4] + '" target="_blank" rel="noopener">' + c[3] + '</a>' : c[3]) + ')' }).join('; ') + '.'; }


  /* flow progress */
  var flowEl = $('#flow'), flowLis = $$('#flow li');
  function updateFlow() { if (!flowEl) return; var r = flowEl.getBoundingClientRect(); var p = Math.max(0, Math.min(1, (innerHeight * .7 - r.top) / (r.height))); flowEl.style.setProperty('--fp', (p * 100) + '%'); var n = Math.floor(p * flowLis.length + .15); flowLis.forEach(function (li, i) { li.classList.toggle('on', i < n) }); }

  /* ===================== BOTTOM SHEET (drag down to close) ===================== */
  var sheet = $('#sheet'), sbg = $('#sheetBg'), sheetOpen = false, sheetMode = 'all', lastFocus = null;
  function fillSheet(mode) {
    var s = L().sheet; $('#sheetK').textContent = s.k; $('#sheetTitle').textContent = s.t;
    var h = '<p class="quote" style="margin-top:0">“' + s.intro + '”</p><ol class="orbs">';
    s.sc.forEach(function (x, i) {
      if (i === 0) h += '<li class="sep" id="sepDay">' + s.day + '</li>'; if (i === 4) h += '<li class="sep" id="sepNight">' + s.night + '</li>';
      var thumbKey = 'ch0_s0' + (i + 1);
      var thumbSrc = A[thumbKey] || ('assets/' + thumbKey + '.webp');
      h += '<li class="' + (i >= 4 ? 'n' : '') + '" style="--i:' + i + '"><span class="o">S0' + (i + 1) + '</span><div class="orb-thumb"><img src="' + thumbSrc + '" alt="S0' + (i + 1) + '" loading="lazy"></div><span><b>' + x[0] + '</b><small>' + x[1] + '</small></span></li>';
    });
    $('#sheetBody').innerHTML = h + '</ol>';
  }
  function openSheet(mode) {
    sheetMode = mode || 'all'; fillSheet(sheetMode); lastFocus = document.activeElement;
    sheet.style.transform = ''; sheet.classList.add('show'); sbg.classList.add('show'); sheetOpen = true; document.body.style.overflow = 'hidden';
    setTimeout(function () { var body = $('#sheetBody'); var t = mode === 'night' ? $('#sepNight') : mode === 'day' ? $('#sepDay') : null; body.scrollTop = t ? (t.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop - 6) : 0; $('#sheetX').focus({ preventScroll: true }); }, 60);
  }
  function closeSheet() { sheet.classList.remove('show'); sheet.style.transform = ''; sbg.classList.remove('show'); sheetOpen = false; document.body.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); }
  sbg.addEventListener('click', closeSheet); $('#sheetX').addEventListener('click', closeSheet);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sheetOpen) closeSheet() });
  (function () {
    var startY = null, dy = 0, t0 = 0;
    function down(e) { var body = $('#sheetBody'); if (e.target.closest('.sheet-x')) return; if (e.target.closest('.sheet-body') && body.scrollTop > 0) return; startY = e.clientY; dy = 0; t0 = Date.now(); sheet.classList.add('dragging'); try { sheet.setPointerCapture(e.pointerId) } catch (_) { } }
    function move(e) { if (startY == null) return; dy = Math.max(0, e.clientY - startY); sheet.style.transform = 'translate(-50%,' + dy + 'px)'; sbg.style.opacity = String(Math.max(0, 1 - dy / 400)); }
    function up() { if (startY == null) return; sheet.classList.remove('dragging'); var v = dy / Math.max(1, Date.now() - t0); if (dy > 120 || v > .6) closeSheet(); else sheet.style.transform = ''; sbg.style.opacity = ''; startY = null; }
    sheet.addEventListener('pointerdown', down); sheet.addEventListener('pointermove', move); sheet.addEventListener('pointerup', up); sheet.addEventListener('pointercancel', up);
  })();

  /* ===================== VIDEO ===================== */
  var vid = $('#vid'), vPlay = $('#vPlay'), vMute = $('#vMute');
  var IC_PLAY = '<path d="M8 5v14l11-7z"/>', IC_PAUSE = '<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>', IC_MUTE = '<path d="M3 10v4h4l5 5V5L7 10H3zm13.6 2 2.7-2.7-1.4-1.4-2.7 2.7-2.7-2.7-1.4 1.4 2.7 2.7-2.7 2.7 1.4 1.4 2.7-2.7 2.7 2.7 1.4-1.4z"/>', IC_SOUND = '<path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/>';
  var userPaused = false, vidReady = false;
  function loadVid() { if (vidReady) return; vidReady = true; if (!vid.getAttribute('src')) vid.src = vid.dataset.src || 'assets/vara_video.mp4'; }
  function vUI() { $('#vPlayIco').innerHTML = vid.paused ? IC_PLAY : IC_PAUSE; $('#vMuteIco').innerHTML = vid.muted ? IC_MUTE : IC_SOUND; }
  vPlay.addEventListener('click', function () { loadVid(); if (vid.paused) { userPaused = false; var p = vid.play(); if (p && p.catch) p.catch(function () { }); } else { userPaused = true; vid.pause(); } });
  vMute.addEventListener('click', function () { loadVid(); vid.muted = !vid.muted; if (!vid.muted && vid.paused) { var p = vid.play(); if (p && p.catch) p.catch(function () { }); } vUI(); });
  vid.addEventListener('play', vUI); vid.addEventListener('pause', vUI);
  if (io) {
    new IntersectionObserver(function (es) { if (es[0].isIntersecting) loadVid(); }, { rootMargin: '900px 0px' }).observe(vid);
    new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { loadVid(); if (!userPaused && !reduce) { var p = vid.play(); if (p && p.catch) p.catch(function () { }); } } else if (!vid.paused) vid.pause(); }) }, { threshold: .35 }).observe(vid);
  }
  if (!io) loadVid();
  vUI();

  /* ===================== QR DIALOG (AR MOBILE HANDOFF) ===================== */
  var qrDialog = $('#qrDialog'), qrSvgBox = $('#qrSvgBox'), qrUrlLabel = $('#qrUrlLabel'), qrDirectLink = $('#qrDirectLink'), qrCopyBtn = $('#qrCopyBtn'), qrClip = 'Idle_3';
  function buildArUrl(clip) {
    var base = (window.location && window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'https://varabond.vercel.app';
    var path = '/ar-demo/vara' + (clip && clip !== 'Idle_3' ? '?clip=' + encodeURIComponent(clip) : '');
    return { full: base + path, short: path };
  }
  function renderQrModal() {
    if (!qrSvgBox || !window.VarabondQR) return;
    var u = buildArUrl(qrClip);
    qrSvgBox.innerHTML = window.VarabondQR.renderSvg(u.full, 'QR ' + u.full);
    if (qrUrlLabel) qrUrlLabel.textContent = u.full.replace(/^https?:\/\//, '');
    if (qrDirectLink) qrDirectLink.href = u.short;
    $$('#qrClipChips .qr-chip').forEach(function (b) { b.classList.toggle('active', b.dataset.clip === qrClip); });
  }
  if (qrDialog) {
    if (window.VarabondQR) window.VarabondQR.setupDialogLightDismiss(qrDialog);
    $$('[data-open-qr]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var c = btn.getAttribute('data-clip');
        if (c) qrClip = c;
        renderQrModal();
        if (typeof qrDialog.showModal === 'function') qrDialog.showModal();
        else qrDialog.setAttribute('open', '');
      });
    });
    var chipsWrap = $('#qrClipChips');
    if (chipsWrap) {
      chipsWrap.addEventListener('click', function (e) {
        var b = e.target.closest('.qr-chip'); if (!b) return;
        qrClip = b.dataset.clip || 'Idle_3';
        renderQrModal();
      });
    }
    if (qrCopyBtn) {
      qrCopyBtn.addEventListener('click', function () {
        var u = buildArUrl(qrClip).full;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(u).then(function () {
            var prev = qrCopyBtn.textContent;
            qrCopyBtn.textContent = LANG === 'en' ? 'Copied ✓' : 'Đã sao chép ✓';
            setTimeout(function () { qrCopyBtn.textContent = prev; }, 1800);
          });
        }
      });
    }
  }

  /* ===================== init ===================== */
  applyLang(); onScroll(); setTab(0); passUI();
})();
