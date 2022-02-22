const login_user = document.querySelector('#LoginUser')
const login_pass = document.querySelector('#LoginPass')
const login_form = document.querySelector('#LoginForm')

login_form.addEventListener('submit', (e) => {
    let messages = []
    if (login_user.value === '' || login_user.value == null) {
        messages.push('Nombre de Usuario es Requerido')
        alert('Introduzca Nombre de Usuario')
    } else if (login_pass.value === '' || login_pass.value == null) {
        messages.push('Contraseña vacia')
        alert('Introduzca su Contraseña')
    } else if (login_user.value != 'Prueba' && login_pass.value != 'Pass.word1'){
        messages.push('Error de ingreso')
        alert('Nombre de Usuario o contraseña es incorrecto')
    } else if (login_user.value === 'Prueba' && login_pass.value != 'Pass.word1'){
        messages.push('Error de ingreso')
        alert('Nombre de Usuario o contraseña es incorrecto')
    } else if (login_user.value != 'Prueba' && login_pass.value === 'Pass.word1'){
        messages.push('Error de ingreso')
        alert('Nombre de Usuario o contraseña es incorrecto')
    } else if (login_user.value === 'Prueba' && login_pass.value === 'Pass.word1'){
        messages.push('Login Exitoso')
        alert('Bienvenido') 
    }

    if (messages.length > 0) {
        e.preventDefault()
    } 
})