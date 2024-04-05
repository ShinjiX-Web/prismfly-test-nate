$(document).ready(function(){
    if ($(window).width() < 768) {
      $("#slick").slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        cssEase: 'linear',
        appendDots: $(".slick-pagination"),
        customPaging: function(slider, i) {
          return '<span></span>';
        },
        equalheights: true // Ensure all slides have equal height
      });
    } else {
      $("#slick").slick("unslick"); // Uninitialize Slick carousel on desktop
    }
  });
  