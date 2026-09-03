let password = document.getElementById("password");
let strength_label = document.getElementById("strength-label");
let strength_fill = document.getElementById("strength-fill");
let strength_bar = document.getElementById("strength-bar");

const EMPTY_LENGTH = 0;
const WEAK_LENGHT = 5;
export const MEDIUM_LENGTH = 8;

const EMPTY_VAL = 0;
const WEAK_VAL = 33;
const MEDIUM_VAL = 67;
const STRONG_VAL = 100;

export function passwordStrength() {
  const PASSWORD_VALUE = password.value;

  password = document.getElementById("password");
  strength_label = document.getElementById("strength-label");
  strength_fill = document.getElementById("strength-fill");

  // verify the length of the password
  if (
    PASSWORD_VALUE.length > EMPTY_LENGTH &&
    PASSWORD_VALUE.length <= WEAK_LENGHT
  ) {
    strength_label.textContent = "weak";
    strength_fill.classList.remove("weak", "medium", "strong");
    strength_fill.classList.add("weak");
    strength_bar.setAttribute("aria-valuenow", WEAK_VAL);
  } else if (
    PASSWORD_VALUE.length > WEAK_LENGHT &&
    PASSWORD_VALUE.length <= MEDIUM_LENGTH
  ) {
    strength_label.textContent = "medium";
    strength_fill.classList.remove("weak", "medium", "strong");
    strength_fill.classList.add("medium");
    strength_bar.setAttribute("aria-valuenow", MEDIUM_VAL);
  } else if (PASSWORD_VALUE.length > MEDIUM_LENGTH) {
    strength_label.textContent = "strong";
    strength_fill.classList.remove("weak", "medium", "strong");
    strength_fill.classList.add("strong");
    strength_bar.setAttribute("aria-valuenow", STRONG_VAL);
  }
}
