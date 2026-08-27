const burgerButtonMenuElement = document.querySelector('.header-burger')
const dropDownMenuElement =
  document.querySelector('[data-js-dropdown-menu]')

burgerButtonMenuElement.addEventListener('click', () => {
  dropDownMenuElement.classList.toggle('is-active')
})

const menuLinks = dropDownMenuElement.querySelectorAll('a')

menuLinks.forEach( (link) => {
  link.addEventListener('click', () => {
    dropDownMenuElement.classList.remove('is-active')
  })
})

document.addEventListener('click', (event) => {
  const isClickInsideMenu = event.target.closest('[data-js-dropdown-menu]')
  const isClickOnButtonMenu = event.target.closest('.header-burger')

  if(!isClickOnButtonMenu && !isClickInsideMenu) {
    dropDownMenuElement.classList.remove('is-active')
  }
})