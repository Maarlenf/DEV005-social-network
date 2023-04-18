import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import { app } from './firebaseConfig';

export const start = (email, password) => new Promise((resolve, reject) => {
  const auth = getAuth();
  const pError = document.querySelector('.pErrorIn');
  signInWithEmailAndPassword(auth, email, password)
    // eslint-disable-next-line no-unused-vars
    .then((userCredential) => {
    // Signed in
      resolve(userCredential);
    // ...
    })
    .catch((error) => {
      // const errorMessage = error.message;
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        pError.textContent = 'Correo o contraseña inválida.';
      } else if (errorCode === 'auth/user-not-found') {
        pError.textContent = 'Primero debes registrarte';
      }
      reject(errorCode);
    });
});
