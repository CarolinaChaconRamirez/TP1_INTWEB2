

const form = document.getElementById('form'); 
const firstName = document.getElementById('prenom');
const lastName = document.getElementById('nom');
const email = document.getElementById('courriel');
const tel = document.getElementById('telephone');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  let errorDisplay = inputControl.querySelector('.errorMessage');

  if (!errorDisplay) {
    errorDisplay = document.createElement('div'); 
    errorDisplay.classList.add('errorMessage');
    inputControl.appendChild(errorDisplay);
  }

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMessage');
  if (errorDisplay) errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateForm = () => {
  let noError = true;

  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();

  if (firstNameValue === '') {
    setError(firstName, 'Veuillez mettre votre prénom.');
    noError = false;
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === '') {
    setError(lastName, 'Veuillez mettre votre nom.');
    noError = false;
  } else {
    setSuccess(lastName);
  }

  if (emailValue === '') {
    setError(email, 'Veuillez mettre votre courriel.');
    noError = false;
  } else {
    setSuccess(email);
  }

  if (telValue === '') {
    setError(tel, 'Veuillez mettre votre numéro de téléphone.');
    noError = false;
  } else {
    setSuccess(tel);
  }

  return noError;
};

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
});
