let fields = document.querySelectorAll('input');
fields.forEach((field) => field.addEventListener('blur', checkValid));

function checkValid(event) {
 if(event.target.value != "") {
        console.log(event.target);
        event.target.classList.add('touched');
    }
}

function setValid(...elements) {
    for(const element in elements) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    }
}

function setInvalid(...elements) {
    for(const element in elements) {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

let passwordToCheck = document.getElementById('password').value;
let checkingPassword = document.getElementById('confirm').value;
let passwordBox = document.getElementById('password');
let verificationBox = document.getElementById('confirm');
verificationBox.addEventListener('blur', checkPasswordMatch);

function checkPasswordMatch(event) {
    if(passwordToCheck === checkingPassword) {
       setValid(passwordBox, verificationBox);
    }
    else setInvalid(passwordBox, verificationBox);
}
