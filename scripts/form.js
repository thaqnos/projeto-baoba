const formConheca = document.getElementById('formularioConheca')
const nomeInvalido = document.getElementById('nome-invalido')
const sobrenomeInvalido = document.getElementById('sobrenome-invalido')
const telefoneInvalido = document.getElementById('telefone-invalido')
const emailInvalido = document.getElementById('email-invalido')
const textoInvalido = document.getElementById('texto-invalido')
const inputNome = document.getElementById('inputNome')
const inputSobrenome = document.getElementById('inputSobrenome')
const inputTelefone = document.getElementById('inputTelefone')
const inputEmail = document.getElementById('inputEmail')

formConheca.addEventListener('submit', function(evento){
    evento.preventDefault()


    if(inputNome.value.trim() === ""){
        nomeInvalido.textContent = 'Por favor, insira seu nome'
    } if(inputSobrenome.value.trim() === ""){
        sobrenomeInvalido.textContent = "Por favor, insira seu sobrenome"
    } if(inputTelefone.value.trim() === ""){
        telefoneInvalido.textContent = "Por favor, insira seu telefone"
    } if(inputEmail.value.trim() === ""){
        emailInvalido.textContent = "Por favor, insira seu e-mail"
    } else {
        formConheca.reset()
    }
})

inputNome.addEventListener('keydown', function(ev){
    nomeInvalido.textContent = ''
})

inputSobrenome.addEventListener('keydown', function(){
    sobrenomeInvalido.textContent = ''
})

inputTelefone.addEventListener('keydown', function(){
    telefoneInvalido.textContent = ''
})

inputEmail.addEventListener('keydown', function(){
    emailInvalido.textContent = ''
})