import logo from '../image/logo.png';
import { addAccount } from '../lib/auth';

function register() {
  const main = document.createElement('main');
  const header = document.createElement('header');
  const sectionGeneral = document.createElement('section');
  const img = document.createElement('img');
  const labelRegister = document.createElement('label');
  const titleRegister = document.createElement('h2');
  const formSingUp = document.createElement('form');
  const labelmailUp = document.createElement('label');
  const inputemailUp = document.createElement('input');
  const labelpassUp = document.createElement('label');
  const inputpassUp = document.createElement('input');
  const pError = document.createElement('p');
  const buttonSingUp = document.createElement('button');
  const divAling = document.createElement('div');
  const pSingUp = document.createElement('p');
  const aLinkIn = document.createElement('a');
  const pGoogle = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const google = document.createElement('div');

  // ATRIBUTOS
  img.src = logo;
  img.alt = 'Logo Cocktail Network';
  img.className = 'login';
  titleRegister.textContent = 'Registro';
  titleRegister.className = 'welcome';
  formSingUp.className = 'container';
  formSingUp.id = 'formSingUp';
  labelmailUp.textContent = 'Email';
  labelmailUp.for = 'emailSingUp';
  labelmailUp.className = 'emailSing';
  inputemailUp.type = 'email';
  inputemailUp.id = 'emailsingUp';
  inputemailUp.className = 'text';
  inputemailUp.value = '';
  inputemailUp.placeholder = 'mariaX@gmail.com';
  inputemailUp.autocomplete = 'username';
  labelpassUp.textContent = 'Contraseña';
  labelpassUp.for = 'pasSingup';
  labelpassUp.className = 'pasSing';
  inputpassUp.type = 'password';
  inputpassUp.id = 'passingUp';
  inputpassUp.className = 'text';
  inputpassUp.value = '';
  inputpassUp.placeholder = '********';
  inputpassUp.autocomplete = 'current-password';
  pError.textContent = '';
  pError.className = 'pError';
  buttonSingUp.textContent = 'Registrar';
  buttonSingUp.id = 'singUp';
  buttonSingUp.className = 'sing';
  divAling.className = 'aling';
  pSingUp.textContent = '¿Ya tienes una cuenta?. Regresa al';
  pSingUp.className = 'pSingup';
  aLinkIn.className = 'aRegister';
  aLinkIn.href = '/';
  aLinkIn.textContent = 'Inicio';
  pGoogle.textContent = 'También Puedes';
  pGoogle.className = 'pGoogle';
  buttonGoogle.textContent = 'Continuar con Google';
  buttonGoogle.id = 'googleSingup';
  buttonGoogle.className = 'googlesingU';
  google.className = 'google';

  // ABRIR ARCHIVOS
  main.append(header, sectionGeneral);
  header.append(img);
  sectionGeneral.append(
    labelRegister,
    formSingUp,
    buttonSingUp,
    divAling,
    pGoogle,
    buttonGoogle,
  );
  divAling.append(pSingUp, aLinkIn);
  labelRegister.appendChild(titleRegister);
  formSingUp.append(labelmailUp, inputemailUp, labelpassUp, inputpassUp, pError, buttonSingUp);
  buttonGoogle.appendChild(google);

  formSingUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailsingUp').value;
    const password = document.getElementById('passingUp').value;
    addAccount(email, password);
  });
  return main;
}
export default register;
/* const register = () => {
  const section = document.createElement('div');
  const templateLogin = `<header>
    <img id="login" src=${logo} alt="Logo Cocktail Network" />
  </header>
  <main>
    <label id="welcome">
      <h2 class="welcome">Registro</h2>
    </label>
    <form class="container1">
      <label for="email" class="email">Email</label>
      <input type="email" id="emailRegister"
      class="text" value="" autocomplete = "username" placeholder="mariaX@gmail.com"/>
      <label for="password" class="password">Contraseña</label>
      <input type="password" id="pass"
      class="text" value=""  autocomplete="current-password" placeholder="******" />
      <button id="register" type="submit">Guardar</button>

      <button id="back">Regresar</button>
      <label for="text" class="singInG">O inicia con:</label>
      <button id="googleRegister" href="">Google</button>
    </form>
  </main>`;
  section.innerHTML = templateLogin;
  const form = section.querySelector('.container1');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailRegister').value;
    const password = document.getElementById('pass').value;
    addAccount(email, password);
    // console.log('jajajajja');
  });
  return section;
};
export default register; */
