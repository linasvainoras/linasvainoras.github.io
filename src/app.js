import './styles/style.scss';

let contactButton = document.getElementById('contactButton');
let contactTextarea = document.getElementById('contactTextarea');

const showContactForm = (event) => {
    if(event.key !== 'Backspace') {
        contactButton.classList.add('typing');
        contactTextarea.focus();
    }
}

const handleInput = (event) => {
    if(event.target.value.length === 0 && event.key === 'Backspace') {
        contactButton.classList.remove('typing');
    }
}

contactButton.addEventListener('click', showContactForm);
contactTextarea.addEventListener('keyup', handleInput)
document.addEventListener('keydown', showContactForm);

