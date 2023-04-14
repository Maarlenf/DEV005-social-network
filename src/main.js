// Este es el punto de entrada de tu aplicacion
import home from './components/home.js';
import error from './components/error.js';
import register from './components/register.js';
// import { addAccount } from './lib/auth.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', components: home },
  { path: '/register', components: register },
  { path: '/error', components: error },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.components) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (route.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.components(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
/*
const btnGoRegister = document.getElementById('singUp');
if (btnGoRegister) {
  btnGoRegister.addEventListener('click', () => {
    navigateTo('/register');
  });
}
const btnBack = document.getElementById('back');
if (btnBack) {
  btnBack.addEventListener('click', () => {
    root.innerHTML = '';
    navigateTo('/');
  });
} */
