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

const nameInput = document.getElementById('yourName');
const emailInput = document.getElementById('yourEmail');
const yourNumber = document.getElementById('yourNumber');
const yourComments = document.getElementById('yourComments');

function validateForm() {
    console.log("1");

    if (nameInput.value === '') {
        return false;
    }
    console.log("2");
    if (emailInput.value === '') {
        return false;
    }
    console.log("3");
    if (yourNumber.value === '') {
        return false;
    }
    console.log("4");
    if (yourComments.value === '') {
        return false;
    }

    return true;
    console.log("5");
}

const alertTrigger = document.getElementById('liveAlertBtn');

alertTrigger.addEventListener('click', () => {
    console.log("6");
    if ((alertTrigger) && (validateForm())) {
        console.log("7");
        setTimeout((appendAlert('Thank you, we received your message and we will be in touch soon!', 'success'), 5000));
    }
});

