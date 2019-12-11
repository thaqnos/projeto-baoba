const formConheca = document.getElementById('formularioConheca')
const nomeInvalido = document.getElementById('nome-invalido')
const sobrenomeInvalido = document.getElementById('sobrenome-invalido')
const telefoneInvalido = document.getElementById('telefone-invalido')
const emailInvalido = document.getElementById('email-invalido')
const textoInvalido = document.getElementById('texto-invalido')

formConheca.addEventListener('submit', function(evento){
    evento.preventDefault()

    const inputNome = document.getElementById('inputNome').value
    const inputSobrenome = document.getElementById('inputSobrenome').value
    const inputTelefone = document.getElementById('inputTelefone').value
    const inputEmail = document.getElementById('inputEmail').value

    if(inputNome.trim() === ""){
        nomeInvalido.textContent = 'Por favor, insira seu nome'
    } if(inputSobrenome.trim() === ""){
        sobrenomeInvalido.textContent = "Por favor, insira seu sobrenome"
    } if(inputTelefone.trim() === ""){
        telefoneInvalido.textContent = "Por favor, insira seu telefone"
    } if(inputEmail.trim() === ""){
        emailInvalido.textContent = "Por favor, insira seu e-mail"
    } else {
        formConheca.reset()
    }
})