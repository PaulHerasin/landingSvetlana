$('.pgwSlider').pgwSlider({
    selectionMode: 'click',
    displayControls: true
});


$('.slider-video').slick({
    infinite: true,
    prevArrow: '.slider-prev',
    nextArrow: '.slider-next'
});

//E-mail Ajax Send
$("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function () {
        alert("Thank you!");
        setTimeout(function () {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});


// Модальное окно
// открыть по кнопке
$('.js-button-campaign').click(function () {
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $('.js-overlay-campaign').fadeOut();

    }
});

