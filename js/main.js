jQuery(document).ready(function ($) {
    //FIXED HEADER
    window.onscroll = function () {
      if (window.pageYOffset > 140) {
        $("#header").addClass("active");
        $("#slider").addClass("activ");
      } else {
        $("#header").removeClass("active");
        $("#slider").removeClass("activ");
      }
    };
    
    //ISOTOPE
    let btns = $("#servicosR .button-group button") ;

    btns.click(function(e) {
      $("#servicosR .button-group button").removeClass("active");
      e.target.classList.add("active");

      let selector = $(e.target).attr("data-filter");
      $("#servicosR .grid").isotope({
        filter: selector,
      });
    });

    $(window).on("load", function() {
      $("#servicosR .grid").isotope({
        filter: "*",
      });
    })

    //MAGNFIQUÉ
    $(".grid .popup-link").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
        tPrev: "Anterior",
        tNext: "Próximo",
        tCounter: "%curr% de %total%",
      }
    })

    //owl-carousel
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      lazyLoad: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });

    
    
});