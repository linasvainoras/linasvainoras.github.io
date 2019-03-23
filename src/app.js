import './styles/style.scss';

let contactButton = document.getElementById('contactButton');
let contactTextarea = document.getElementById('contactTextarea');
let contactForm = document.getElementById('contactForm');
let typing = false;

const showContactForm = (event) => {
  if (!typing && event.key !== 'Backspace') {
    typing = true;
    contactButton.classList.add('typing');
    contactTextarea.focus();
  }
}

const handleInput = (event) => {
  if (event.target.value.length === 0 && event.key === 'Backspace') {
    contactButton.classList.remove('typing');
    typing = false;
  }
}

const send = (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  let formBody = [];

  for (const [key, value] of form.entries()) {
    formBody.push(`${key}=${value}`);
  };

  formBody = formBody.join("&");

  fetch('https://polar-tundra-72381.herokuapp.com/contact', {
    headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }),
    method: 'POST',
    body: formBody
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

contactButton.addEventListener('click', showContactForm);
contactTextarea.addEventListener('keyup', handleInput);
document.addEventListener('keydown', showContactForm);
contactForm.addEventListener('submit', send);

