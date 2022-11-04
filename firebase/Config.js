import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAyp-kupRf0yd7wVXWxf8jS8JGq5KzlCQM",
    authDomain: "todo-d06a5.firebaseapp.com",  
    projectId: "todo-d06a5",  
    storageBucket: "todo-d06a5.appspot.com",  
    messagingSenderId: "753629713172",  
    appId: "1:753629713172:web:ef2771a10f65b7f377a801"
  };

initializeApp(firebaseConfig)

const firestore = getFirestore()

const TODOS = 'todos'

export {
    firestore,
    collection,
    addDoc,
    TODOS,
    query,
    onSnapshot,
    getAuth,
    signInWithEmailAndPassword,
    doc,
    deleteDoc, 
    updateDoc,
}
  