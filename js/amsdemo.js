let question = document.querySelectorAll(".question");

question.forEach(question => {
    question.addEventListener("click", event => {
        const active = document.querySelector(".question.active");
        if (active && active !== question) {
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        question.classList.toggle("active");
        const answer = question.nextElementSibling;
        if (question.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    })
})

//------------------Read More--------------//
$('.read-more-btn').click(function() {
    $('.read-more-text').slideToggle();
    if ($('.read-more-btn').text() == "Read More...") {
        $(this).text("Read Less...")
    } else {
        $(this).text("Read More...")
    }
});



$(document).ready(function() {

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});




function mobileValidation(num) {
    if (num < 10) {
        $(".btnSubmit").attr('disabled', 'disabled');
    } else {
        $(".btnSubmit").removeAttr('disabled');
    }
}



$(document).ready(function() {

    $('.client_logo-slider').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        responsive: {

            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });



    if ($('counter')) {
        $('.counter').countUp({
            'time': 3000,
            'delay': 10
        });
    }

});