import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  // doc,
  // updateDoc,
  // deleteDoc,
  orderBy,
  // arrayUnion,
  // arrayRemove,
} from 'firebase/firestore';
import { db, auth } from './firebaseConfig';

export const watchUser = () => {
  const user = auth.currentUser;
  console.log(user);
  const inLine = user.email;
  console.log(inLine);
  return inLine;
};

export const collectionPost = collection(db, 'postCocktailNetwork');
console.log(collectionPost);

// creamos los llaves del post
export const postIt = (nameCock, ingredients, preparation, date) => addDoc(collection(db, 'postCocktailNetwork'), {
  inLine: watchUser(),
  nameCock,
  ingredients,
  preparation,
  date,
});

export const querySnapshot = getDocs(collectionPost);
// creamos función de escucha inmediata para luego imprimir
export const createSanpshot = (callback) => onSnapshot(query(collectionPost, orderBy('date', 'desc')), callback);

// export const countLike = (id, user) => updateDoc(doc(db, 'postCocktailNetwork', id), {
//  likes: arrayUnion(user),
// });

/* xport const deletePost = (docRef) => deleteDoc(doc(db, 'postCocktailNetwork', docRef));

export const updatePost = (docRef, data) => updateDoc(docRef, data);

export const removeLike = (id, user) => updateDoc(doc(db, 'postCocktailNetwork', id), {
  likes: arrayRemove(user),
}); */
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
