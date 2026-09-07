const favoriteButtonElements =
    document.querySelectorAll('.recipes-item-favorite-btn')


favoriteButtonElements.forEach((button) => {
    button.addEventListener('click', () => {{

        const recipeItem = button.closest('.recipes-item')
        const recipeId = recipeItem.dataset.id

        let favorites =
            JSON.parse(localStorage.getItem('favorites')) || []

        if (favorites.includes(recipeId)) {
            favorites = favorites.filter((id) => id !== recipeId)
        } else {
            favorites.push(recipeId)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))

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

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || []

document.querySelectorAll('.recipes-item').forEach(recipe => {
    const recipeId = recipe.dataset.id

    if(savedFavorites.includes(recipeId)) {
        const button =
            recipe.querySelector('.recipes-item-favorite-img')
        button.src = './images/icons/heart-active.svg'
    }
})