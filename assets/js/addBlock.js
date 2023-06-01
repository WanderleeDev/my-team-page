export function addBlock(tag, content, position = 'beforebegin') {

  const elementTarget = document.querySelector(tag);

  switch (position) {
    case 'beforebegin':
    case 'afterbegin': 
    case 'beforeend':
    case 'afterend':
      elementTarget.insertAdjacentElement(position, content);
      break;
    default:
      console.error(`${position} no valida`);
      break;
  }
}