let createAccountBtn = document.getElementById('newAccount');
let logInForm = document.getElementById('login-form');
let signUpForm = document.getElementById('signUp-form');

//Action parameters.

createAccountBtn.onclick = () => {
    logInForm.classList.add('displayNone');
    signUpForm.classList.remove('displayNone');
}