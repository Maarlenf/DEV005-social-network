import { closeSesion } from '../lib/close.js';
import {
  watchUser, postIt, createSanpshot,
} from '../lib/post.js';

function wall() {
  // CREANDO NODOS
  const sectionGeneral = document.createElement('section');
  sectionGeneral.className = 'sectionWall';
  // const divGeneral = document.createElement('div');

  const img = document.createElement('img');
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'imgWall';

  const userInLine = document.createElement('h2');
  userInLine.textContent = watchUser();
  userInLine.className = 'userInLine';

  const buttonClose = document.createElement('button');
  buttonClose.textContent = 'Cerrar Sesión';
  buttonClose.className = 'singOut';
  buttonClose.id = 'sinGout';

  buttonClose.addEventListener('click', () => {
    closeSesion();
  });

  const formWall = document.createElement('form');
  formWall.className = 'formPost';

  const labelPost = document.createElement('label');
  labelPost.id = 'labPost';
  labelPost.className = 'labPostit';

  const inputNameCock = document.createElement('input');
  inputNameCock.placeholder = 'Ponle nombre a tu Cocktail';
  inputNameCock.className = 'inNametext';
  inputNameCock.id = 'inName';

  const textAreaIngre = document.createElement('textarea');
  textAreaIngre.className = 'textPost';
  textAreaIngre.placeholder = 'Ingredientes';
  textAreaIngre.id = 'textIngre';

  const textAreaPrepa = document.createElement('textarea');
  textAreaPrepa.className = 'textPost';
  textAreaPrepa.placeholder = 'Preparación';
  textAreaPrepa.id = 'textPrepa';

  const buttonPost = document.createElement('button');
  buttonPost.textContent = 'Publicar';
  buttonPost.className = 'btnPost';

  const postBlock = document.createElement('div');
  postBlock.className = 'posted';
  postBlock.id = 'postBlock';

  sectionGeneral.append(img, userInLine, buttonClose, formWall, postBlock);
  formWall.append(
    labelPost,
    inputNameCock,
    textAreaIngre,
    textAreaPrepa,
    buttonPost,
  );

  formWall.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameCock = document.getElementById('inName').value;
    const ingredientsPost = document.getElementById('textIngre').value;
    const preparationPost = document.getElementById('textPrepa').value;
    postIt(nameCock, ingredientsPost, preparationPost, new Date());
    formWall.reset();
  });
  createSanpshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const containerDiv = document.createElement('div');
      containerDiv.className = 'containerPost';

      console.log(doc.data());
      const userPost = document.createElement('h6');
      userPost.className = 'userInline';
      userPost.textContent = doc.data().inLine;

      const namePost = document.createElement('h6');
      namePost.className = 'hName';
      namePost.textContent = 'Nombre Cocktail:';

      const nameDoc = document.createElement('p');
      nameDoc.className = 'pName';
      nameDoc.textContent = doc.data().nameCock;

      const ingrePost = document.createElement('h6');
      ingrePost.className = 'hDescription';
      ingrePost.textContent = 'Ingredientes:';

      const ingreDoc = document.createElement('p');
      ingreDoc.className = 'pDescription';
      ingreDoc.textContent = doc.data().ingredients;

      const prepaPost = document.createElement('h6');
      prepaPost.className = 'hDescription';
      prepaPost.textContent = 'Preparación';

      const prepaDoc = document.createElement('p');
      prepaDoc.className = 'pDescription';
      prepaDoc.textContent = doc.data().preparation;

      const iconLike = document.createElement('span');
      iconLike.className = 'material-symbols-outlined';
      iconLike.textContent = 'thumb_up';
      iconLike.setAttribute = ('data.id', doc.id);
      console.log('data.id', doc.id);
      /* <span class="material-symbols-outlined">
thumb_upsetAttribute('data-id', 'doc.id)
</span> */

      containerDiv.append(
        userPost,
        namePost,
        nameDoc,
        ingrePost,
        ingreDoc,
        prepaPost,
        prepaDoc,
        iconLike,
      );
      postBlock.append(containerDiv);
    });
  });
  // eslint-disable-next-line no-undef
  /*
  createSanpshot((querySnapshot) => {
    // const arraySection = [];
    querySnapshot.forEach((doc) => {
      console.log(doc);

      containerDiv.append(userPost, namePost, nameDoc, ingrePost, ingreDoc, prepaPost, prepaDoc);
      // arraySection.push(section);
    });
    // return divGeneral.append(...arraySection);
  }); */

  // INSERTAR NODOS

  /* const font = document.getElementById('fontClick');
  font.addEventListener('click', () => {
    const count = countLike();
    const sum = count + 1;
    return sum;
  }); */

  return sectionGeneral;
}
export default wall;
