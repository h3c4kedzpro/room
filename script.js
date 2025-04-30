
function setLang(lang) {
  const content = {
    en: "Welcome to Dark Web Video. WARNING: Extremely Graphic!",
    kh: "សូមស្វាគមន៍មកកាន់វីដេអូ Dark Web ព្រមាន៖ ក្រាហ្វិចខ្លាំង!",
    th: "ยินดีต้อนรับสู่วิดีโอ Dark Web คำเตือน: กราฟิกที่รุนแรง!",
    vi: "Chào mừng đến với Video Dark Web. CẢNH BÁO: Hình ảnh cực kỳ bạo lực!",
    ar: "مرحبًا بك في فيديو الويب المظلم. تحذير: محتوى عنيف للغاية!"
  };

  document.getElementById("main-text").innerText = content[lang];
}
