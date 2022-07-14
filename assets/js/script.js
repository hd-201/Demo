$(document).ready(function(){
    const dotItem = document.querySelectorAll(".dot")
        $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: false,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        speed: 1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                speed: 500,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                autoplay: true,
                slidesToScroll: 2,
                speed: 500
              }
            },
            {
              breakpoint: 440,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 500
              }
            }
        ]
        });

});


let width = $(window).width();

// ========================
$('.search').click(function () {
  $(".search-hide").show();
})
$('body').on('click', (e) => {
  var search = $(".search");  
  var text = $(".search-text");
  if(!search.is(e.target) && search.has(e.target).length === 0 && !text.is(e.target)) {
    $(".search-hide").hide();
  }
})


// ========= CART ==========
$('.cart').click(function () {
  $(".cart-add").show();
})
$('body').on('click', (e) => {
  var cart = $(".cart");
  var added = $(".cart-add");
  if(!cart.is(e.target) && cart.has(e.target).length === 0 && !added.is(e.target)) {
    $(".cart-add").hide();
  }
})

// ========= ICON_HEADER-TOP ==========
$('.shop-setting').click(function () {
  if (width<768){
    $(".shop-child").show();
  }
})
$('body').on('click', (e) => {
  var st = $(".shop-setting");
  if(!st.is(e.target) && st.has(e.target).length === 0) {
    $(".shop-child").hide();
  }
})

$('.member-login').click(function () {
  if(width<768){
    $(".member-child").show();
  }
})
$('body').on('click', (e) => {
  var lg = $(".member-login");
  if(!lg.is(e.target) && lg.has(e.target).length === 0) {
    $(".member-child").hide();
  }
})


 
//=========== SCOLLING ===========
$(document).ready(function() {
  $(window).scroll(function(event) {
    var x = $('html,body').scrollTop();
    if(x>=50 && width>=1024){
      $('.main-menu').addClass("scoll");
    }
    else {
      $('.main-menu').removeClass("scoll");
    }
  })
})