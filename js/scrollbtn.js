const btnElementScroll=
    document.querySelector('.button-scroll')


window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        btnElementScroll.classList.add('is-active')
    } else {
        btnElementScroll.classList.remove('is-active')
    }
})

btnElementScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})
