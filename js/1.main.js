$(document).ready(function() {
  // Mail button click handler.
  var emailBtn = document.querySelector('#email-btn');
  emailBtn.addEventListener('click', function(e) {
    e.preventDefault();

    var email_user = 'deepintr';
    var email_at = '@';
    var email_host = 'gmail.com';

    var subject = 'deepintr.org';
    var body_message = 'Merhaba!\n';

    emailwin = window.open(
      'mailto:' + email_user + email_at + email_host + '?subject=' + subject + '&body=' + body_message,
      'emailWindow'
    );
    if (emailwin && emailwin.open && !emailwin.closed) emailwin.close();
  });

  // Language specific functions.
  var langImg = document.querySelector('#lang-img');
  var langPref = localStorage.getItem('dpntr_lang_pref');
  if (langPref) {
    // Set country flag.
    var flagName;
    if (langPref === 'tr') flagName = 'tr.svg';
    else flagName = 'gb.svg';
    langImg.setAttribute('src', 'https://deepintr.org/images/flags/' + flagName);
  }

  if (langPref && langPref === 'en') {
    document.title = 'Deepin Turkey | Linux Deepin Turkey Community';
    document.querySelector('.main-header').innerText = 'The Only Linux Deepin User Community in Turkey';
    document.querySelector('.home').setAttribute('title', document.title);
    document.querySelector('.home').setAttribute('href', window.location);
    document.querySelector('.title-about').innerText = 'About Us';
    document.querySelector('.about').setAttribute('title', 'Who we are? What we do?');
    document.querySelector('.about').setAttribute('data-featherlight', 'about.en.html .about-popup');
    document.querySelector('#email-btn').setAttribute('title', 'Contact Us');
  }

  // Language button click-handler.
  langImg.addEventListener('click', function(e) {
    if (langPref === 'tr') {
      localStorage.setItem('dpntr_lang_pref', 'en');
    } else {
      localStorage.setItem('dpntr_lang_pref', 'tr');
    }
    location.reload(true);
  });

  /*
  $('.home').click(function (e) {
			$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
			$(".panel-cover").fadeOut();
    	$('body').css('overflow','auto');
  })

	if (window.location.pathname == 'home/'){
		$('#nav-home').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == 'industry/'){
		$('#nav-industry').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == 'research/'){
		$('#nav-research').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == 'tools_and_materials/'){
		$('#nav-tools').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == 'articles_and_tutorials/'){
		$('#nav-articles').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	if (window.location.pathname == 'about_us/'){
		$('#nav-about').css({'color':'rgb(0,0,0)','font-weight': '400'})
	}

	$('.new-header .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeIn(200);
		$('.mobile-sidebar-container').fadeIn(200);
  })

	$('.mobile-sidebar .btn-mobile-menu__icon').click(function () {
		$('.mobile-sidebar').fadeOut(200);
		$('.mobile-sidebar-container').fadeOut(200);
  })
*/
});
