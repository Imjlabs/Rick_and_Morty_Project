export function CardCharacter({ image, name, gender }) {
    const card = document.createElement('div')
    card.setAttribute("class", "card")
    const imageCard = document.createElement('img')
    imageCard.setAttribute('src', image)
    const nameCard = document.createElement('h1')
    nameCard.textContent = name
    const genderCard = document.createElement('p')
    genderCard.textContent = gender
    card.appendChild(imageCard)
    card.appendChild(nameCard)
    card.appendChild(genderCard)
    return card
}