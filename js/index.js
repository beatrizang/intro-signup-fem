const isEmpty = (cadena) => {
    return (cadena.length == 0 || cadena == ' ')?true : false;
}

function esEmail(cadena){
    let regex = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}');
    return regex.test(cadena);
}


function checkFirstName() {
    let emptyName = 'First Name cannot be empty';

    let firstName = document.getElementById('name-input').value;

    if(isEmpty(firstName)){
        document.getElementById('name-error').innerHTML = emptyName;
    }
    else{
        document.getElementById('name-error').innerHTML = '';
    }
}


function checkLastName() {
    let emptyLastName = 'Last Name cannot be empty';

    let lastName = document.getElementById('last-input').value;

    if(isEmpty(lastName)){
        document.getElementById('last-error').innerHTML = emptyLastName;
    }
    else{
        document.getElementById('last-error').innerHTML = '';
    }
}


function checkEmail() {
    let emptyEmail = 'Email cannot be empty';

    let email = document.getElementById('email-input').value;
    let notEmail = 'Looks like this is not an email'
    let emailFormat = 'email@example/com'

    if(isEmpty(email)){
        document.getElementById('email-error').innerHTML = emptyEmail;
    }
    else{
        if(!esEmail(email)){
            document.getElementById('email-input').value = emailFormat;
            document.getElementById('email-error').innerHTML = notEmail;
        }
        else{
            document.getElementById('email-error').innerHTML = '';
        }
    }
}

function checkPassword() {
    let emptyPassword = 'Password cannot be empty';

    let password = document.getElementById('password-input').value;

    if(isEmpty(password)){
        document.getElementById('password-error').innerHTML = emptyPassword;
    }
    else{
        document.getElementById('password-error').innerHTML = '';
    }
}

function checkForm(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
}