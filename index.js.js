window.addEventListener(FontFaceSetLoadEvent)
const form = document.querySelector('#formulario')
const usuario =  document.getElementById('usuario')
const email = document.getElementById('email')
const clave = document.getElementById('clave')
const confirmeclave = document.getElementById('confirmeclave')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=>{
//capturar los valores ingresados por el usuario
const usuarioValor = usuario.value.trim()
const emailValor = email.value.trim()
const claveValor = clave.value.trim()
const confirmeclavevalor = confirmeclave.value.trim();

const valorError = (input, msje)=> {
const formControl = input.parentElement
const aviso = formControl.querySelector('p')
aviso.innerText = msje

formControl.className = 'form-control error'

}

const valorCorrecto = (input)=> {
    const formControl = input.parentElement
    formControl.className = 'form-control Correcto'
}

const validaEmail = (email)=> {
return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
const formControl = input.parentElement
formControl.className = 'form-control correcto'
};}

//validando campo usuario

if(!usuarioValor){
console.log('Rellenar este campo')
valorError(usuario, 'Rellenar este campo')
}
else{ 
valorCorrecto(usuario)
}

//validando campo email

if(!emailValor) {
valorError(email, 'Rellenar este campo')
}
else if(!validaEmail(emailValor)){
valorError(email, 'E-mail no valido')

} else {
valorCorrecto(email)}


//validando  campo clave

const er =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/
if(!claveValor){
valorError(clave, 'Rellenar este campo') }
else if(claveValor.length < 8) {
claveValor(clave, 'No debe tener mas de 8 caracteres')
} else if(!claveValor.match(er)){
valorError(clave, 'No debe tener mas de 8 caracteres')
} else{
valorCorrecto(clave)
}

//validando campo confirmar clave

if(!confirmeclavevalor){
valorError(confirmeclave, 'Confirmar clave')
//else if(claveValor !== confirmeclavevalor)  {
valorError(confirmeclave, 'La contrasena no coinciden')
} else{valorCorrecto(confirmeclave)}