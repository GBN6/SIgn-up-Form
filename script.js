const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#mail');
const emailError = document.querySelector('#email-error');
const phoneNumber = document.querySelector('#phoneNumber');
const phoneNumberError = document.querySelector('#phone-number-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');
const passwordConfirm = document.querySelector('#confirmPassword');
const passwordConfirmError = document.querySelector('#password-confirm-error');


function passwordCheck(e)
{
    if (password.validity.patternMismatch)
    {
        
        const currentPassword = password.value;
        const regexCapital = /[A-Z]/g;
        const regexDigit = /[0-9]/g;
        let errorMsg = ''
        regexCapital.test(currentPassword) ? errorMsg += '' : errorMsg += 'Missing at least 1 capital letter.\n'
        regexDigit.test(currentPassword) ? errorMsg += '' : errorMsg += 'Missing at least 1 one digit.\n'
        currentPassword.length < 7 ? errorMsg += 'Password must be a least 6 characters.\n' : errorMsg += ''
        passwordError.textContent = errorMsg;
    }
    else 
    {
        passwordError.textContent = '';
    }
};




firstName.addEventListener('input', e => {
    firstName.value === '' ? firstNameError.textContent = "Please type in your first name." : firstNameError.textContent = ''
});


lastName.addEventListener('input', e => {
    lastName.value === '' ? lastNameError.textContent = "Please type in your last name." : lastNameError.textContent = ''
});

email.addEventListener('input', e => {
    email.validity.typeMismatch ? emailError.textContent = "Please type in a valid email. ex.(smith.john@gmail.com)" : emailError.textContent = ''
});

phoneNumber.addEventListener('input', e => {
    phoneNumber.validity.patternMismatch ? phoneNumberError.textContent = "Please enter in a 9 digit phone number" : phoneNumberError.textContent = '';
});

password.addEventListener('input', passwordCheck)
passwordConfirm.addEventListener('input', e => {
    passwordConfirm.value !== password.value ? passwordConfirmError.textContent = 'Password do not match' : passwordConfirmError.textContent = ''
});