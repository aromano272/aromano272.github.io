$(document).ready(function() {

  var $page_nav_section = $(".page_nav_section");
  var $about_nav = $(".about_nav");

  // hide and show menu
  $(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll === 0 && $page_nav_section.hasClass("active")) {
      $page_nav_section.fadeTo("fast", 0);
      $about_nav.fadeTo("fast", 1);
      $page_nav_section.removeClass("active");
    } else if (scroll > 0 && !$page_nav_section.hasClass("active")) {
      $page_nav_section.fadeTo("fast", 1);
      $about_nav.fadeTo("fast", 0);
      $page_nav_section.addClass("active");
    }
  });

  // navigation scroll animation
  $('a[href*="#"]:not([href="#"])').click(function() {
    var scrollOffset = 80;

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - scrollOffset
        }, 1000);
        return false;
      }
    }
  });

});
