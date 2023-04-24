import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
} from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import { db } from './firebaseConfig';

// guardar post
export const postIt = (nameCock, description) => {
  addDoc(collection(db, 'postCocktailNetwork'), { nameCock, description });
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
