const form = document.querySelector(`.form-group`)
const text = document.querySelector(`.text`)
const name = document.querySelector(`#name`)
const email = document.querySelector(`#email`)
const password = document.querySelector(`#password`)
const tryPassowrd = document.querySelector(`#trypassword`)


form.addEventListener(`submit` ,  (e) => {
    e.preventDefault();
 
    const data = {
        name:name.value,
        email:email.value,
        psw: password.value,
        tryPsw: tryPassowrd.value
    }

    if(data.psw !== data.tryPsw) {
       text.textContent = `Error`
    }else{
        text.textContent = `Success`
    }
})