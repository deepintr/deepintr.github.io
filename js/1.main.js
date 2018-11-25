$(document).ready(function() {
  // Mail button click handler.
  var emailBtn = document.getElementById('email-btn');
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

  var langQuery = window.location.search.toLowerCase();
  langQuery = langQuery.substring(langQuery.indexOf('=') + 1);

  if (langQuery && langQuery === 'en') {
    document.title = 'Deepin Turkey | Linux Deepin Turkey Community';
		document.querySelector('.main-header').innerText = "The Only Linux Deepin User Community in Turkey";
		document.querySelector('.home').setAttribute('title', document.title);
    document.querySelector('.title-about').innerText = 'About Us';
		document.querySelector('.about').setAttribute('title', 'Who we are? What we do?');
		document.querySelector('#email-btn').setAttribute('title', 'Contact Us');
  }
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
