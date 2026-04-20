// 🔒 Block Developer Tool Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+J, Ctrl+S)
document.onkeydown = function (e) {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) ||
    (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) ||
    (e.ctrlKey && e.keyCode === 'S'.charCodeAt(0))
  ) {
    e.preventDefault();
    return false;
  }
};

// 🔒 Disable Right-Click → redirect to blocked.html
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  window.location.href = '/blocked.html';
});

// 🔒 Detect DevTools via window size (popup warning)
setInterval(function () {
  const threshold = 160;
  if (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  ) {
    if (!document.getElementById('inspect-warning')) {
      const warn = document.createElement('div');
      warn.id = 'inspect-warning';
      warn.innerText = '🚫 Inspection is blocked';
      warn.style.cssText =
        'position:fixed;top:20px;left:50%;transform:translateX(-50%);' +
        'background:#000;color:#fff;padding:10px 20px;border-radius:8px;' +
        'font-family:sans-serif;font-size:14px;z-index:99999';
      document.body.appendChild(warn);
      setTimeout(() => warn.remove(), 4000);
    }
  }
}, 1000);
