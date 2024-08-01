const email = document.getElementsByName('email');
const nameinput = document.getElementsByName('name');
const message = document.getElementsByName('message');
const subject = document.getElementsByName('subject');
const error = document.getElementsByClassName('error');
const $form = document.getElementById('form');
$form.addEventListener('submit', function (e){
    e.preventDefault();
    if(nameinput.value === '' || nameinput.value === null){
        nameinput.classList.add('invalid');
        nameinput.nextElementSibling.innerText = "Por favor ingrese su nombre y apellido";
    }else{
        nameinput.classList.remove('invalid');
        nameinput.nextElementSibling.innerText = "";
    }
    if(email.value === '' || email.value === null){
        nameinput.classList.add('invalid');
        nameinput.nextElementSibling.innerText = 'Por favor ingrese su e-mail';
    }else{
        nameinput.classList.remove('invalid');
        nameinput.nextElementSibling.innerText = "";
    }
    if(subject.value === '' || subject.value === null){
        nameinput.classList.add('invalid');
        nameinput.nextElementSibling.innerText = 'Por favor indique el asunto o tema';
    }else{
        nameinput.classList.remove('invalid');
        nameinput.nextElementSibling.innerText = "";
    }
    if(message.value === '' || message.value === null){
        nameinput.classList.add('invalid');
        nameinput.nextElementSibling.innerText = 'Por favor exprese brevemente su inquietud';
    }else{
        nameinput.classList.remove('invalid');
        nameinput.nextElementSibling.innerText = "";
    }
    return false;
});