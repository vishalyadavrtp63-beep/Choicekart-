import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/* =========================
   FIREBASE CONFIG
========================= */

const firebaseConfig = {
    apiKey: "AIzaSyBUcPpTX19HBwDK5Thjumoohb-Ihg9vdIk",
    authDomain: "choicekart-14718.firebaseapp.com",
    projectId: "choicekart-14718",
    storageBucket: "choicekart-14718.firebasestorage.app",
    messagingSenderId: "527870176087",
    appId: "1:527870176087:web:e8e9e7915e96ad2d102c12",
    measurementId: "G-SZ3VY3FX4K"
};


/* =========================
   INITIALIZE FIREBASE
========================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


/* =========================
   MAKE AVAILABLE TO HTML
========================= */

window.firebaseAuth = auth;
window.firebaseDB = db;

window.firebaseFunctions = {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,

    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc
};

console.log("✅ ChoiceKart Firebase connected successfully");
