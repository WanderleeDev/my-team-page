export const card = (data) => {
  
  const {img, name, position}= data;
  
  const component = `
  <figure class="card">
    <div class="card-content">
      <img class="card-img" src=${img} alt='foto de ${name}'>
      <span class="card-extraData">${position}</span>
    </div>
    <figcaption class="card-title">${name}</figcaption>
  </figure>
  `;
  
  return component;
}