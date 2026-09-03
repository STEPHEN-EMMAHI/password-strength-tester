/* Validate Email Function */
export function validateEmail() {
  const email = document.getElementById("email");
  const emailRegex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@gmail.com$/.test(
    email.value,
  );

  if (emailRegex) {
    email.classList.remove("border-red-500");
  } else {
    email.classList.add("border-red-500");
  }

  // check if password is the same as email
  const checkPasswordAndEmail = document.getElementById("samePasswordAndEmail");
  const password = document.getElementById("password");

  if (email.value === password.value) {
    checkPasswordAndEmail.classList.remove("hidden");
    password.classList.add("border-red-500");
  } else {
    checkPasswordAndEmail.classList.add("hidden");
    password.classList.remove("border-red-500");
  }
}
