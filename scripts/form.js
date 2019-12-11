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

    if(nome.trim() === "" || sobrenome.trim() === "" || telefone.trim() === "" || email.trim() === ""){
        
    } else {
        formConheca.reset()
    }
    
})