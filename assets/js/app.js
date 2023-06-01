import { card } from "./components/card.js";
import { addBlock } from "./addBlock.js";

const dataList =[
  {
    img:'./assets/img/photo1.png',
    name:'Bill Mahoney',
    position: 'Product owner'
  },
  {
    img:'./assets/img/photo2.png',
    name:'Saba Cabrera',
    position: 'Art director'
  },
  {
    img:'./assets/img/photo3.png',
    name:'Shae Le',
    position: 'Tech Lead'
  },
  {
    img:'./assets/img/photo4.png',
    name:'Skylah Lu',
    position: 'UX Designer'
  },
  {
    img:'./assets/img/photo5.png',
    name:'Griff Richards',
    position: 'Developer'
  },
  {
    img:'./assets/img/photo6.png',
    name:'Stan John',
    position: 'Deverloper'
  }
];

const cards = dataList.map((data) => {
  return card(data);
}).join("");

const container = document.createElement('div');
container.classList.add('container-cards');
container.innerHTML= cards;
console.log((container));
addBlock('.page-main', container,'beforeend');

