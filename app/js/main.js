let menuBtn = document.querySelector('.menu__btn');
let menuWrap = document.querySelector('.menu__list-wrap');
let listLogo = document.querySelector('.list-logo');
let menuCancelBtn = document.querySelector('.menu__cancel-btn');

menuBtn.addEventListener('click', () => {
    menuWrap.style = 'display: block';
    listLogo.style = 'display: block';
    menuCancelBtn.style = 'display: block';
    document.body.style.overflow = 'hidden'
})

menuCancelBtn.addEventListener('click', () => {
    menuWrap.style = '';
    listLogo.style = '';
    menuCancelBtn.style = '';
    document.body.style.overflow = ''
})