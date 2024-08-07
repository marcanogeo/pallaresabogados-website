const userNameField = document.querySelector("[name=full_name]");
const emailField = document.querySelector("[name=email]");
const subjectField = document.querySelector("[name=subject]");
const messageField = document.querySelector("[name=message]");
//const fileField = document.querySelector("[name=avatar]");

const setErrors = (message, field, isError = true) => {
    if (isError) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        setErrors(message, field);
    } else {
        setErrors("", field, false);
    }
}
const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/);
   // const regex = new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/);
    if (fieldValue.trim().length > 4 && !regex.test(fieldValue)) {
        setErrors("Por favor, ingrese un email válido", field);
    } else {
        setErrors("", field, false);
    }
}

userNameField.addEventListener("blur", (e) => validateEmptyField("Por favor, ingrese su nombre completo", e));
subjectField.addEventListener("blur", (e) => validateEmptyField("Indique el tema en el que necesita asesoria de forma breve", e));
messageField.addEventListener("blur", (e) => validateEmptyField("Explique brevemente la situación o duda a tratar", e));

emailField.addEventListener("input", validateEmailFormat);

/*
fileField.addEventListener("change", (e) => {
    const field = e.target;
    const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
    const allowedExt = ["jpg", "jpeg", "png", "gif"];
    if (!allowedExt.includes(fileExt)) {
        setErrors(`The only extensions allowed are ${allowedExt.join(", ")}`, field);
    } else {
        setErrors("", field, false);
    }
});*/
