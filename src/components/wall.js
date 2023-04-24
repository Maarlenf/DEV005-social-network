import { closeSesion } from '../lib/close.js';
<<<<<<< HEAD
import { postIt, createSnapshot } from '../lib/post.js';
=======
import { watchUser, postIt, createSnapshot } from '../lib/post.js';
>>>>>>> 1c3187174dc5c9328e900ad335fe93a368ec67b5

function wall() {
  // CREANDO NODOS
  const sectionGeneral = document.createElement('section');
  const img = document.createElement('img');
  const userPost = document.createElement('h2');
  const formWall = document.createElement('form');
  const labelPost = document.createElement('label');
  const inputNameCock = document.createElement('input');
  const textAreaIngre = document.createElement('textarea');
  const textAreaPrepa = document.createElement('textarea');
  const buttonPost = document.createElement('button');
  const postBlock = document.createElement('div');
  const buttonClose = document.createElement('button');

  // ATRIBUTOS
  sectionGeneral.className = 'sectionWall';
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'imgWall';
  userPost.textContent = watchUser();
  userPost.className = 'userInLine';
  formWall.className = 'formPost';
  labelPost.id = 'labPost';
  labelPost.className = 'labPostit';
  inputNameCock.placeholder = 'Ponle nombre a tu Cocktail';
  inputNameCock.className = 'inNametext';
  inputNameCock.id = 'inName';
  textAreaIngre.className = 'textPost';
  textAreaIngre.placeholder = 'Ingredientes';
  textAreaIngre.id = 'textIngre';
  textAreaPrepa.className = 'textPost';
  textAreaPrepa.placeholder = 'Preparación';
  textAreaPrepa.id = 'textPrepa';
  buttonPost.textContent = 'Post It !';
  buttonPost.className = 'btnPost';
  postBlock.className = 'posted';
  postBlock.id = 'postBlock';
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'singOut';
  buttonClose.id = 'sinGout';

  // INSERTAR NODOS
  sectionGeneral.append(img, userPost, buttonClose, formWall);
  formWall.append(labelPost, inputNameCock, textAreaIngre, textAreaPrepa, buttonPost, postBlock);

  const printPost = (data) => {
    // console.log(printPost);
    let html = '';
    data.forEach((doc) => {
      const publication = doc;
      html += `
      <div class = 'containerPost'>
           <h6 class = 'userInline'>${publication.inLine}</h6>
           <h6 class = 'hName'>Nombre Cocktail</h5>
           <p class = 'pName'>${publication.nameCock}</p>
           <h6 class = 'hDescription'>Ingredientes</h5>
           <p class= 'pDescription'>${publication.ingredients}</p>
           <h6 class = 'hDescription'>Preparación</h5>
           <p class= 'pDescription'>${publication.preparation}</p>
      </div>
      `;
    });
    postBlock.innerHTML = html;
  };
  createSnapshot(printPost);

  formWall.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameCock = document.getElementById('inName').value;
    const ingredientsPost = document.getElementById('textIngre').value;
    const preparationPost = document.getElementById('textPrepa').value;
    postIt(nameCock, ingredientsPost, preparationPost);
    formWall.reset();
  });

  buttonClose.addEventListener('click', () => {
    closeSesion();
  });
  return sectionGeneral;
}

export default wall;
