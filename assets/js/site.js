// Two progressive enhancements. Everything works without this file.
document.addEventListener('DOMContentLoaded', function () {
  // 1. Make Markdown-generated headings self-linking (template headings already are).
  document.querySelectorAll('h2[id], h3[id]').forEach(function (h) {
    if (h.querySelector('a')) return;
    var a = document.createElement('a');
    a.href = '#' + h.id;
    while (h.firstChild) a.appendChild(h.firstChild);
    h.appendChild(a);
  });

  // 2. Turn the obfuscated email text into a real mailto: link.
  document.querySelectorAll('span.email').forEach(function (s) {
    var addr = s.dataset.user + ' (at) ' + s.dataset.domain;
    var a = document.createElement('a');
    a.href = 'mailto:' + addr;
    a.textContent = addr;
    s.replaceWith(a);
  });
});
