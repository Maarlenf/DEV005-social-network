import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import { app } from './firebaseConfig';

export const addAccount = (email, password) => {
  const change = document.querySelector('.pError');
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/weak-password') {
        change.innerHTML = 'La constraseña ingresada es demasiado débil.';
      } else if (errorCode === 'auth/email-already-in-use') {
        change.innerHTML = 'La correo ingresado ya esta en uso.';
      } else if (errorCode === 'auth/invalid-email') {
        change.innerHTML = 'La correo ingresado no es válido';
      }
    });
};

/* const errorCode = error.code;
const errorMessage = error.message;
// console.log('Mahahahahaha', errorMessage); */
