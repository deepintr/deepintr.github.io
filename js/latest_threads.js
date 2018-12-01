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
        'Linux Deepin Nasıl Kurulur? Resimli anlatım.',
        'https://spectrum.chat/deepintr?thread=9cbd6db3-1080-45bb-9122-a05c07bb9621'
      ],
      ['Daha fazlası için tıklayın...', 'https://spectrum.chat/deepintr']
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
      ],
      ['Discover more...', 'https://spectrum.chat/deepintr']
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
});
