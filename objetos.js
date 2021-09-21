const listaCPFs = ["12465565706", "65437895432", "15849385748"]

// const cliente = ["nome", "André", "idade", 36]

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12465565706",
    email: "andre@email.com"
}

console.log(cliente.nome)
console.log(cliente.cpf.substring(0,5))
console.log(`Meu email é ${cliente.email} e tenho ${cliente.idade} anos.`)
