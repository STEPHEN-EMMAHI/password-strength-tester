import { validateEmail } from "../model/validate-email.js";
import {
  showPasswordRules,
  showOrHidePassword,
  validatePasswordRules,
  validateConfirmPassword,
  showOrHideConfirmPassword,
} from "../model/validate-password.js";
import { submitBtn } from "../model/submit-btn.js";
import { passwordStrength } from "../model/password-strength.js";

const email = document.getElementById("email");
email.addEventListener("input", () => {
  validateEmail();
  submitBtn();
});

const password = document.getElementById("password");
password.addEventListener("focus", showPasswordRules);

const showHidePassword = document.getElementById("showHidePasswordBtn");
showHidePassword.addEventListener("click", showOrHidePassword);

password.addEventListener("input", () => {
  validatePasswordRules();
  passwordStrength();
  validateConfirmPassword();
  submitBtn();
});

const confirmPassword = document.getElementById("confirmPassword");
confirmPassword.addEventListener("input", () => {
  validateConfirmPassword();
  submitBtn();
});

const showOrHideConfirmPasswordBtn = document.getElementById(
  "showOrHideConfirmPasswordBtn",
);
showOrHideConfirmPasswordBtn.addEventListener(
  "click",
  showOrHideConfirmPassword,
);

const checkBox = document.getElementById("checkbox");
checkBox.addEventListener("change", submitBtn);

submitBtn();
