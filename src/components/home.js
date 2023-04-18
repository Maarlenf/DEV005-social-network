import { start } from '../lib/login';

// CREACION DE NODOS
function home() {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const sectionGeneral = document.createElement('section');
  const img = document.createElement('img');
  const labelWelcome = document.createElement('label');
  const titleWelcome = document.createElement('h2');
  const formSingin = document.createElement('form');
  const labelMail = document.createElement('label');
  const inputEmail = document.createElement('input');
  const labelPass = document.createElement('label');
  const inputPass = document.createElement('input');
  const pError = document.createElement('p');
  const buttonSingIn = document.createElement('button');
  const divAling = document.createElement('div');
  const pSingUp = document.createElement('p');
  const aLink = document.createElement('a');
  const pGoogle = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const google = document.createElement('div');

  // ATRIBUTOS
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'login';
  titleWelcome.textContent = 'Bienvenido';
  titleWelcome.className = 'welcome';
  formSingin.className = 'container';
  formSingin.id = 'formSingIn';
  labelMail.textContent = 'Email';
  labelMail.for = 'emailSingin';
  labelMail.className = 'emailSing';
  inputEmail.type = 'email';
  inputEmail.id = 'emailsingIn';
  inputEmail.className = 'text';
  inputEmail.value = '';
  inputEmail.placeholder = 'mariaX@gmail.com';
  inputEmail.autocomplete = 'username';
  labelPass.textContent = 'Contraseña';
  labelPass.for = 'pasSingin';
  labelPass.className = 'pasSing';
  inputPass.type = 'password';
  inputPass.id = 'passingIn';
  inputPass.className = 'text';
  inputPass.value = '';
  inputPass.placeholder = '********';
  inputPass.autocomplete = 'current-password';
  pError.className = 'pErrorIn';
  buttonSingIn.textContent = 'Ingresar';
  buttonSingIn.id = 'singIn';
  buttonSingIn.className = 'sing';
  divAling.className = 'aling';
  pSingUp.textContent = '¿Aún no tienes Cuenta? ';
  pSingUp.className = 'pSingup';
  aLink.className = 'aRegister';
  aLink.href = '/register';
  aLink.textContent = ' Registrate';
  pGoogle.textContent = 'También Puedes';
  pGoogle.className = 'pGoogle';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'googleSingup';
  buttonGoogle.className = 'googlesingU';
  google.className = 'google';

  // APLICACION APPEND
  main.append(header, sectionGeneral);
  header.append(img);
  sectionGeneral.append(
    labelWelcome,
    formSingin,
    buttonSingIn,
    divAling,
    pGoogle,
    buttonGoogle,
  );
  divAling.append(pSingUp, aLink);
  labelWelcome.append(titleWelcome);
  formSingin.append(labelMail, inputEmail, labelPass, inputPass, pError, buttonSingIn);
  buttonGoogle.appendChild(google);

  formSingin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailsingIn').value;
    const password = document.getElementById('passingIn').value;
    start(email, password);
  });
  return main;
}

export default home;
