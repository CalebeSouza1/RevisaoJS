const nomes = ['calebe', 'juliana', 'Ana',
 'caio', 'breno', 'rafael', 'vinicius', 'celso',
  'daniel', 'gabriel', 'jão', 'felipe', 'rafael', 'paulo', 'dyla',
'marcos', 'gilherme']
                        //0   10
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)