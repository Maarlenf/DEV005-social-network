// Este es el punto de entrada de tu aplicacion
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebaseConfig.js';
import home from './components/home.js';
import error from './components/error.js';
import register from './components/register.js';
import wall from './components/wall.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', components: home },
  { path: '/error', components: error },
  { path: '/register', components: register },
  { path: '/wall', components: wall },
];

const defaultRoute = '/';

export function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.components) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.append(route.components(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    navigateTo('/wall');
  } else if (window.location.pathname === '/wall' && user === null) {
    navigateTo(defaultRoute);
  } else {
    navigateTo(window.location.pathname || defaultRoute);
  }
});
