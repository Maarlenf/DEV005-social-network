// Este es el punto de entrada de tu aplicacion
import home from './road/home.js';
import error from './road/error.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', road: home },
  { path: '/error', road: error },
];

const defaultRoute = '/';

function navigateTo(hash) {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.road) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (route.road() === '') {
      root.remove(root.innerHTML);
    }
    root.innerHTML = route.road(navigateTo);
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
