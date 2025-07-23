// 🔒 Disable Right-Click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// 🔒 Block Developer Tool Shortcuts
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key === "u")
  ) {
    e.preventDefault();
  }
});

// 🔒 Optional: Detect DevTools (Popup instead of blocking)
setInterval(function () {
  const threshold = 160;
  if (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  ) {
    if (!document.getElementById("inspect-warning")) {
      const warn = document.createElement("div");
      warn.id = "inspect-warning";
      warn.innerText = "🚫 Inspection is blocked";
      warn.style.cssText =
        "position:fixed;top:20px;left:50%;transform:translateX(-50%);" +
        "background:#000;color:#fff;padding:10px 20px;border-radius:8px;" +
        "font-family:sans-serif;font-size:14px;z-index:99999";
      document.body.appendChild(warn);

      setTimeout(() => warn.remove(), 4000);
    }
  }
}, 1000);
