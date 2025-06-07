document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;
  clearErrors();

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");
  errorDisplay.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach((el) => el.textContent = "");
  document.getElementById("successMessage").textContent = "";
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
