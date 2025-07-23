
// تعطيل زر الفأرة الأيمن
document.addEventListener("contextmenu", e => e.preventDefault());

// تعطيل اختصارات أدوات المطور (مثل F12 و Ctrl+Shift+I)
document.onkeydown = function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    return false;
  }
};

// اكتشاف إذا كانت أدوات المطور مفتوحة عن طريق مقارنة أبعاد النافذة
setInterval(function () {
  if (
    window.outerWidth - window.innerWidth > 100 ||
    window.outerHeight - window.innerHeight > 100
  ) {
    document.body.innerHTML = "<h1>🚫 تم تعطيل الفحص</h1>";
  }
}, 1000);
