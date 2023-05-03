import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  doc,
  updateDoc,
  deleteDoc,
  orderBy,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

export const watchUser = () => {
  const user = auth.currentUser;
  const inLine = user.email;
  const cutName = inLine.indexOf('@');
  const show = inLine.substring(0, cutName);
  return show;
};

export const collectionPost = collection(db, 'postCocktailNetwork');

// creamos los llaves del post
export const postIt = (nameCock, ingredients, preparation, date, likes) => addDoc(collection(db, 'postCocktailNetwork'), {
  inLine: watchUser(),
  nameCock,
  ingredients,
  preparation,
  date,
  likes,
});

export const querySnapshot = getDocs(collectionPost);
// console.log(querySnapshot);
// creamos función de escucha inmediata para luego imprimir
export const createSanpshot = (callback) => onSnapshot(query(collectionPost, orderBy('date', 'desc')), callback);

export const countLike = (id, user) => updateDoc((doc(db, 'postCocktailNetwork', id)), { likes: arrayUnion(user) });

export const removeLike = (id, user) => updateDoc((doc(db, 'postCocktailNetwork', id)), { likes: arrayRemove(user) });

export const updatePost = (id, nameCock, ingredients, preparation) => updateDoc((doc(db, 'postCocktailNetwork', id)), {
  nameCock, ingredients, preparation,
});

export const removePost = (data) => deleteDoc(doc(db, 'postCocktailNetwork', data));

/* export const countLike = (result) => {
  const unsub = onSnapshot(q, (s) => {
    const dataCount = [];
    s.forEach((doc) => {
      const todo = doc.data();
      dataCount.push(todo.likes);
    });
    result(dataCount);
    return unsub;
  });
}; */
