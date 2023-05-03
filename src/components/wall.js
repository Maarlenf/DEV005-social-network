import logo from '../image/logo.png';
import { closeSesion } from '../lib/close.js';
import {
  removePost,
  watchUser, postIt, createSanpshot, countLike, removeLike, updatePost,
} from '../lib/post.js';

function wall() {
  // CREANDO NODOS
  const containerWall = document.createElement('div');
  containerWall.className = 'containerWall';
  const containerImgform = document.createElement('div');
  containerImgform.className = 'containerImgform';
  const sectionPost = document.createElement('div');
  sectionPost.className = 'sectionWall';

  const containerImg = document.createElement('div');
  containerImg.className = 'containerImg';

  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Logo Cocktail Network';
  img.className = 'imgWall';

  const userInLine = document.createElement('h2');
  userInLine.textContent = watchUser();
  userInLine.className = 'userInLine';

  const divExit = document.createElement('div');
  divExit.className = 'divExit';

  const iconExit = document.createElement('span');
  iconExit.className = 'material-symbols-outlined';
  iconExit.textContent = 'logout';

  iconExit.addEventListener('click', () => {
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

  containerWall.append(containerImgform, sectionPost);
  containerImg.append(img);
  divExit.append(userInLine, iconExit);
  containerImgform.append(containerImg, divExit, formWall);
  sectionPost.append(postBlock);
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
    postIt(nameCock, ingredientsPost, preparationPost, new Date(), []);
    formWall.reset();
  });

  createSanpshot((querySnapshot) => {
    postBlock.textContent = '';
    querySnapshot.forEach((doc) => {
      const containerDiv = document.createElement('div');
      containerDiv.className = 'containerPost';
      containerDiv.style.display = 'flex';

      const divUser = document.createElement('div');
      divUser.className = 'divUser';

      const userPost = document.createElement('h6');
      userPost.className = 'userPostInline';
      userPost.textContent = doc.data().inLine;

      const containerIcon = document.createElement('div');
      containerIcon.className = 'containerIconEdit';

      const iconEdit = document.createElement('span');
      iconEdit.className = 'material-symbols-outlined size-30 dark-inactive';
      iconEdit.textContent = 'edit_note';
      iconEdit.setAttribute('user', doc.id);
      iconEdit.style.display = 'none';

      const iconDelete = document.createElement('span');
      iconDelete.className = 'material-symbols-outlined';
      iconDelete.textContent = 'delete';
      iconDelete.style.display = 'none';

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

      const containerLikes = document.createElement('div');
      containerLikes.className = 'countainerLike';
      containerLikes.setAttribute('id-post', doc.id);

      const iconLike = document.createElement('span');
      iconLike.className = 'material-symbols-outlined size-28';
      iconLike.textContent = 'thumb_up';
      iconLike.setAttribute('like', doc.id);
      // console.log('data.id', doc.id);

      const numLike = document.createElement('p');
      numLike.textContent = doc.data().likes.length;
      numLike.className = 'numLike';

      // VENTANA MODAL PARA ACEPTAR ELIMINAR
      const alertClose = document.createElement('div');
      alertClose.className = 'modal';
      alertClose.style.display = 'none';

      const innerClose = document.createElement('div');
      innerClose.className = 'innerClose';

      const messageAlert = document.createElement('p');
      messageAlert.textContent = 'Al realizar esta acción se eliminará de forma permanente tu Cocktail. ¿Estás seguro que lo quieres eliminar?';
      messageAlert.className = 'messageAlert';

      const deletePost = document.createElement('button');
      deletePost.className = 'deletePost';
      deletePost.textContent = 'Aceptar';

      const containerClose = document.createElement('div');
      containerClose.className = 'containerClose';

      const iconCloseModal = document.createElement('span');
      iconCloseModal.className = 'material-symbols-outlined';
      iconCloseModal.textContent = 'close';

      containerClose.append(iconCloseModal);
      alertClose.append(innerClose);
      innerClose.append(containerClose, messageAlert, deletePost);
      containerIcon.append(iconEdit, iconDelete);
      divUser.append(userPost, containerIcon);
      containerLikes.append(numLike, iconLike);
      containerDiv.append(
        divUser,
        namePost,
        nameDoc,
        ingrePost,
        ingreDoc,
        prepaPost,
        prepaDoc,
        containerLikes,
        alertClose,
      );

      // CONTENEDOR PARA EDITAR
      const containerDivEdit = document.createElement('div');
      containerDivEdit.className = 'containerPost';
      containerDivEdit.setAttribute('user', doc.id);
      containerDivEdit.style.display = 'none';

      const divUserEdit = document.createElement('div');
      divUserEdit.className = 'divUserEdit';

      const userPostEdit = document.createElement('h6');
      userPostEdit.className = 'userInlineEdit';
      userPostEdit.textContent = doc.data().inLine;

      const iconClose = document.createElement('span');
      iconClose.className = 'material-symbols-outlined size-24';
      iconClose.textContent = 'close';

      const namePostEdit = document.createElement('h6');
      namePostEdit.className = 'hName';
      namePostEdit.textContent = 'Nombre Cocktail:';

      const nameDocEdit = document.createElement('input');
      nameDocEdit.className = 'pName';
      nameDocEdit.value = doc.data().nameCock;

      const ingrePostEdit = document.createElement('h6');
      ingrePostEdit.className = 'hDescription';
      ingrePostEdit.textContent = 'Ingredientes:';

      const ingreDocEdit = document.createElement('input');
      ingreDocEdit.className = 'pDescription';
      ingreDocEdit.value = doc.data().ingredients;

      const prepaPostEdit = document.createElement('h6');
      prepaPostEdit.className = 'hDescription';
      prepaPostEdit.textContent = 'Preparación';

      const prepaDocEdit = document.createElement('input');
      prepaDocEdit.className = 'pDescription';
      prepaDocEdit.value = doc.data().preparation;

      const containerLikesEdit = document.createElement('div');
      containerLikesEdit.className = 'countainerLike';
      containerLikesEdit.setAttribute('id-post', doc.id);

      const numLikeEdit = document.createElement('p');
      numLikeEdit.textContent = doc.data().likes.length;

      const iconLikeEdit = document.createElement('span');
      iconLikeEdit.className = 'material-symbols-outlined';
      iconLikeEdit.textContent = 'thumb_up';
      iconLikeEdit.setAttribute('like', doc.id);

      const buttonEdit = document.createElement('button');
      buttonEdit.className = 'buttonEdit';
      buttonEdit.textContent = 'Editar';

      divUserEdit.append(userPostEdit, iconClose);
      containerDivEdit.append(
        divUserEdit,
        namePostEdit,
        nameDocEdit,
        ingrePostEdit,
        ingreDocEdit,
        prepaPostEdit,
        prepaDocEdit,
        buttonEdit,
      );

      postBlock.append(containerDiv, containerDivEdit);

      if (doc.data().likes.length > 0) {
        numLike.style.display = 'flex';
      } else {
        numLike.style.display = 'none';
      }

      containerLikes.addEventListener('click', () => {
        if (doc.data().likes.includes(watchUser())) {
          removeLike(doc.id, watchUser());
        } else {
          countLike(doc.id, watchUser());
        }
      });

      if (doc.data().inLine.includes(watchUser())) {
        iconEdit.style.display = 'flex';
        iconDelete.style.display = 'flex';
      }

      iconEdit.addEventListener('click', () => {
        // console.log('si funciona');
        if (doc.data().inLine.includes(watchUser())) {
          containerDiv.style.display = 'none';
          containerDivEdit.style.display = 'flex';
        }
      });

      iconDelete.addEventListener('click', () => {
        alertClose.style.display = 'flex';
      });

      iconClose.addEventListener('click', () => {
        containerDiv.style.display = 'flex';
        containerDivEdit.style.display = 'none';
      });

      deletePost.addEventListener('click', (event) => {
        removePost(doc.id, doc.data());
        event.preventDefault();
      });

      containerClose.addEventListener('click', () => {
        alertClose.style.display = 'none';
      });

      buttonEdit.addEventListener('click', () => {
        updatePost(
          doc.id,
          nameDocEdit.value,
          ingreDocEdit.value,
          prepaDocEdit.value,
        );
      });
    });
  });
  return containerWall;
}
export default wall;
