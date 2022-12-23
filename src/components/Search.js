import { Card } from "./Card";

export default function search(arrayOfElement) {
  const template = document.querySelector("#allCard");
  const resultElement = template.content.cloneNode(true);

  arrayOfElement.forEach((e) => {
    resultElement.appendChild(Card(e));
  });

  return resultElement;
}
