$(document).ready(function() {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  //$(".fullscreen").css("height", window_height);
  //$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({ topSpacing: 0 });

  /* //------- Active Nice Select --------//
  if (document.getElementById("default-select")) {
    $("select").niceSelect();
  }

  if (document.getElementById("property")) {
    $("select").niceSelect();
  }

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
  $(".navbar-nav li a[href^='#']").on("click", function(event) {
    var target = this.hash;

    event.preventDefault();

    var navOffset = $("#navbar").height();

    return $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 70 - navOffset
      },
      600,
      function() {
        return window.history.pushState(null, null, target);
      }
    );
  });*/
  //------- Mobile Nav  js --------//

  if ($("#nav-menu-container").length) {
    /* var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({
        id: "mobile-nav"
      });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: ""
    });*/
    //$("body").append($mobile_nav);
    //$("body").prepend(
    //  '<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>'
    //);
    //$("body").append('<div id="mobile-body-overly"></div>');
    /*$("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="lnr lnr-chevron-down"></i>');
*/
    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    /*    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu");
      $("#mobile-body-overly").toggle();
    });
*/
    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("lnr-cross lnr-menu");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }
});
