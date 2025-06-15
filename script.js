document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [
      "Username too short❌",
      "Invali email format❌",
      "Password too short, minimum length must be 8 characters❌",
    ];

    if (username.length < 3) {
      isValid = false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
    }
    if (password.length < 8) {
      isValid = false;
    }

    feedbackDiv.style.display = "block";

    if (isValid === true) {
      feedbackDiv.innerHTML = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
