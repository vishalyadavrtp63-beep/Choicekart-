import { checkAuthState } from "./auth.js";

checkAuthState((user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  } else {
    console.log("No user is logged in.");
  }
});
