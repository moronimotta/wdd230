const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var message = document.getElementById("password-match-message");

    if (password === confirmPassword) {
        message.innerHTML = "Passwords match";
        message.style.color = "green";
    } else {
        message.innerHTML = "Passwords do not match";
        message.style.color = "red";
    }
}


function validateEmail() {
    var email = document.getElementById("email").value;
    var emailValidationMessage = document.getElementById("email-validation-message");

    if (/^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(email)) {
        emailValidationMessage.innerHTML = "Valid BYUI email address";
        emailValidationMessage.style.color = "green";
        return true;
    } else {
        emailValidationMessage.innerHTML = "Please enter a valid BYUI email address";
        emailValidationMessage.style.color = "red";
        return false;
    }
}