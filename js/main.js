$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#main-nav').addClass('changeColor');
        }
        if ($(this).scrollTop() < 50) {
            $('#main-nav').removeClass('changeColor');
        }
    });

});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 40
            }, 800);
        }
    });

    $('a[href^="#"]').click(function () {
        $('#main-nav').slideUp("fast", function () {
            $(this).slideDown("slow");
        });
    });

    $(".nav-item").click(function () {
        $(".nav-item").removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });

});

document.addEventListener('DOMContentLoaded', function () {
    let myLanguage = document.getElementById('language').value;
    console.log('dziala');
})

//Selection of language

//$(document).ready(function () {
//    function updateText() {
//        language = $('#language option:selected').val();
//        console.log('dziala');
//    }
//
//})
