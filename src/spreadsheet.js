//mengirim pesan ke google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyGF0NrVMPG90hqgdnABL7wFc9tzl5mivg35Ll2vTCVO5dogCyjHMGVJiA1VG06V1FPCA/exec'
const form = document.forms['contact-me-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            //reset form
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})