let form = document.getElementById("applicationForm");

if (form) {

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("pnumber");

let fnameError = document.getElementById("fnameError");
let lnameError = document.getElementById("lnameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");


let namePattern = /^[A-Za-z\s]+$/;
let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let phonePattern = /^[0-9]{10,15}$/;


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



let dropdowns = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


