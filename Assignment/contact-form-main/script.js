const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const queryRadios = document.querySelectorAll('input[name="query"]');

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const queryError = document.getElementById("queryError");
const consentError = document.getElementById("consentError");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  clearErrors();

  if (!firstName.value.trim()) {
    showError(firstName, firstNameError, "This field is required");
    isValid = false;
  }

  if (!lastName.value.trim()) {
    showError(lastName, lastNameError, "This field is required");
    isValid = false;
  }

  if (!email.value.trim()) {
    showError(email, emailError, "This field is required");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, emailError, "Please enter a valid email address");
    isValid = false;
  }

  let selectedQuery = false;


  for (const radio of queryRadios) {
    if (radio.checked) {
      selectedQuery = true;
      break; 
    }
  }

if (!selectedQuery) {
  queryError.textContent = "Please select a query type";
  isValid = false;
}

  if (!message.value.trim()) {
    showError(message, messageError, "This field is required");
    isValid = false;
  }

  if (!consent.checked) {
    consentError.textContent = "To submit this form, please consent to being contacted";
    isValid = false;
  }

  if (isValid) {
    form.reset();
    successMessage.hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      successMessage.hidden = true;
    }, 5000);
  }
});

function showError(input, errorElement, message) {
  input.classList.add("error-border");
  errorElement.textContent = message;
}

function clearErrors() {

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => input.classList.remove("error-border"));

  
  document.querySelectorAll(".error").forEach(error => {
    error.textContent = "";
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}