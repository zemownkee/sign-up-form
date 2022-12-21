
let fieldsList = document.querySelectorAll('input');
let fields = Array.from(fieldsList);
fields.forEach((field) => field.addEventListener('blur', checkValid));

function checkValid(event) {
    //handle password validation first
    const label = event.target.previousElementSibling;
    if(event.target.id == 'confirm' || event.target.id == 'password') {
        checkPasswordMatch();
    }
    else if(event.target.value == '' && event.target.required == true) {
        label.classList.add('empty');
    }
    else if(event.target.value != "" && event.target.validity.valid == true) {
        setValid(event.target);
    }
    else if(event.target.value != "" && event.target.validity.valid == false) {
        setInvalid(event.target);
    }
    else if (event.target.value == "" && event.target.required == true) {
        setInvalid(event.target);
    }
}

//pass DOM elements as arguments to set styles.
function setValid(...elements) {
    for(const element of elements) {
        element.classList.add('valid');
        element.classList.remove('invalid');
        element.previousElementSibling.classList.remove('empty');
    }
}

function setInvalid(...elements) {
    for(const element of elements) {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

function checkPasswordMatch() {
    // set document references
    let passwordToCheck = document.getElementById('password').value;
    let checkingPassword = document.getElementById('confirm').value;
    let passwordBox = document.getElementById('password');
    let verificationBox = document.getElementById('confirm');  
    let passwordLabel = document.querySelector('label[for="password"]');

    //check values entered against each other
    if(verificationBox.validity.valid == false) {
        passwordLabel.classList.add('too-short');
    }
    else if(passwordToCheck === checkingPassword) {
        setValid(passwordBox, verificationBox);
        passwordLabel.classList.remove('no-match');
        passwordLabel.classList.remove('too-short');
    }
    else {
        setInvalid(passwordBox, verificationBox);
        passwordLabel.classList.add('no-match');
        passwordLabel.classList.remove('too-short');
    }
}