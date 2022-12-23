import { Card } from "./Card";

export default function CharactersList(arrayOfElement) {
  const template = document.querySelector("#allCard");
  const element = template.content.cloneNode(true);

  arrayOfElement.forEach((e) => {
    element.appendChild(Card(e));
  });

  return element;
}

