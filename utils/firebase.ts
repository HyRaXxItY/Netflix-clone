import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-YMrfvvDSYDgGt7B05QTdsOggV7fT_ig",
    authDomain: "noruflix.firebaseapp.com",
    projectId: "noruflix",
    storageBucket: "noruflix.appspot.com",
    databaseUrl: "https://noruflix-default-rtdb.firebaseio.com/",
    messagingSenderId: "320616647624",
    appId: "1:320616647624:web:d305f722d54f2b5cf74efd"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
