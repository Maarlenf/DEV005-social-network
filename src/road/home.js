import logo from '../image/logo.png';

function home() {
  const templateLogin = `<header>
    <img id="login" src=${logo} alt="Logo Cocktail Network" />
  </header>
  <main>
    <label id="welcome">
      <h1 class="welcome">Bienvenid@</h1>
    </label>
    <form class="container">
      <label for="email" class="email">Email</label>
      <input type="email" class="text" value="" required placeholder="mariaX@gmail.com"/>
      <label for="password" class="password">Contraseña</label>
      <input type="password" class="text" value="" minlength="6" maxlength="16" required autocomplete="current-password" placeholder="******" />
      <a href="" class="forget">¿Olvidaste tu Contraseña?</a>
      <button id="singIn" type="submit">Ingresar</button>

      <button id="singUp">Registrarse</button>
      <label for="text" class="singInG">O inicia con:</label>
      <button id="google" href="">Continuar con Google</button>
    </form>
  </main>`;

  return templateLogin;
}
export default home;
