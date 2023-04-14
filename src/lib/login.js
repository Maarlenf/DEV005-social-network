import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import { app } from './firebaseConfig';

export const start = (email, password) => {
  const modific = document.querySelector('.pErrorIn');
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        modific.innerHTML = 'Correo o contraseña inválida.';
      } else if (errorCode === 'auth/user-not-found') {
        modific.innerHTML = 'Primero debes registrarte';
      }
    });
};
