const contactForm = document.getElementById('contact-form'),
        contactMessage= document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_zpfleg8','template_jj7tttj','#contact-form','ZGMTVUu1Y2AJ5riiB')
    .then(() =>{
        contactMessage.textContent = 'Message sent succesfully !!'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not sent (service error) !!'
    }
    )
}


contactForm.addEventListener('submit', sendEmail)