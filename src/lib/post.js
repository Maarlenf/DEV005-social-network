import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

export const watchUser = () => {
  const user = auth.currentUser;
  const inLine = user.email;
  return inLine;
};

// guardar post
export const postIt = (nameCock, ingredients, preparation) => {
  const user = auth.currentUser;
  const inLine = user.email;
  addDoc(collection(db, 'postCocktailNetwork'), {
    inLine, nameCock, ingredients, preparation,
  });
  // console.log(nameCock, description);
};
export const getpostIt = () => getDocs(collection(db, 'postCocktailNetwork'));

const evec = collection(db, 'postCocktailNetwork');
const q = query(evec);
export const createSnapshot = (result) => {
  const unsub = onSnapshot(q, (s) => {
    const dataList = [];
    s.forEach((doc) => {
      dataList.push(doc.data());
    });
    result(dataList);
    return unsub;
  });
};
