const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12465565706",
    email: "andre@email.com",
    fones:["43867594", "2737495058"],
    dependentes: [{
      nome: 'Sara',
      parentesco: 'filha',
      dataNasc:'20/02/2011'
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "06/05/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "06/05/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)