import CharactersList from "./src/pages/CharactersList";
import TabManager from "./src/utils/TabManager";

const select = document.querySelector('#container')

const tabManager = new TabManager(select, {
    characters: {
        component: CharactersList,
    }
})

document.querySelectorAll('[data-tabId').forEach(element => {
    element.addEventListener('click', () => {
        tabManager.openTabById(element.getAttribute('data-tabId'))
    })
})

tabManager.openTabById('characters')