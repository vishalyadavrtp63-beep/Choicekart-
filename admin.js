import { checkAuthState } from "./auth.js";

checkAuthState((user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  console.log("Admin logged in:", user.email);
});
