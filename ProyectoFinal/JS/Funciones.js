
/*VALIDACIONES*/

const register_name = document.querySelector('#RegName')
const register_lastname = document.querySelector('#RegLastname')
const register_birthday = document.querySelector('#RegBirth')
const register_email = document.querySelector('#RegEmail')
const register_username = document.querySelector('#RegUsername')
const register_password = document.querySelector('#RegPswd')
const register_passredux = document.querySelector('#RegPswdRepeat')
const register_image = document.querySelector('#RegPfpImage')

const register_form = document.querySelector('#RegisterForm')


register_form.addEventListener('submit', (e) => {
    let messages = []
    //Validar Nombre
    if (register_name.value === '' || register_name.value == null) {
        messages.push('Nombre es Requerido')
        alert('Introduzca su Nombre')
    } else if (!ValidarNombre(register_name.value)) {
        messages.push('Nombre invalido')
        alert('Introduzca un Nombre valido')
    } else {
        register_name.style.color = '#06691b';
    }
    //Validar Apellido
    if (register_lastname.value === '' || register_lastname.value == null) {
        messages.push('Apellido es Requerido')
        alert('Introduzca su Apellido Paterno')
    } else if (!ValidarNombre(register_lastname.value)) {
        messages.push('Apellido invalido')
        alert('Introduzca un Apellido valido')
    } else {
        register_lastname.style.color = '#06691b';
    }
    //Validar Fecha
    if (register_birthday.value === '' || register_birthday.value == null) {
        messages.push('Fecha vacia')
        alert('Introduzca su Fecha de Nacimiento')
    } else {
        register_birthday.style.color = '#06691b';
    }

    //Validar Email
    if (register_email.value === '' || register_email.value == null) {
        messages.push('Correo Electronico Vacio')
        alert('Introduzca un Correo Electronico')
    } else if (!ValidarEmail(register_email.value)) {
        messages.push('Correo Electronico invalido')
        alert('Introduzca un Correo Electronico Valido')
    } else {
        register_email.style.color = '#06691b';
    }
    //Validar Contrase??a

    if (register_password.value === '' || register_password.value == null) {
        messages.push('Contrase??a vacia')
        alert('Introduzca su Contrase??a')
    } else if (ValidarPassword(register_password.value)) {
        messages.push('Contrase??a Invalidad')
        alert('Introduzca una Contrase??a Validad. Debe tener entre 8 y 15 caracteres. Minimo 1 minuscula, 1 mayuscula, 1 numero y 1 signo de puntuacion')
    } else {
        register_password.style.color = '#06691b';
    }

    //Validar Contrase??a Repetida
    if (register_passredux.value === '' || register_passredux.value == null) {
        messages.push('Confirmacion Contrase??a vacia')
        alert('Introduzca Confirmacion de Contrase??a')
    } else if (register_passredux.value != register_password.value) {
        messages.push('Confirmacion Contrase??a Invalida')
        alert('Confirmacion de Contrase??a no coincide')
    } else {
        register_passredux.style.color = '#06691b';
    }

    if (messages.length > 0) {
        e.preventDefault()
    }
})




function ValidarPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(password);
}

function ValidarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function ValidarNombre(nombre) {
    return /^[a-zA-Z\u00C0-\u00FF]*$/.test(nombre);
}