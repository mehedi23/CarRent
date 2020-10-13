$(document).ready(function () {

  new WOW().init();


  // responsive menu bar

  $('.menu-icon').click(function () {
    if ($('.menu-icon .fas.fa-bars').hasClass('fa-bars')) {
      $('.menu-icon .fas.fa-bars').removeClass('fa-bars');
      $('.menu-icon .fas').addClass('fa-times');
      $('.navbar').addClass('nav-show');
      $("body").addClass('scrolling-off');
    } else {
      $('.menu-icon .fas.fa-times').removeClass('fa-times');
      $('.menu-icon .fas').addClass('fa-bars');
      $('.navbar').removeClass('nav-show');
      $("body").removeClass('scrolling-off');
    }
  })

  $(".navbar a").click(function () {
    $('.fas.fa-times').removeClass('fa-times');
    $('.menu-icon .fas').addClass('fa-bars');
    $('.navbar').removeClass('nav-show');
    $("body").removeClass('scrolling-off');
  })


  // getting google location 

  let location = document.getElementById('location');
  let locationSubmit = document.getElementById('location-submit');

  $(locationSubmit).click(function () {
    let googleAddress = $('.geoposition-address').text();

    location.innerHTML = '';
    location.innerHTML = ` ${googleAddress} `;
  })

  // car model 

  $('.car-option input').click(function () {
    var carSelected = $(this).val()
    $('.car-model-value').val(`${carSelected}`);
    $('.car-option').slideUp(); 
  })

  $('.car-model-value').click(function () {
    $('.car-option').slideToggle()
  })

  $(document).click(function (ev) {
    if (ev.target.className !== "form-control DCarModel car-model-value") {
      $('.car-option').slideUp()
    }
  })

  $(document).scroll(function () {
    var scrollToTop = $(this).scrollTop()

    if (scrollToTop < 300) {
      $('.car-option').addClass('car-option-bottom');
      $('.car-option').removeClass('car-option-top'); 
      $('#car-arrow-icon').addClass('car-arrow-top');
      $('#car-arrow-icon').removeClass('car-arrow-bottom');
      
    } else if (scrollToTop > 301) {
      $('.car-option').addClass('car-option-top'); 
      $('.car-option').removeClass('car-option-bottom'); 
      $('#car-arrow-icon').addClass('car-arrow-bottom');
      $('#car-arrow-icon').removeClass('car-arrow-top');
    }
  })


  // dealer email

  let dealerEmailArray = document.querySelectorAll('.dealer-email');
  let dealerEmailShow = document.querySelectorAll('.show-email');
  let dealerExtraEmailShow = document.querySelectorAll('.extra-email-text');

  dealerEmailArray.forEach((item, index) => {
    let theEmail = item.innerHTML;
    let emailArry = theEmail.split("");

    if (emailArry.length > 22) {
      for (let i = 0; i < 22; i++) {
        dealerEmailShow[index].innerHTML += `${emailArry[i]}`
      }
      for (let i = 22; i < emailArry.length; i++) {
        dealerExtraEmailShow[index].innerHTML += `${emailArry[i]}`
      }
    } else {
      for (let i = 0; i < emailArry.length; i++) {
        dealerEmailShow[index].innerHTML += `${emailArry[i]}`
      }
    }

  })


  // order page nav

  $('.order-navbar-items').click(function () {
    $('.order-navbar-items').removeClass('order-active-nav');
    $(this).addClass('order-active-nav');
  })

  $('#car-review-show').click(function () {
    $('.car-review').removeClass('tabs-hide');
    $('.the-owner').addClass('tabs-hide');

    // animating
    $('.car-review .order-img').addClass('animate__animated animate__fadeInLeft');
    $('.the-owner .order-img').removeClass('animate__animated animate__fadeInLeft');

    $('.car-review .get-information').addClass('animate__animated animate__fadeInRight');
    $('.the-owner .get-information').removeClass('animate__animated animate__fadeInRight');
  })

  $('#the-owner-show').click(function () {
    $('.the-owner').removeClass('tabs-hide');
    $('.car-review').addClass('tabs-hide');

    //animating
    $('.the-owner .order-img').addClass('animate__animated animate__fadeInLeft');
    $('.car-review .order-img').removeClass('animate__animated animate__fadeInLeft');

    $('.the-owner .get-information').addClass('animate__animated animate__fadeInRight');
    $('.car-review .get-information').removeClass('animate__animated animate__fadeInRight');
  })


  // owl carousel area

  var owl = $('.suggest-car-slider');
  owl.owlCarousel({
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      760: {
        items: 3
      },
      1260: {
        items: 4
      }
    }
  });


  // animating area

  var smallCardArray = $('.small-car-anim');
  var largeCardArray = $('.large-car-anim');
  var offerCardArray = $('.offer-car-anim')
  var dealerCardArray = $('.car-dealer-anim')

  $('#small-car').waypoint(function () {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        $(smallCardArray[i]).addClass('to-animated');
      }, i * 300);
    };
    setTimeout(() => {
      $('#small-car-loader').addClass('to-animated');
    }, 1800);
  }, {
    offset: '50%'
  })

  $('#large-car').waypoint(function () {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        $(largeCardArray[i]).addClass('to-animated');
      }, i * 300);
    };
    setTimeout(() => {
      $('#large-car-loader').addClass('to-animated');
    }, 1800);
  }, {
    offset: '50%'
  })

  $('#offers-car').waypoint(function () {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        $(offerCardArray[i]).addClass('to-animated');
      }, i * 300);
    };
    setTimeout(() => {
      $('#offer-car-loader').addClass('to-animated');
    }, 2400);
  }, {
    offset: '50%'
  })

  $('#carDealer').waypoint(function () {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        $(dealerCardArray[i]).addClass('to-animated');
      }, i * 300);
    };
    setTimeout(() => {
      $('#car-dealer-loader').addClass('to-animated');
    }, 2400)
  }, {
    offset: '50%'
  })



  // loader button

  $(".small-car-anim").slice(6, 9999999).hide();
  $(".large-car-anim").slice(6, 9999999).hide();
  $(".offer-car-anim").slice(8, 9999999).hide();
  $(".car-dealer-anim").slice(8, 9999999).hide();

  var smallCount = 6;
  var largeCount = 6;
  var offerCount = 8;
  var dealerCount = 8;
  var smallCarLoader = 0;
  var largeCarLoader = 0;
  var offerCarLoader = 0;
  var dealerCarLoader = 0;

  if (smallCount > smallCardArray.length) {
    $('#small-car-loader').hide()
  };
  if (largeCount > largeCardArray.length) {
    $('#large-car-loader').hide()
  };
  if (offerCount > offerCardArray.length) {
    $('#offer-car-loader').hide()
  };
  if (dealerCount > dealerCardArray.length) {
    $('#car-dealer-loader').hide()
  };


  $("#small-car-loader").click(function () {
    smallCount = smallCount + 6;
    smallCarLoader = smallCarLoader + 5

    $(".small-car-anim").slice(6, smallCount).show();
    for (let i = 0; i < smallCount; i++) {
      setTimeout(() => {
        $(smallCardArray[i]).addClass('to-animated');
      }, (i - smallCarLoader) * 300);
    };
    if (smallCount > smallCardArray.length) {
      $('#small-car-loader').hide()
    };
  });

  $("#large-car-loader").click(function () {
    largeCount = largeCount + 6;
    largeCarLoader = largeCarLoader + 5

    $(".large-car-anim").slice(6, largeCount).show();
    for (let i = 0; i < largeCount; i++) {
      setTimeout(() => {
        $(largeCardArray[i]).addClass('to-animated');
      }, (i - largeCarLoader) * 300);
    };
    if (largeCount > largeCardArray.length) {
      $('#large-car-loader').hide()
    };
  });

  $("#offer-car-loader").click(function () {
    offerCount = offerCount + 8;
    offerCarLoader = offerCarLoader + 7

    $(".offer-car-anim").slice(8, offerCount).show();
    for (let i = 0; i < offerCount; i++) {
      setTimeout(() => {
        $(offerCardArray[i]).addClass('to-animated');
      }, (i - offerCarLoader) * 300);
    };
    if (offerCount > offerCardArray.length) {
      $('#offer-car-loader').hide()
    };
  });

  $("#car-dealer-loader").click(function () {
    dealerCount = dealerCount + 8;
    dealerCarLoader = dealerCarLoader + 7

    $(".car-dealer-anim").slice(8, dealerCount).show();
    for (let i = 0; i < dealerCount; i++) {
      setTimeout(() => {
        $(dealerCardArray[i]).addClass('to-animated');
      }, (i - dealerCarLoader) * 300);
    };
    if (dealerCount > dealerCardArray.length) {
      $('#car-dealer-loader').hide()
    };
  });


});