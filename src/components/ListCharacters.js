import { CardCharacter } from "./CardCharacter"

export default function ListCharacters(arrayOfElement) {
    const template = document.querySelector('#listOfElement')
    const element = template.content.cloneNode(true)

    arrayOfElement.forEach(e => {
        element.appendChild(CardCharacter(e))
    })

    return element
}