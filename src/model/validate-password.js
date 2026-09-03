/* Show Password Rules Function */
export function showPasswordRules() {
  const passwordRules = document.getElementById("password-rules");

  if (passwordRules.classList.contains("hidden")) {
    passwordRules.classList.remove("hidden");
  }
}

/* Show or Hide Password Function */
export function showOrHidePassword() {
  const password = document.getElementById("password");
  const showOrHideBtn = document.getElementById("showHidePasswordBtn");

  if (password.type === "password") {
    password.type = "text";
    showOrHideBtn.textContent = "hide";
  } else if (password.type === "text") {
    password.type = "password";
    showOrHideBtn.textContent = "show";
  }
}

/* Validate Password Rules Function */
export function validatePasswordRules() {
  const password = document.getElementById("password");
  const charactersLong = document.getElementById("char-long");

  // check if password and email are the same
  const email = document.getElementById("email");
  const checkPasswordAndEmail = document.getElementById("samePasswordAndEmail");

  if (password.value === email.value) {
    checkPasswordAndEmail.classList.remove("hidden");
  } else {
    checkPasswordAndEmail.classList.add("hidden");
  }
}

/* Validate Confirm Password */
export function validateConfirmPassword() {
  // check if password and confirm password are the same
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordWarning = document.getElementById(
    "confirmPasswordWarning",
  );

  if (
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    confirmPasswordWarning.classList.remove("hidden");
    confirmPassword.classList.add("border-red-500");
  } else {
    confirmPasswordWarning.classList.add("hidden");
    confirmPassword.classList.remove("border-red-500");
  }
}

/* Show Or Hide Confirm Password */
export function showOrHideConfirmPassword() {
  const confirmPassword = document.getElementById("confirmPassword");
  const showOrHideConfirmPasswordButton = document.getElementById(
    "showOrHideConfirmPasswordBtn",
  );

  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    showOrHideConfirmPasswordButton.textContent = "hide";
  } else {
    confirmPassword.type = "password";
    showOrHideConfirmPasswordButton.textContent = "show";
  }
}
