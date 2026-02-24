// Select Elements
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const footerText = document.getElementById("footerText");
const profileImage = document.getElementById("profileImage");

// Reusable Function
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.style.border = "2px solid red";
}

function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.style.border = "none";
}

// Form Validation
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    if (nameInput.value.trim().length < 3) {
        showError(nameInput, nameError, "Name must be at least 3 characters.");
        valid = false;
    } else {
        clearError(nameInput, nameError);
    }

    if (!emailInput.value.includes("@")) {
        showError(emailInput, emailError, "Enter a valid email.");
        valid = false;
    } else {
        clearError(emailInput, emailError);
    }

    if (messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, "Message must be 10+ characters.");
        valid = false;
    } else {
        clearError(messageInput, messageError);
    }

    if (valid) {
        alert("Message Sent Successfully!");
        form.reset();
    }
});

// Dark Mode
themeToggle.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode"));
});

// Load Theme + Dynamic Year
window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("theme") === "true") {
        body.classList.add("light-mode");
    }

    footerText.textContent = `© ${new Date().getFullYear()} Fahad. All Rights Reserved.`;
});

// Image Zoom
profileImage.addEventListener("click", function() {
    profileImage.style.transform =
        profileImage.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
});

// Logo Click Change Text
document.getElementById("logo").addEventListener("click", function() {
    document.getElementById("aboutText").textContent =
        "Thanks for visiting my interactive portfolio!";
});