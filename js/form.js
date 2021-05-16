let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let textareaInput = document.getElementById("message");
let nameError = document.querySelector(".error-message-name");
let emailError = document.querySelector(".error-message-email");
let textareaError = document.querySelector(".error-message-textarea");
let form = document.querySelector(".contact-form");

//Ecouteur d'évènements sur le champ input
nameInput.addEventListener('input', () => {
  const regex1 = /^[a-zA-Z\séèàùêëôœ]+$/
  nameInput.classList.add('error-input');
  nameError.classList.add('error-active');
  if (nameInput.value === '') {
    nameError.innerHTML = "Ce champ est requis"
  } 
  else if (regex1.test(nameInput.value) === false) {
    nameError.innerHTML = "Merci d'utiliser un nom valide"
  }
  else {
    nameError.innerHTML = '';
    nameInput.classList.remove('error-input');
  }
})

emailInput.addEventListener('input', () => {
  const regex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  emailInput.classList.add('error-input');
  emailError.classList.add('error-active');
  if (emailInput.value === '') {
    emailError.innerHTML = "Ce champ est requis"
  } 
  else if (regex2.test(emailInput.value) === false) {
    emailError.innerHTML = "Merci d'utiliser une adresse email valide"
  }
  else {
    emailError.innerHTML = '';
    emailInput.classList.remove('error-input');
  }
})

textareaInput.addEventListener('input', () => {
  const regex3 = /^[a-zA-Z0-9\séèàù%¨^€£;,:.!#$%&'"(_)@ç?`-]*$/
  textareaInput.classList.add('error-input');
  textareaError.classList.add('error-active');
  if (textareaInput.value === '') {
    textareaError.innerHTML = "Ce champ est requis"
  } 
  else if (regex3.test(textareaInput.value) === false) {
    textareaError.innerHTML = "Merci d'écire du texte valide"
  }
  else {
    textareaError.innerHTML = '';
    textareaInput.classList.remove('error-input');
  }
})

//Utilisation de la méthode preventDefault() pour empêcher l'envoi du formulaire mal rempli

form.addEventListener('submit', (submit) => {
  const regex1 = /^[a-zA-Z\séèàù]+$/
  const regex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const regex3 = /^[a-zA-Z0-9\séèàù%¨^€£;,:.!#$%&'"(_)@ç?`-]*$/
  if (nameInput.value === '' || regex1.test(nameInput.value) === false) {
    nameInput.classList.add('error-input');
    nameError.classList.add('error-active');
    if (nameInput.value === '') {
      nameError.innerHTML = "Ce champ est requis"
      submit.preventDefault();
    } 
    else if (regex1.test(nameInput.value) === false) {
      nameError.innerHTML = "Le nom saisi n'est pas valide"
      submit.preventDefault();
    }
    else {
      nameError.innerHTML = '';
      nameInput.classList.remove('error-input');
    }
  }
  if (emailInput.value === '' || regex2.test(nameInput.value) === false) {
    emailInput.classList.add('error-input');
    emailError.classList.add('error-active');
    if (emailInput.value === '') {
      emailError.innerHTML = "Ce champ est requis"
      submit.preventDefault();
    } 
    else if (regex2.test(emailInput.value) === false) {
      emailError.innerHTML = "L'email saisi n'est pas valide"
      submit.preventDefault();
    }
    else {
      emailError.innerHTML = '';
      emailInput.classList.remove('error-input');
    }
  }
  if (textareaInput.value === '' || regex3.test(textareaInput.value) === false) {
    textareaInput.classList.add('error-input');
    textareaError.classList.add('error-active');
    if (textareaInput.value === '') {
      textareaError.innerHTML = "Ce champ est requis"
      submit.preventDefault();
    } 
    else if (regex3.test(textareaInput.value) === false) {
      textareaError.innerHTML = "Le texte saisi n'est pas valide"
      submit.preventDefault();
    }
    else {
      textareaError.innerHTML = '';
      textareaInput.classList.remove('error-input');
    }
  }
})