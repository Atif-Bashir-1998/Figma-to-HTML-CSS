function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    $('main').addClass('main-margin');
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    $('main').removeClass('main-margin');
}

// add event listeners to left sidebar items
$(".main-menu__link").on('click', function(){
    let currentActiveItem = $(this)
    let prevActiveItem = $('.main-menu__link--active')
    
    // swap classes
    prevActiveItem.removeClass('main-menu__link--active')
    currentActiveItem.addClass('main-menu__link--active')
})