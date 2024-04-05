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
        appendDots: $(".slick-container"),
        customPaging: function(slider, i) {
          return '<span></span>';
        }
      });
    } else {
      $("#slick").slick("unslick"); // Uninitialize Slick carousel on desktop
    }
  });
  