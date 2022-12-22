import ListOfCharacters from "./src/pages/ListOfCharacters";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
    characters: {
        component: ListOfCharacters,
    }
})

document.querySelectorAll('[data-tabId').forEach(element => {
    element.addEventListener('click', () => {
        tabManager.openTabById(element.getAttribute('data-tabId'))
    })
})

tabManager.openTabById('characters')