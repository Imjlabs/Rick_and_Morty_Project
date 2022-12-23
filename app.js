import CharactersList from "./src/pages/CharactersList";
import { getAllCharacters, getCharacter } from "./src/utils/Api";
import TabManager from "./src/utils/TabManager";

const select = document.querySelector("#container");

const tabManager = new TabManager(select, {
  characters: {
    component: CharactersList,
  },
});

document.querySelectorAll("[data-tabId").forEach((element) => {
  element.addEventListener("input", async (e) => {
    //tabManager.openTabById(element.getAttribute('data-tabId'))

    const caracters = await getCharacter(e.target.value);
  });
});

tabManager.openTabById("characters");
