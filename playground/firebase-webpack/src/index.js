import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  // getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  // where,
  orderBy,
  serverTimestamp,
  // getDoc,
  updateDoc,
} from "firebase/firestore";

import { firebaseConfig } from "./config";

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// queries
const q = query(
  colRef,
  // where("author", "==", "patrick rothfuss"),
  // orderBy("title", "desc")
  orderBy("createdAt")
);

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(books);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// get real time data
// onSnapshot(colRef, (snapshot) => {
//   let books = [];
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(books);
// });

// get real time query
onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// add documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset();
  });
});

// delete documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "books", deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

// get a single document
const docRef = doc(db, "books", "cjnVRz6xytlaEtZQlZM4");

// getDoc(docRef).then((doc) => {
//   console.log(doc.data(), doc.id);
// });

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// update a document
const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "books", updateBookForm.id.value);
  updateDoc(docRef, {
    title: updateBookForm.title.value,
    author: updateBookForm.author.value,
  }).then(() => {
    updateBookForm.reset();
  });
});
