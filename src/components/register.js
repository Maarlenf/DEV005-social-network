import { addAccount } from '../lib/auth';
import { loginWithGoogle } from '../lib/google';

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
  img.src = '../image/logo.png';
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
    formSingUp.reset();
  });
  buttonGoogle.addEventListener('click', () => {
    loginWithGoogle();
  });
  return main;
}
export default register;
