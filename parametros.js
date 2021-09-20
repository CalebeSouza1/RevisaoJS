// parâmetros de função
            //1
// function soma(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(27, 183))
// console.log(soma(378, 60))

// parâmetros x argumentos

// ordem de parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos`;
}

// console.log(nomeIdade("calebe", 26))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                            //9   
console.log(multiplica(soma(4, 5)))