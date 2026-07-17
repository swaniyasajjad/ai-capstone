// ---------- Element references ----------
const settingsForm = document.getElementById("settingsForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");

const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");

const successMessage = document.getElementById("successMessage");

// Simple, practical email format check (not a full RFC implementation,
// but good enough to catch missing @ / domain / obvious typos).
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Shows an error message for a given field and marks it invalid
 * for assistive technology via aria-invalid.
 * @param {HTMLInputElement} inputEl
 * @param {HTMLElement} errorEl
 * @param {string} message
 */
function showError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  inputEl.setAttribute("aria-invalid", "true");
}

/**
 * Clears the error message for a given field and marks it valid.
 * @param {HTMLInputElement} inputEl
 * @param {HTMLElement} errorEl
 */
function clearError(inputEl, errorEl) {
  errorEl.textContent = "";
  inputEl.setAttribute("aria-invalid", "false");
}

/**
 * Validates the Full Name field.
 * @returns {boolean} true if valid
 */
function validateFullName() {
  const value = fullNameInput.value.trim();

  if (value === "") {
    showError(fullNameInput, fullNameError, "Full name is required.");
    return false;
  }

  clearError(fullNameInput, fullNameError);
  return true;
}

/**
 * Validates the Email field: required + format check.
 * @returns {boolean} true if valid
 */
function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    showError(emailInput, emailError, "Email address is required.");
    return false;
  }

  if (!EMAIL_PATTERN.test(value)) {
    showError(emailInput, emailError, "Please enter a valid email address.");
    return false;
  }

  clearError(emailInput, emailError);
  return true;
}

// ---------- Live validation: clear errors as soon as the user fixes input ----------
fullNameInput.addEventListener("input", validateFullName);
emailInput.addEventListener("input", validateEmail);

// ---------- Form submission ----------
settingsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Run both validators. Do not short-circuit, so both fields
  // get evaluated and show errors together.
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();

  if (!isFullNameValid || !isEmailValid) {
    successMessage.textContent = "";
    return;
  }

  // All valid: show success message and reset the form.
  successMessage.textContent = "Settings saved successfully!";
  settingsForm.reset();

  // Reset aria-invalid state after the form clears, since browsers
  // don't reset custom attributes automatically.
  fullNameInput.setAttribute("aria-invalid", "false");
  emailInput.setAttribute("aria-invalid", "false");
});