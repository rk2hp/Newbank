// This file contains JavaScript code for the project, including functionality for the login page and redirection after successful login/signup.

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            // Perform login logic here (e.g., validate user credentials)
            // On successful login, redirect to index.html
            window.location.href = "main/index.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            // Perform signup logic here (e.g., create new user)
            // On successful signup, redirect to index.html
            window.location.href = "main/index.html";
        });
    }
});