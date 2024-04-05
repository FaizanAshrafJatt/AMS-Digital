jQuery(function($) {
    "use strict";
    $(window).ready(function() {
            $("#preloader").delay(200).fadeOut("fade");
        }),
        $(window).on("scroll", function() {
            $(this).scrollTop() > 0 ? ($(".navbar").addClass("affix"), $(".scroll-to-target").addClass("open")) : ($(".navbar").removeClass("affix"), $(".scroll-to-target").removeClass("open")),
                $(this).scrollTop() > 500 ? $(".scroll-to-target").addClass("open") : $(".scroll-to-target").removeClass("open");
        }),
        $(".scroll-to-target").length &&
        $(".scroll-to-target").on("click", function() {
            var a = $(this).attr("data-target");
            $("html, body").animate({
                scrollTop: $(a).offset().top
            }, 500);
        }),
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(a) {
                    return a.el.attr("title") + "<small>by Marsel Van Oosten</small>";
                },
            },
        }),
        $("#js-contcheckbox").change(function() {
            this.checked ?
                ($(".monthly-price").css("display", "none"), $(".yearly-price").css("display", "block"), $(".afterinput").addClass("text-success"), $(".beforeinput").removeClass("text-success")) :
                ($(".monthly-price").css("display", "block"), $(".yearly-price").css("display", "none"), $(".afterinput").removeClass("text-success"), $(".beforeinput").addClass("text-success"));
        }),
        $(".hero-bg-slider").owlCarousel({
            loop: !0,
            margin: 0,
            items: 1,
            nav: !1,
            dots: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 4500,
            autoplayHoverPause: !0,
            autoplaySpeed: 3500,
            lazyLoad: !0
        }),
        $(".owl-custom").owlCarousel({
            rtl: !0,
            loop: !0,
            margin: 10,
            nav: !0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1e3: {
                    items: 3
                }
            }
        }),
        $(".hero-slider-one").owlCarousel({
            loop: !0,
            autoplay: !0,
            dots: !0,
            autoplayHoverPause: !0,
            items: 1,
            smartSpeed: 1e3,
            animateOut: "slideOutUp",
            animateIn: "slideInDown"
        }),
        $(".hero-content-slider").owlCarousel({
            loop: !1,
            autoplay: !0,
            dots: !0,
            autoplayHoverPause: !0,
            items: 1,
            smartSpeed: 1e3,
            animateOut: "slideOutUp",
            animateIn: "slideInDown"
        }),
        $(".custom-indicator-slider").owlCarousel({
            items: 1,
            nav: !1,
            dots: !0,
            smartSpeed: 1e3,
            animateOut: "slideOutUp",
            animateIn: "slideInDown",
            dotsContainer: "#carousel-custom-indicator"
        });
    var c = !0,
        d = null,
        a = $(".single-counter > h3, .single-card > h3");
    if (a.length) {
        var b = a.offset().top - window.innerHeight;
        b > 0 ?
            $(window).on("scroll", function() {
                c && $(window).scrollTop() > b && (f(), (c = !1));
            }) :
            f();
    }

    function e(e, b, c, f) {
        var a,
            g = b,
            h = 5 >= Math.ceil((a = c) / 2) ? 1 : 10 >= Math.ceil(a / 10) ? 10 : 10 >= Math.ceil(a / 100) ? 25 : 100 >= Math.ceil(a / 100) ? 50 : 100 >= Math.ceil(a / 1e3) ? 150 : 500;
        d = setInterval(function() {
            g < c && ((g += h), (e[f].innerHTML = g));
        }, 40);
    }

    function f() {
        for (var c = $(".single-counter > h3, .single-card > h3"), d = c.length, f = [], a = 0; a < d; a++) f[a] = parseInt(c[a].innerHTML);
        for (var b = 0; b < d; b++) e(c, 0, f[b], b);
    }
    $(".client-testimonial-1").owlCarousel({
            loop: !0,
            margin: 30,
            nav: !1,
            dots: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            lazyLoad: !0,
            items: 1
        }),
        $(".client-testimonial").owlCarousel({
            loop: !0,
            margin: 30,
            nav: !0,
            dots: !1,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            lazyLoad: !0,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
        }),
        $(".hero-content-slider").owlCarousel({
            loop: !0,
            margin: 30,
            nav: !1,
            dots: !1,
            responsiveClass: !0,
            autoplay: !0,
            autoplayHoverPause: !0,
            lazyLoad: !0,
            items: 1
        }),
        $(".clients-carousel").owlCarousel({
            autoplay: !0,
            loop: !0,
            margin: 15,
            dots: !1,
            slideTransition: "linear",
            autoplayTimeout: 4500,
            autoplayHoverPause: !0,
            autoplaySpeed: 4500,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                600: {
                    items: 4
                },
                800: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },
        }),
        $(function() {
            var a = document.querySelector("#MixItUp");
            void 0 !== a && null != a && mixitup(a, {
                selectors: {
                    control: "[data-mixitup-control]"
                },
                animation: {
                    effects: "fade translateZ(-100px)"
                }
            });
        }),
        $(document).ready(function() {
            $(".player").YTPlayer();
        }),
        $(".work-process-carousel").each(function() {
            var a = $(this),
                b = a.data("items") || [1, 1, 1],
                c = a.data("margin"),
                d = a.data("loop"),
                e = a.data("nav"),
                f = a.data("dots"),
                g = a.data("center"),
                h = a.data("autoplay"),
                i = a.data("autoplay-speed"),
                j = a.data("rtl"),
                k = a.data("autoheight"),
                l = {
                    nav: e || !0,
                    loop: d || !1,
                    dots: f || !1,
                    center: g || !1,
                    autoplay: h || !1,
                    autoHeight: k || !1,
                    rtl: j || !1,
                    margin: c || 0,
                    autoplayTimeout: i || 3e3,
                    autoplaySpeed: 400,
                    autoplayHoverPause: !0,
                    responsive: {
                        0: {
                            items: b[2] || 1
                        },
                        576: {
                            items: b[1] || 1
                        },
                        1200: {
                            items: b[0] || 1
                        }
                    },
                };
            a.owlCarousel(l);
        }),
        $(".gallery").owlCarousel({
            autoplay: !0,
            loop: !0,
            margin: 15,
            nav: !1,
            autoplayTimeout: 4500,
            autoplaySpeed: 400,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                600: {
                    items: 4
                },
                800: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            },
        });

    function g(b, a) {
        b
            ?
            ($(a + " .message-box")
                .removeClass("d-none")
                .addClass("d-block "),
                $(a + " .message-box div")
                .removeClass("alert-danger")
                .addClass("alert-success")
                .text("Form submitted successfully")) :
            ($(a + " .message-box")
                .removeClass("d-none")
                .addClass("d-block "),
                $(a + " .message-box div")
                .removeClass("alert-success")
                .addClass("alert-danger")
                .text("Found error in the form. Please check again."));
    }
    new WOW({
            offset: 100,
            mobile: !0
        }).init(),
        $("#clock").countdown("2022/01/30", function(a) {
            $(this).html(
                a.strftime(
                    '<div class="row"><div class="col"><h2 class="mb-1">%-D</h2><h5>Day%!d</h5></div><div class="col"><h2 class="mb-1">%H</h2><h5>Hours</h5></div><div class="col"><h2 class="mb-1">%M</h2><h5>Minutes</h5></div><div class="col"><h2 class="mb-1">%S</h2><h5>Seconds</h5></div></div>'
                )
            );
        }),
        $(function() {
            if ($("#countdown").length)
                var a = 1e3,
                    b = 60 * a,
                    c = 60 * b,
                    e = 24 * c,
                    d = "December 30, 2022 00:00:00",
                    f = new Date(d).getTime(),
                    g = setInterval(function() {
                        var h = new Date().getTime(),
                            d = f - h;
                        if (
                            ((document.getElementById("days").innerText = Math.floor(d / e)),
                                (document.getElementById("hours").innerText = Math.floor((d % e) / c)),
                                (document.getElementById("minutes").innerText = Math.floor((d % c) / b)),
                                (document.getElementById("seconds").innerText = Math.floor((d % b) / a)),
                                d < 0)
                        ) {
                            var i = document.getElementById("countdown"),
                                j = document.getElementById("end-countdown");
                            (i.style.display = "none"), (j.style.display = "block"), clearInterval(g);
                        }
                    }, a);
        }),
        $(function() {
            $(".chart").easyPieChart({
                barColor: "#e80566",
                trackColor: "#ffffff",
                scaleColor: "transparent",
                lineCap: "round",
                lineWidth: 15,
                size: 180,
                animate: 2e3,
                onStart: $.noop,
                onStop: $.noop
            });
        }),
        $("#contactForm").length &&
        $("#contactForm")
        .validator()
        .on("submit", function(a) {
            var b, c, d;
            a.isDefaultPrevented() ?
                g(!1, ".contact") :
                (a.preventDefault(),
                    (b = $('#contactForm input[name="name"]').val()),
                    (c = $('#contactForm input[name="email"]').val()),
                    (d = $('#contactForm textarea[name="message"]').val()),
                    $.ajax({
                        type: "POST",
                        url: "libs/contact-form-process.php",
                        data: "name=" + b + "&email=" + c + "&message=" + d,
                        success: function(a) {
                            "success" == a ? ($("#contactForm")[0].reset(), g(!0, ".contact")) : g(!1, ".contact");
                        },
                    }));
        });
});