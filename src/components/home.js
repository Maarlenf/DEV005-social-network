import { start } from '../lib/login';
import { loginWithGoogle } from '../lib/google.js';

// CREACION DE NODOS
function home() {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const sectionGeneral = document.createElement('div');
  const divContainer = document.createElement('div');
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
  sectionGeneral.className = 'sectionGeneral';
  divContainer.className = 'divContainer';
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'login';
  titleWelcome.textContent = 'Bienvenidos';
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
  aLink.textContent = ' Regístrate';
  pGoogle.textContent = 'También Puedes';
  pGoogle.className = 'pGoogle';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'googleSingup';
  buttonGoogle.className = 'googlesingU';
  google.className = 'google';

  // APLICACION APPEND
  main.append(header, sectionGeneral);
  sectionGeneral.append(divContainer);
  header.append(img);
  divContainer.append(
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
    formSingin.reset();
  });
  buttonGoogle.addEventListener('click', () => {
    loginWithGoogle();
  });

  return main;
}
export default home;

/* const home = () => {
  const section = document.createElement('div');

  const templateLogin = `<header>
    <img id="login" src=${logo} alt="Logo Cocktail Network" />
  </header>
  <main>
    <label id="welcome">
      <h1 class="welcome">Bienvenid@</h1>
    </label>
    <form class="container">
      <label for="email" class="email">Email</label>
      <input type="email" id="email" class="text" value="" autocomplete = "username"
      placeholder="mariaX@gmail.com"/>
      <label for="password" class="password">Contraseña</label>
      <input type="password" id="password" class="text" value=""
      autocomplete="current-password" placeholder="******" />
      <a href="" class="forget">¿Olvidaste tu Contraseña?</a>
      <button id="singIn" type="submit">Ingresar</button>

      <button id= "register">Registrarse</button>
      <label for="text" class="singInG">O inicia con:</label>
      <button id="google" href="">Google</button>
    </form>
  </main>`;
  section.innerHTML = templateLogin;

  const form = section.querySelector('.container');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    start(email, password);
  });
  return section;
};
export default home; */
