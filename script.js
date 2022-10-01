$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		var menu_selector = $("nav.navbar.navbar-default.navbar-fixed-top")
		if( scroll >= 100 ) {
		   $(menu_selector).css("background" , "rgba(0,0,0, .6)");
		   } else {
			   $(menu_selector).css("background" , "");
		   }
	});
	
});
