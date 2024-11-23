const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const form = document.getElementById('myForm');
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

alertTrigger.addEventListener('click', () => {
    if ((alertTrigger) && (validateForm())) {
        appendAlert('Thank you, we received your message and will be in touch soon!', 'success')

    }
});

