const listaDeChamada = ['calebe', 'juliana', 'Ana',
 'caio', 'breno', 'rafael', 'vinicius', 'celso',
  'daniel', 'gabriel', 'jão', 'felipe', 'rafael', 'paulo', 'dyla',
'marcos', 'gilherme']

//remover elemento de qq lugar da array para qq lugar da array
// listaDeChamada.splice(1, 2, 'RODRIGO')
listaDeChamada.splice(2, 0,'RODRIGO')

console.log(`Lista de chamada: ${listaDeChamada}`)