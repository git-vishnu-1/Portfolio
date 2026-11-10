// Theme Toggle
const toggle = document.getElementById("theme-toggle");

const updateThemeUI = () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (toggle) {
    toggle.textContent = isDark ? "☀️" : "🌙";
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }
};

updateThemeUI();

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeUI();
  });
}

// 1-Click Copy Email
const copyBtn = document.getElementById("copy-email-btn");
const toast = document.getElementById("toast");
let toastTimer = null;

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
};

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = "vishnumanoj6605@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied to clipboard!");
    } catch {
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      showToast("Email copied to clipboard!");
    }
  });
}
