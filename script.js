const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var wrapper = null;
const appendAlert = (message, type) => {
    if (!wrapper) {
        wrapper = document.createElement('div');
        alertPlaceholder.append(wrapper)
    }
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}


const nameInput = document.getElementById('yourName');
const emailInput = document.getElementById('yourEmail');
const yourNumber = document.getElementById('yourNumber');
const yourComments = document.getElementById('yourComments');

function validateForm() {


    if (nameInput.value === '') {
        return false;
    }

    if (emailInput.value === '') {
        return false;
    }

    if (yourNumber.value === '') {
        return false;
    }

    if (yourComments.value === '') {
        return false;
    }

    return true;

}

const alertTrigger = document.getElementById('liveAlertBtn');

alertTrigger.addEventListener('click', (event) => {

    if ((alertTrigger) && (validateForm())) {
        event.preventDefault();

        appendAlert('Thank you, we received your message and we will be in touch soon!', 'success');
    }
});

