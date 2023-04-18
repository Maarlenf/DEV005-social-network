import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const closeSesion = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
    console.log(error);
  });
};
