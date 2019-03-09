import './styles/style.scss';

let contactButton = document.getElementById('contactButton');
let contactButtonHint = document.getElementById('contactButtonHint');
let contactTextarea = document.getElementById('contactTextarea');
let contactButtonHeading = document.getElementById('contactButtonHeading');
let typing = false;

const showContactForm = (event) => {
    if(event.key !== 'Backspace') {
        contactButton.classList.add('typing');
        contactButtonHint.classList.add('typing');
        contactTextarea.classList.add('typing');
        contactButtonHeading.classList.add('typing');
        contactTextarea.focus();
    }
}

const handleInput = (event) => {
    if(event.target.value.length === 0 && event.key === 'Backspace') {
        contactButton.classList.remove('typing');
        contactButtonHint.classList.remove('typing');
        contactTextarea.classList.remove('typing');
        contactButtonHeading.classList.remove('typing');
    }
}

contactButton.addEventListener('click', showContactForm);
contactTextarea.addEventListener('keyup', handleInput)
document.addEventListener('keydown', showContactForm);

