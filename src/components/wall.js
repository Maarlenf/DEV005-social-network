import { closeSesion } from '../lib/close.js';

function wall() {
  // CREANDO NODOS
  const section = document.createElement('div');
  const img = document.createElement('img');
  const textError = document.createElement('h2');
  const buttonClose = document.createElement('button');

  // ATRIBUTOS
  section.className = 'error';
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'login';
  textError.textContent = 'Página en Construccion';
  textError.className = 'welcome';
  buttonClose.textContent = 'Cerrar Sesiòn';
  buttonClose.className = 'singOut';
  buttonClose.id = 'sinGout';

  // INSERTAR NODOS
  section.append(img, textError, buttonClose);
  buttonClose.addEventListener('click', () => {
    closeSesion();
  });
  return section;
}
export default wall;
