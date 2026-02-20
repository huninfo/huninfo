// HunInfó static landing – helpers + GA4 tracking

// 1) GA4 event a fő "Kezdés" gombra (launchBtn)
(function () {
  const btn = document.getElementById("launchBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    try {
      if (typeof gtag === "function") {
        gtag("event", "huninfo_launch", {
          event_category: "engagement",
          event_label: "launch_button",
        });
      }
    } catch (e) {}
  });
})();

// 2) Toast – legyen globálisan elérhető (inline onclick miatt)
window.showToast = function () {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
};

// 3) Prompt másolás – modern clipboard + fallback
window.copyPrompt = function (text) {
  // GitHub Pages = HTTPS, itt a navigator.clipboard általában működik
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
};

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  document.body.appendChild(ta);

  ta.focus();
  ta.select();

  try {
    document.execCommand("copy");
  } catch (e) {}

  document.body.removeChild(ta);
}