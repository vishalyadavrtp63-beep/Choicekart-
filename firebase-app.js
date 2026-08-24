import {
  addCollege,
  getColleges,
  deleteCollege,
  addCourse,
  getCourses,
  deleteCourse,
  addCounsellingRequest,
  getCounsellingRequests,
  updateCounsellingStatus,
  addHelpRequest,
  getHelpRequests,
  updateHelpStatus
} from "./firebase-data.js";

/* ================================
   FIREBASE APP DATA
================================ */

export async function loadFirebaseData() {
  try {
    const [
      firebaseColleges,
      firebaseCourses,
      firebaseCounselling,
      firebaseHelp
    ] = await Promise.all([
      getColleges(),
      getCourses(),
      getCounsellingRequests(),
      getHelpRequests()
    ]);

    return {
      colleges: firebaseColleges,
      courses: firebaseCourses,
      counsellingRequests: firebaseCounselling,
      helpRequests: firebaseHelp
    };

  } catch (error) {
    console.error("Firebase data loading error:", error);

    return {
      colleges: [],
      courses: [],
      counsellingRequests: [],
      helpRequests: []
    };
  }
}

/* ================================
   COLLEGE
================================ */

export async function saveCollegeToFirebase(college) {
  try {
    return await addCollege(college);
  } catch (error) {
    console.error("College save error:", error);
    throw error;
  }
}

export async function removeCollegeFromFirebase(id) {
  try {
    return await deleteCollege(id);
  } catch (error) {
    console.error("College delete error:", error);
    throw error;
  }
}

/* ================================
   COURSE
================================ */

export async function saveCourseToFirebase(course) {
  try {
    return await addCourse(course);
  } catch (error) {
    console.error("Course save error:", error);
    throw error;
  }
}

export async function removeCourseFromFirebase(id) {
  try {
    return await deleteCourse(id);
  } catch (error) {
    console.error("Course delete error:", error);
    throw error;
  }
}

/* ================================
   COUNSELLING
================================ */

export async function saveCounsellingToFirebase(request) {
  try {
    return await addCounsellingRequest(request);
  } catch (error) {
    console.error("Counselling save error:", error);
    throw error;
  }
}

export async function loadCounsellingFromFirebase() {
  try {
    return await getCounsellingRequests();
  } catch (error) {
    console.error("Counselling loading error:", error);
    return [];
  }
}

export async function setCounsellingStatus(id, status) {
  try {
    return await updateCounsellingStatus(id, status);
  } catch (error) {
    console.error("Counselling status error:", error);
    throw error;
  }
}

/* ================================
   HELP
================================ */

export async function saveHelpToFirebase(request) {
  try {
    return await addHelpRequest(request);
  } catch (error) {
    console.error("Help request save error:", error);
    throw error;
  }
}

export async function loadHelpFromFirebase() {
  try {
    return await getHelpRequests();
  } catch (error) {
    console.error("Help loading error:", error);
    return [];
  }
}

export async function setHelpStatus(id, status) {
  try {
    return await updateHelpStatus(id, status);
  } catch (error) {
    console.error("Help status error:", error);
    throw error;
  }
}
