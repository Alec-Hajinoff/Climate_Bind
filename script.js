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
console.log("zero");
const alertTrigger = document.getElementById('liveAlertBtn');
console.log("zeroOne");
const inputs = document.querySelectorAll('input');
console.log("zeroTwo");
console.log(inputs); 
inputs.forEach(input => {
    if (input.value !== '') {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Thank you, we received your message and will be in touch soon!', 'success')
    })
} else {
    console.log("three");
    alertTrigger.addEventListener('click', () => {
        appendAlert('We need more information, please!', 'success')
    })
    console.log("four");
}
})

/*
const alertTrigger = document.getElementById('liveAlertBtn');
const inputs = document.querySelectorAll('input.form-control');
inputs.forEach(input => {
    if (input.value !== '') {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Thank you, we received your message and will be in touch soon!', 'success')
    })
}
});
*/

/*
if ((alertTrigger) && (inputs !== false)) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Thank you, we received your message and will be in touch soon!', 'success')
    })
} */