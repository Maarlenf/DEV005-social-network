import { closeSesion } from '../lib/close.js';
import { postIt, createSnapshot } from '../lib/post.js';

function wall() {
  // CREANDO NODOS
  const sectionGeneral = document.createElement('section');
  const img = document.createElement('img');
  const textError = document.createElement('h2');
  const formWall = document.createElement('form');
  const labelPost = document.createElement('label');
  const inputNameCock = document.createElement('input');
  const textAreapost = document.createElement('textarea');
  const buttonPost = document.createElement('button');
  const postBlock = document.createElement('div');
  // const titlePost = document.createElement('h3');
  // const cockName = document.createElement('p');
  // const titledesPost = document.createElement('h3');
  // const descriptionPost = document.createElement('p');
  const buttonClose = document.createElement('button');

  // ATRIBUTOS
  sectionGeneral.className = 'sectionWall';
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'loginWall';
  textError.textContent = 'Página en construcción';
  textError.className = 'welcome';
  formWall.className = 'formPost';
  labelPost.id = 'labPost';
  labelPost.className = 'labPostit';
  inputNameCock.placeholder = 'Ponle nombre a tu Post';
  inputNameCock.className = 'inNametext';
  inputNameCock.id = 'inName';
  textAreapost.className = 'textPost';
  textAreapost.placeholder = 'Que estas Preparando?';
  textAreapost.id = 'textPostit';
  buttonPost.textContent = 'Post It !';
  buttonPost.className = 'btnPost';
  postBlock.className = 'posted';
  postBlock.id = 'postBlock';
  // postBlock.textContent = 'Cocktail';
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'singOut';
  buttonClose.id = 'sinGout';

  // INSERTAR NODOS
  sectionGeneral.append(img, textError, formWall, buttonClose);
  formWall.append(labelPost, inputNameCock, textAreapost, buttonPost, postBlock);
  // postBlock.append(titlePost, cockName, titledesPost, descriptionPost);
  const printPost = (data) => {
    // console.log(printPost);
    let html = '';
    data.forEach((doc) => {
      const publication = doc;
      html += `
      <div class='containerPost'>
           <h6 class='hName'>${'CockName'}</h5>
           <p class='pName'>${publication.nameCock}</p>
           <h6 class='hDescription'>${'Description'}</h5>
           <p class='pDescription'>${publication.description}</p>
      </div>
      `;
    });
    postBlock.innerHTML = html;
  };
  createSnapshot(printPost);
  formWall.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameCock = document.getElementById('inName').value;
    const description = document.getElementById('textPostit').value;
    postIt(nameCock, description);
    formWall.reset();
  });
  buttonClose.addEventListener('click', () => {
    closeSesion();
  });
  return sectionGeneral;
}

export default wall;
