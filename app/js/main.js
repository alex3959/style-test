let menuBtn = document.querySelector('.menu__btn');
let menuWrap = document.querySelector('.menu__list-wrap');
let listLogo = document.querySelector('.list-logo');
let menuCancelBtn = document.querySelector('.menu__cancel-btn');
let contentOrderCall = document.querySelector('.content__order-call');
let contentPopup = document.querySelector('.content__popup');
let popupBtn = document.querySelectorAll('.popup__btn');


menuBtn.addEventListener('click', () => {
    menuWrap.style = 'left: -1px';
    listLogo.style = 'display: block';
    menuCancelBtn.style = 'display: block';
    document.body.style.overflow = 'hidden'
})

menuCancelBtn.addEventListener('click', () => {
    menuWrap.style = '';
    listLogo.style = '';
    menuCancelBtn.style = '';
    document.body.style.overflow = ''
    menuWrap.style = '';
})

contentOrderCall.addEventListener('click', () => {
    contentPopup.style = 'display: block';
    document.body.style.overflow = 'hidden'
})

for (let i = 0; i < popupBtn.length; i++) {
    popupBtn[i].addEventListener('click', () => {
        contentPopup.style = '';
        document.body.style.overflow = ''
    })

}