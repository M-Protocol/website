/* Language choice: Arabic (index.html, default) or English (en.html).
   Remembers the visitor's choice in this browser only (localStorage). Nothing is sent anywhere. */
(function () {
  'use strict';
  var page = document.documentElement.lang === 'ar' ? 'ar' : 'en', saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* storage blocked: just show this page */ }
  if ((saved === 'ar' || saved === 'en') && saved !== page) {
    location.replace((saved === 'en' ? 'en.html' : './') + location.hash);
    return;
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('[data-lang]') : null;
    if (!a) return;
    try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (e2) { /* ignore */ }
    a.setAttribute('href', a.getAttribute('href').split('#')[0] + location.hash);
  });
})();
