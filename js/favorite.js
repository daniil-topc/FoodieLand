const favoriteButtonElements =
    document.querySelectorAll('.recipes-item-favorite-btn')


favoriteButtonElements.forEach((button) => {
    button.addEventListener('click', () => {{
        const img =
            button.querySelector('.recipes-item-favorite-img');

            const isActive = './images/icons/heart-active.svg'
            const nonActive = './images/icons/heart-non-active.svg'

        if(img.getAttribute('src') === isActive) {
            img.setAttribute('src', nonActive)
        } else {
            img.setAttribute('src', isActive)
        }

    }})
})