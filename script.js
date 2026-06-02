const form = document.getElementById("applicationForm");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("pnumber");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");


const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phonePattern = /^[0-9]{10,15}$/;


function validateFirstName() {
    if (!namePattern.test(fname.value)) {
        fnameError.textContent = "Your First name must contain letters only.";
        return false;
    }
    fnameError.textContent = "";
    return true;
}

function validateLastName() {
    if (!namePattern.test(lname.value)) {
        lnameError.textContent = "Your Last name must contain letters only.";
        return false;
    }
    lnameError.textContent = "";
    return true;
}

function validateEmail() {
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please Enter a valid email address.";
        return false;
    }
    emailError.textContent = "";
    return true;
}

function validatePhone() {
    if (!phonePattern.test(phone.value)) {
        phoneError.textContent = "Please Enter a valid phone number.";
        return false;
    }
    phoneError.textContent = "";
    return true;
}
fname.addEventListener("input", validateFirstName);
lname.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

form.addEventListener("submit", function(event) {
    if (
        !validateFirstName() ||
        !validateLastName() ||
        !validateEmail() ||
        !validatePhone()
    ) {
        event.preventDefault();
        alert("Please fix the errors before submitting.");
    }
});
