// Este es el punto de entrada de tu aplicacion
import home from './components/home.js';
import error from './components/error.js';
import register from './components/register.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', components: home },
  { path: '/error', components: error },
  { path: '/register', components: register },
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
