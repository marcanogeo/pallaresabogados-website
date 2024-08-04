const email = document.querySelector('[name=email]');
const username = document.querySelector('[name=full_name]');
const message = document.querySelector('[name=message]');
const subject = document.querySelector('[name=subject]');
const inputerror = document.querySelector('[class=error]');
//const $form = document.getElementById('form');
function validateinputs(e, message){
    e.preventDefault();
    const field = e.target;
    const inputvalue = e.target.value;
    const emailregex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/;
    console.log(emailregex.test(field.value));
   // const messageregex = /^[a-z0-9]+@[a-z]{2,3}$/;
   // const usernameregex = /^[a-z0-9]+@[a-z]{2,3}$/;
   // const subjectregex = /^[a-z0-9]+@[a-z]{2,3}$/;
    if(inputvalue.length === 0){
        inputvalue.classList.add('invalid');
        inputerror.innerText = message;
       // inputerror.innerText = `${field.name} es requerido.`;
    }else{
        inputvalue.classList.remove('invalid');
        inputerror.innerText = "";
    }
    return false;
}
username.addEventListener('submit', (e) => validateinputs("Por favor, agregue su nombre completo"));
email.addEventListener('submit', (e) => validateinputs ("Por favor, agregue su email"));
message.addEventListener('submit', (e) => validateinputs("Por favor, describa brevemente su duda o en qué necesita asesoria"));
subject.addEventListener('submit', (e) => validateinputs("Indique brevemente el tema a tratar"));
