function toggleHamburger() {
    $('.fa-bars').click (function() {
        $('.hamburger-menu').show();
    })
    $('.fa-times').click (function() {
        $('.hamburger-menu').hide();
    }
    )
}

function init() {
    toggleHamburger();
}

init();