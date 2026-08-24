import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { db } from "./firebase-init.js";

/* ================================
   COLLECTION NAMES
================================ */

const COLLEGES_COLLECTION = "colleges";
const COURSES_COLLECTION = "courses";
const COUNSELLING_COLLECTION = "counsellingRequests";
const HELP_COLLECTION = "helpRequests";

/* ================================
   COLLEGES
================================ */

export async function addCollege(data) {
  return await addDoc(
    collection(db, COLLEGES_COLLECTION),
    data
  );
}

export async function getColleges() {
  const snapshot = await getDocs(
    collection(db, COLLEGES_COLLECTION)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function deleteCollege(id) {
  return await deleteDoc(
    doc(db, COLLEGES_COLLECTION, id)
  );
}

/* ================================
   COURSES
================================ */

export async function addCourse(data) {
  return await addDoc(
    collection(db, COURSES_COLLECTION),
    data
  );
}

export async function getCourses() {
  const snapshot = await getDocs(
    collection(db, COURSES_COLLECTION)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function deleteCourse(id) {
  return await deleteDoc(
    doc(db, COURSES_COLLECTION, id)
  );
}

/* ================================
   COUNSELLING
================================ */

export async function addCounsellingRequest(data) {
  return await addDoc(
    collection(db, COUNSELLING_COLLECTION),
    data
  );
}

export async function getCounsellingRequests() {
  const snapshot = await getDocs(
    collection(db, COUNSELLING_COLLECTION)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function updateCounsellingStatus(id, status) {
  return await updateDoc(
    doc(db, COUNSELLING_COLLECTION, id),
    { status }
  );
}

/* ================================
   HELP REQUESTS
================================ */

export async function addHelpRequest(data) {
  return await addDoc(
    collection(db, HELP_COLLECTION),
    data
  );
}

export async function getHelpRequests() {
  const snapshot = await getDocs(
    collection(db, HELP_COLLECTION)
  );

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function updateHelpStatus(id, status) {
  return await updateDoc(
    doc(db, HELP_COLLECTION, id),
    { status }
  );
}
