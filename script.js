const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const phoneNumber = document.querySelector('#phoneNumber');
const phoneNumberError = document.querySelector('#phone-number-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');
const passwordConfirm = document.querySelector('#confirmPassword');
const passwordConfirmError = document.querySelector('#password-confirm-error');




firstName.addEventListener('input', e => {
    firstName.value === '' ? firstNameError.textContent = "Please type in your first name." : firstNameError.textContent = ''
});


lastName.addEventListener('input', e => {
    lastName.value === '' ? lastNameError.textContent = "Please type in your last name." : lastNameError.textContent = ''
});
