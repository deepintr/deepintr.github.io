$(document).ready(function() {
  // Latest threads section.
  var links = {
    tr: [
      [
        '【RESMİ AÇIKLAMA】 LINUX DEEPIN CASUS YAZILIM DEĞİLDİR.',
        'https://spectrum.chat/deepintr?thread=3b0ae224-2877-413f-818c-87e16ce1a7c4'
      ],
      ['Sıkça Sorulan Sorular', 'https://spectrum.chat/deepintr?thread=9b557ba5-57e2-411e-a703-e4c8472a3cb3'],
      [
        'Linux Deepin Kurulumu (Resimli Anlatım)',
        'https://spectrum.chat/deepintr?thread=9cbd6db3-1080-45bb-9122-a05c07bb9621'
      ]
    ],
    en: [
      [
        'Welcome to Linux Deepin Turkey Community',
        'https://spectrum.chat/deepintr/international?thread=7620b4b9-26ca-4c2c-ab7b-b981c17018f3'
      ],
      [
        'Frequently Asked Questions',
        'https://spectrum.chat/deepintr/sss-faq?thread=42493eb1-19ad-452c-a0fb-191068b266b6'
      ],
      [
        '【OFFICIAL STATEMENT】LINUX DEEPIN IS NOT SPYWARE',
        'https://spectrum.chat/deepintr?thread=1715ba89-fe5f-426a-9496-f26f015c214f'
      ]
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
  var today = new Date();
  var todayStr = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear();
  console.log(todayStr);
  var latestRecord = localStorage.getItem('deepintr-dw-latest-visit');
  if (!latestRecord || latestRecord !== todayStr) {
    // Open distrowatch and save the date.
    localStorage.setItem('deepintr-dw-latest-visit', todayStr);
    window.open('https://distrowatch.com/table.php?distribution=deepin', '_blank');
  }
});
