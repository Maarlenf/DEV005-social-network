function error() {
  // CREANDO NODOS
  const section = document.createElement('div');
  const img = document.createElement('img');
  const textError = document.createElement('h2');
  const buttonHome = document.createElement('a');

  // ATRIBUTOS
  section.className = 'error';
  img.src = '../image/logo.png';
  img.alt = 'Logo Cocktail Network';
  img.className = 'login';
  textError.textContent = 'Página no encontrada. Por favor dirígete a la página de';
  textError.className = 'welcome';
  buttonHome.textContent = 'Inicio';
  buttonHome.className = 'aHome';
  buttonHome.href = '/';

  // INSERTAR NODOS
  section.append(img, textError, buttonHome);
  return section;
}
export default error;
