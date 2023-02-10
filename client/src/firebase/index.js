import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBj_-NPYbkA3zzkZx7CiNtpRRWxT-k19Jg",
  authDomain: "pulsebeta-e0604.firebaseapp.com",
  projectId: "pulsebeta-e0604",
  storageBucket: "pulsebeta-e0604.appspot.com",
  messagingSenderId: "481480812683",
  appId: "1:481480812683:web:d30f4a93a486b5cc584c8e"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)