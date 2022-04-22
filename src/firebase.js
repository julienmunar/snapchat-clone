import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAc--vhoUAVZ6XFlU0RFiNDVDcRs04G0iw",
    authDomain: "snap-clone-30f8c.firebaseapp.com",
    projectId: "snap-clone-30f8c",
    storageBucket: "snap-clone-30f8c.appspot.com",
    messagingSenderId: "200383063693",
    appId: "1:200383063693:web:2bb3ac8d6f67553cc3a4c4"
  };


  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth=getAuth(app)
const storage=getStorage(app)

export {db,storage,auth}