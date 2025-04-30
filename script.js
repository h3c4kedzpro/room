function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = lang === "kh" ? el.getAttribute("data-kh") : el.getAttribute("data-en");
  });
}