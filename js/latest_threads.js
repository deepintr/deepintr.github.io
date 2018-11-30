$(document).ready(function() {
  // Latest threads section.
  var links = [
    [
      '【RESMİ AÇIKLAMA】 LINUX DEEPIN CASUS YAZILIM DEĞİLDİR.',
      'https://spectrum.chat/deepintr?thread=3b0ae224-2877-413f-818c-87e16ce1a7c4'
    ],
    ['Sıkça Sorulan Sorular', 'https://spectrum.chat/deepintr?thread=9b557ba5-57e2-411e-a703-e4c8472a3cb3'],
    [
      'Linux Deepin Nasıl Kurulur? Resimli anlatım.',
      'https://spectrum.chat/deepintr?thread=9cbd6db3-1080-45bb-9122-a05c07bb9621'
    ]
  ];

  var latestThreads = document.querySelector('#latest-threads');

  links.forEach(element => {
    var a = document.createElement('a');
    a.innerHTML = element[0];
    a.href = element[1];
    a.target = '_blank';
    latestThreads.appendChild(a);
  });

  // Last link for more.
  var a = document.createElement('a');
  a.innerHTML = 'Daha fazlası için tıklayın..';
  a.href = 'https://spectrum.chat/deepintr';
  a.target = '_blank';
  latestThreads.appendChild(a);

  var langPref = localStorage.getItem('dpntr_lang_pref');
  if (langPref !== 'tr') {
    latestThreads.style.display = 'none';
  }
});
