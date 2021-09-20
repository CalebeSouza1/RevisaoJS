const alunos = ['joão', 'Juliana', 'Caio', 'Ana']
                                //3 
const mediaDosAlunos = [10, 7, 9, 6]

//includes -> booleano
//indexOf  -> 3

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNta = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                //[0][3]
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
         return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNta("Ana"))