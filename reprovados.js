const names = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]
// metodo filter funciona como verdadeiro o falso
const reprovados = names.filter((aluno,indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)