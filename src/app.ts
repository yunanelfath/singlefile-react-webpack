import { name } from "./variable";

const alertBtn = document.querySelector('#alertBtn') as HTMLButtonElement;
const header = document.querySelector('#header') as HTMLHeadingElement

alertBtn.addEventListener('click', (e) => {
  header.innerHTML = `Hello there, I'm ${name}`;
});
