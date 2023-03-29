let navClass = document.querySelector('nav')
let menuBtn = document.querySelector('.menu-button')

menuBtn.addEventListener('click', () => {
    menuBtn.children[0].classList.toggle('hamburger')
    menuBtn.children[1].classList.toggle('cross2')
    navClass.classList.toggle('main-nav')
})