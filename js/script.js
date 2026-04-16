/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

(function ($) {
  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {
    if (!$(".nav-overlay").length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var menuToggle = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-btn");
      menuItems = document.querySelectorAll(".nav__list-item");
      menuToggle = document.querySelector("#menu-toggle");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });

      menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
          body.classList.remove("nav-active");
          if (menuToggle) menuToggle.checked = false;
        });
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  };

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true
    });
  };

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll(".image-link"), {
      imageSize: "contain",
      loop: true
    });
  };

  var initSwiper = function () {
    var swiper = new Swiper(".portfolio-carousel", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".portfolio-carousel-next",
        prevEl: ".portfolio-carousel-prev"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        599: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        980: {
          slidesPerView: 3,
          spaceBetween: 5
        }
      }
    });

    var testimonial_swiper = new Swiper(".testimonial-carousel", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".testimonial-carousel-next",
        prevEl: ".testimonial-carousel-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        980: {
          slidesPerView: 3,
          spaceBetween: 5
        }
      }
    });

    var adobeSuiteIcons = [
      {
        src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobephotoshop.svg",
        alt: "Adobe Photoshop logo"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeillustrator.svg",
        alt: "Adobe Illustrator logo"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/adobeindesign.svg",
        alt: "Adobe InDesign logo"
      }
    ];

    var adobeIconIndex = 0;
    var updateAdobeSuiteIcons = function () {
      var currentIcon = adobeSuiteIcons[adobeIconIndex];
      var adobeLogoEls = document.querySelectorAll(".adobe-suite-logo");
      adobeLogoEls.forEach(function (logoEl) {
        logoEl.setAttribute("src", currentIcon.src);
        logoEl.setAttribute("alt", currentIcon.alt);
      });
    };

    testimonial_swiper.on("slideChangeTransitionStart", function () {
      adobeIconIndex = (adobeIconIndex + 1) % adobeSuiteIcons.length;
      updateAdobeSuiteIcons();
    });

    updateAdobeSuiteIcons();

    var clients_swiper = new Swiper(".clients-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        980: {
          slidesPerView: 5,
          spaceBetween: 5
        }
      }
    });
  };

  function initIsotope() {
    // Initialize Isotope
    var $container = $(".isotope-container").isotope({
      itemSelector: ".item",
      layoutMode: "masonry"
    });

    // Active button class management
    $(".filter-button").on("click", function () {
      $(".filter-button").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
    });
  }

  var initCaseStudyExpander = function () {
    var portfolioSection = document.querySelector("#portfolio");
    var portfolioItems = document.querySelectorAll("#portfolio .portfolio-item");
    if (!portfolioItems.length) {
      return;
    }

    var closeAll = function () {
      if (portfolioSection) {
        portfolioSection.classList.remove("has-active-case-study");
      }
      portfolioItems.forEach(function (item) {
        item.classList.remove("is-active");
        var slide = item.closest(".swiper-slide");
        if (slide) {
          slide.classList.remove("case-study-slide-active");
        }
        var panel = item.querySelector(".case-study-details");
        if (panel) {
          panel.setAttribute("aria-hidden", "true");
        }
      });
    };

    portfolioItems.forEach(function (item) {
      var trigger = item.querySelector(".case-study-trigger");
      var panel = item.querySelector(".case-study-details");
      var closeBtn = item.querySelector(".case-study-close");

      if (trigger) {
        trigger.addEventListener("click", function (event) {
          event.preventDefault();
          var isOpen = item.classList.contains("is-active");
          closeAll();
          if (!isOpen) {
            item.classList.add("is-active");
            if (portfolioSection) {
              portfolioSection.classList.add("has-active-case-study");
            }
            var activeSlide = item.closest(".swiper-slide");
            if (activeSlide) {
              activeSlide.classList.add("case-study-slide-active");
            }
            if (panel) {
              panel.setAttribute("aria-hidden", "false");
            }
            if (closeBtn) {
              closeBtn.focus();
            }
            if (window.matchMedia("(max-width: 991px)").matches) {
              setTimeout(function () {
                item.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 150);
            }
          }
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener("click", function (event) {
          event.preventDefault();
          closeAll();
        });
      }
    });
  };

  $(document).ready(function () {
    overlayMenu();
    initChocolat();
    initJarallax();
    initSwiper();
    initCaseStudyExpander();

    AOS.init({
      duration: 1500,
      once: true
    });

    // Initialize isotope after all images are loaded
    $(window).on("load", function () {
      // Fade out preloader
      $("#overlayer").fadeOut("slow");
      $("body").addClass("loaded");
      initIsotope();
    });
  });
})(jQuery);
