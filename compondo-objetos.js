const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12465565706",
    email: "andre@email.com",
    fones:["43867594", "27374950"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc:"20/02/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)