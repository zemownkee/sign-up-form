
let fieldsList = document.querySelectorAll('input');
let fields = Array.from(fieldsList);
fields.forEach((field) => field.addEventListener('blur', checkValid));

function checkValid(event) {
    //handle password validation first
    if(event.target.id == 'confirm') {
        checkPasswordMatch();
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
    }
}

function setInvalid(...elements) {
    for(const element of elements) {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

function checkPasswordMatch() {
    let passwordToCheck = document.getElementById('password').value;
    let checkingPassword = document.getElementById('confirm').value;
    let passwordBox = document.getElementById('password');
    let verificationBox = document.getElementById('confirm');  
    if(passwordToCheck === checkingPassword) {
       setValid(passwordBox, verificationBox);
    }
    else setInvalid(passwordBox, verificationBox);
}

function passwordStrength() {
    
}
