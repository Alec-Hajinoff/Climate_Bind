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

//const inputsFilled = document.getElementByClassName('form-control')
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Thank you, we received your message and will be in touch soon!', 'success')
    })
}