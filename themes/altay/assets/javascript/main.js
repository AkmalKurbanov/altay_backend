"use strict";
$(document).ready(function () {
  ({
    init: function () {
      $(document).on("click", function (a) {
        $('<div class="flabCursor">').css({
          top: a.clientY,
          left: a.clientX
        }).appendTo($(document.body)).on("animationend webkitAnimationEnd", function () {
          $(this).remove()
        })
      })
    }
  }).init(), $(window).on("load", function () {
    $(".flabLoader").fadeOut("slow", function () {
      $(this).remove()
    }), $(".flabLazy").lazyload({
      effect: "fadeIn"
    })
  }), $(".flabMmnu").mmenu({
    navbar: {
      title: '<span>"АЛТАЙ"</span> Гостевой дом'
    },
    extensions: ["pagedim-black", "position-right", "theme-dark"],
    counters: !0,
    iconbar: {
      add: !0,
      top: ["<a href='/'><i class='flabIcon flabio-home'></i></a>"],
      bottom: ["<a href='#'><i class='flabIcon flabio-facebook'></i></a>", "<a href='#'><i class='flabIcon flabio-instagram'></i></a>", "<a href='#'><i class='flabIcon  flabio-vkontakte'></i></a>", "<a href='#'><i class='flabIcon  flabio-youtube'></i></a>"]
    },
    navbars: [{
      position: "bottom",
      content: ["<a class='flabIcon flabio-envelope-open' href='#'></a>", "<a class='flabIcon flabio-tripadvisor' href='#'></a>", "<a class='flabIcon flabio-booking' href='#'></a>", "<a class='flabIcon flabio-airbnb' href='#'></a>"]
    }]
  });
  var a = $(".flabMmnu").data("mmenu"),
    e = $(".flabHamburger");
  e.click(function () {
    a.open()
  }), a.bind("open:finish", function () {
    e.addClass("flabHamburger--open")
  }), a.bind("close:finish", function () {
    setTimeout(function () {
      e.removeClass("flabHamburger--open")
    }, 100)
  }), $(".flabNavigation__item--submenu").children("a").append('<i class="flabIcon flabio-angle-down"></i>'), $(".flabNavigation__item--submenu").children("a").on("click", function (a) {
    a.preventDefault(), $(".flabNavigation__link").not(this).removeClass("flabNavigation__link--open").next().removeClass("flabSubmenu--show").slideUp(), $(this).next().toggleClass("flabSubmenu--show").slideToggle(), $(this).toggleClass("flabNavigation__link--open")
  }), $(window).scroll(function () {
    $(window).scrollTop() >= 80 && $(".flabSubmenu").hasClass("flabSubmenu--show") && ($(".flabSubmenu").removeClass("flabSubmenu--show").slideUp(), $(".flabNavigation__link").removeClass("flabNavigation__link--open"))
  }), $("._dropdown").click(function () {
    $(this).siblings().removeClass("-active").find("._dropdown_menu").slideUp(), $(this).toggleClass("-active").find("._dropdown_menu").slideToggle()
  }), Modernizr.mq("(min-width: 1199.98px)") && $(window).scroll(function () {
    var a = $(window).scrollTop(),
      e = $(window).height();
    a >= e / 2 ? $(".flabHeader__form").hasClass("flabHeader__form--move") || $(".flabHeader__form").addClass("flabHeader__form--move") : a < e / 2 && $(".flabHeader__form").hasClass("flabHeader__form--move") && $(".flabHeader__form").removeClass("flabHeader__form--move")
  }), $(".flabHeader__form .input-daterange,.flabRooms__form .input-daterange").datepicker({
    format: "dd-M-yy",
    startDate: "today",
    language: "ru",
    autoclose: !0,
    todayBtn: "linked",
    minDate: "0",
    orientation: "bottom",
    maxDate: "+1Y+6M"
  }).on("changeDate", function (a) {
    $("#end").prop("disabled", !1), $(".flabForm__button").addClass("flabForm__button--change");
    var e = $("#start").datepicker("getDate"),
      o = moment(e),
      l = $("#end").datepicker("getDate"),
      t = moment(l),
      i = -1 * o.diff(t, "days");
    1 == i || 21 == i ? $(".flabDays").html('<p class="flabDays"><span>' + i + "</span> ночь</p>") : i <= 4 && i >= 1 || 22 == i || 23 == i || 24 == i ? $(".flabDays").html('<p class="flabDays"><span>' + i + "</span> ночи</p>") : 0 == i || i < 0 ? $(".flabDays").html('<p class="flabDays"><span>1</span> ночь</p>') : $(".flabDays").html('<p class="flabDays"><span>' + i + "</span> ночей</p>")
  }), $(".flabSelect").selectize({
    render: {
      item: function (a, e) {
        return "<div id='room' data-price='" + a.openPrice + "'>" + a.text + "</div>"
      }
    }
  }), $(".flabFooter").show(), $(".buttonHiddenItem-js").click(function () {
    $(this).next().slideToggle()
  }), $(".flabGallery-js").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      tClose: "Закрыть (Esc)",
      tLoading: "Загрузка изображения #%curr%...",
      cursor: "mfp-zoom-out-cur",
      gallery: {
        enabled: !0,
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
        tPrev: "предыдущий",
        tNext: "следующий "
      }
    })
  }), $(".owlReviews-js").owlCarousel({
    loop: !0,
    margin: 30,
    nav: !0,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    items: 1,
    responsive: {
      992: {
        items: 2
      }
    }
  }), $(".owlRoom-js").owlCarousel({
    loop: !0,
    nav: !0,
    dots: !1,
    items: 1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    animateOut: "fadeOut",
    mouseDrag: !1
  }), $(".flabRooms__dots").each(function (a) {
    $(this).attr("id", "dotssl-" + a), a++
  }), $(".flabRoomSlider-js").each(function (a) {
    $(this).attr("id", "roomsl-" + a);
    var e = $("#roomsl-" + a).owlCarousel({
      items: 1,
      nav: !0,
      dots: !0,
      animateOut: "fadeOut",
      autoHeight: !0,
      dotsContainer: "#dotssl-" + a,
      navText: ["", ""]
    });
    $(".flabRooms__dot").click(function () {
      e.trigger("to.owl.carousel", [$(this).index(), 300])
    }), a++
  }), $(".owlVideos-js").owlCarousel({
    center: !0,
    loop: !0,
    nav: !1,
    dots: !0,
    items: 1,
    autoplay: !0,
    autoplayTimeout: 5e3,
    responsive: {
      767: {
        items: 2
      },
      991: {
        items: 2
      },
      1199: {
        items: 4
      }
    }
  }), $(".flabRooms__scrollWrap").mCustomScrollbar({
    axis: "x",
    theme: "dark-3"
  }), $(".flabVideoSlider__link").magnificPopup({
    type: "iframe",
    iframe: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?rel=0&amp;autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      },
      srcAction: "iframe_src"
    }
  }), $(".flabRooms__comfortLink").click(function (a) {
    a.preventDefault();
    var e = $(this).parent().parent().parent().parent();
    e.slideUp(), setTimeout(function () {
      e.next().slideDown()
    }, 200)
  }), $(".flabReviewsPage__sourceItems .flabReviewsPage__itemsReviewsLinks").click(function () {
    var a = $(this).attr("data-tab");
    $(".flabReviewsPage__sourceItems .flabReviewsPage__itemsReviewsLinks").removeClass("flabReviewsPage__itemsReviewsLinks--current"), $(".flabChat").removeClass("flabChat--current"), $(this).addClass("flabReviewsPage__itemsReviewsLinks--current"), $("#" + a).addClass("flabChat--current")
  }), $(".hider").click(function () {
    return $(this).parent(".message").removeClass("blur")
  }), $(".flabModal__close").click(function (a) {
    a.preventDefault(), $.magnificPopup.close()
  }), $(".flabForm__button").click(function (a) {
    a.preventDefault();
    var e = $("#start").val(),
      o = $("#end").val(),
      l = $("#people").val(),
      t = $(".flabDays span").text(),
      i = $("#room").data("price");
    $(".flabModal__dateStart").text(e), $(".flabModal__dateEnd").text(o), $(".flabModal__count--days span").text(t), $(".flabModal__count--people span").text(l), $(".flabModal__count--price span").text(l * i * t), $(".flabModal__dateStart-value").val(e), $(".flabModal__dateEnd-value").val(o), $(".flabModal__count--days-value").val(t), $(".flabModal__count--people-value").val(l), $(".flabModal__count--price-value").val(l * i * t)
  }), $(".flabOpenModal").magnificPopup({
    type: "inline",
    mainClass: "flabMfp",
    removalDelay: 500,
    midClick: !0
  })
});




$(".phone-display").text(function (i, text) {
  text = text.replace(/(\d\d\d)(\d\d\d)(\d\d\d)/, "$1 $2 $3");
  return text;
});

