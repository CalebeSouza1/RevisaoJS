const notas = [10, 6.5, 8, 7.5]

let somaDasNota = 0

//callback (chama de uma função)
//notas.forEach(nota => {
// somaDasNotas += nota
})
notas.forEach(nota => {
    somaDasNota += nota
})

let media = somaDasNota/notas.length

console.log(media)