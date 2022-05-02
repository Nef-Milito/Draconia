//Script still under development.

let createAccountBtn = document.getElementById('newAccount-btn');
let registerBtn = document.getElementById('register-btn');
let logInForm = document.getElementById('login-form');
let signUpForm = document.getElementById('signUp-form');

submitOK = "true";

let members = [];

//Action parameters.

createAccountBtn.onclick = () => {
    logInForm.classList.add('displayNone');
    signUpForm.classList.remove('displayNone');
}

class User {
    constructor(username, firstName, lastName, email, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

function validateForm() {
    if (username.length < 3 || firstName.length <= 0 || lastName.length <= 0 || password.length < 8) {
        return false;
    }

    validateEmail();
}

function validateEmail() {
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        return false;
    }
    return (true);
}

registerBtn.onclick = (event) => {
    event.preventDefault();
    document.getElementById('createAccount').checkValidity();

    let username = document.getElementById('username').value;
    let firstName = document.getElementById('name').value;
    let lastName = document.getElementById('last name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    validateFormBoolean = validateForm();
    if (validateFormBoolean != false) {
        const user = new User(username, firstName, lastName, email, password);
        members.push(user);

        updateUserBase();
    }
}

function updateUserBase() {
    localStorage.setItem('registeredUsers', JSON.stringify(members));
}