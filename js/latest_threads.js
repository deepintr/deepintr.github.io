$(document).ready(function() {
  // Latest threads section.
  var links = {
    tr: [
      [
        '【RESMİ AÇIKLAMA】 LINUX DEEPIN CASUS YAZILIM DEĞİLDİR.',
        'https://deepintr.org/?linux-deepin-casus-yazilim-degildir'
      ],
      ['Sıkça Sorulan Sorular', 'https://deepintr.org/?sss'],
      ['Linux Deepin Kurulumu (Resimli Anlatım)', 'https://deepintr.org/?linux-deepin-kurulumu']
    ],
    en: [
      ['Welcome to Linux Deepin Turkey Community', 'https://deepintr.org/?welcome-to-linux-deepin-turkey-community'],
      ['Frequently Asked Questions', 'https://deepintr.org/?faq'],
      ['【OFFICIAL STATEMENT】LINUX DEEPIN IS NOT SPYWARE', 'https://deepintr.org/?linux-deepin-is-not-spyware']
    ]
  };

  var latestThreads = document.querySelector('#latest-threads__content');
  var langPref = localStorage.getItem('deepintr_lang_pref');

  links[langPref].forEach(element => {
    var a = document.createElement('a');
    a.innerHTML = element[0];
    a.title = element[0];
    a.href = element[1];
    a.target = '_blank';
    latestThreads.appendChild(a);
  });

  // Open distrowatch once per day.
  var body = document.querySelector('body');
  body.addEventListener('click', function(e) {
    var today = new Date();
    var todayStr = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
    var latestRecord = localStorage.getItem('deepintr-dw-latest-visit');
    if (!latestRecord || latestRecord !== todayStr) {
      // Open distrowatch and save the date.
      localStorage.setItem('deepintr-dw-latest-visit', todayStr);
      window.open('https://deepintr.org/?distrowatch', 'distrowatch', 'width=800,height=600');
    }
    body.removeEventListener('click', this, false);
  });
});
