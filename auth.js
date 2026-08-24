import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth } from "./firebase-init.js";

// Create new user
export async function registerUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

// Login user
export async function loginUser(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

// Logout user
export async function logoutUser() {
  return await signOut(auth);
}

// Check login status
export function checkAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}
