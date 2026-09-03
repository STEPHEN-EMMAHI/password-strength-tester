import { MEDIUM_LENGTH } from "./password-strength.js";

export function submitBtn() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@gmail.com$/.test(
    email.value,
  );

  const checkBox = document.getElementById("checkbox");
  const submitButton = document.getElementById("submitBtn");

  const confirmPassword = document.getElementById("confirmPassword");
  const validateBothPasswordFields = password.value === confirmPassword.value;

  if (
    emailRegex &&
    checkBox.checked &&
    password.value !== email.value &&
    validateBothPasswordFields &&
    password.value.length >= MEDIUM_LENGTH
  ) {
    submitButton.disabled = false;
    submitButton.classList.remove("bg-red-500");
    submitButton.classList.add("bg-green-500");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("bg-green-500");
    submitButton.classList.add("bg-red-500", "text-white");
    submitButton.classList.add("lg:disabled:cursor-not-allowed");
  }
}
