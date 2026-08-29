/*
const (não pode ser reatribuida)

let
Regras:
Uma variável não pode ter
Espaços, começar com, números, caracteres especiais, palavras chaves

var (não recomendado)
*/

// let nome = 'Lucas Gabriel'
// nome = "Lucas Santos"
// console.log(nome) 

// let idade = 21
// let idade2 = "21"
// const iguais = idade == idade2
// console.log(typeof idade)
// console.log(typeof idade2)
// console.log(iguais)

// variaveis compostas
// array e objetos
// []        {}
// const listaDeFrutas = [
//     "Abacaxi", 
//     "Laranja", 
//     "Uva"
// ]
// console.log(typeof listaDeFrutas)
// console.log(listaDeFrutas)

// listaDeFrutas.push("Banana")
// console.log(listaDeFrutas)

// listaDeFrutas.shift()
// console.log(listaDeFrutas)

// listaDeFrutas.unshift("Pera")
// console.log(listaDeFrutas)

const pessoas = [25, 36, 32, 45, 66, 68, 24, 62, 53]
const fila = []
// if = se
// else = senão

/*
Loop é um ciclo de perguntas, ou seja, enquanto a condição for verdadeira, o loop vai continuar se repetindo.
for = para
*/ 
pessoas.sort()
const tamanho = pessoas.length
//1- posição variavel
//2- posição pergunta condicional
//3- posição incremento ou decremento da variavel
for(let i = 0; i < tamanho; i++){
    const resposta = pessoas[i] >= 65 
    if(resposta){
        fila.unshift(pessoas[i])
    }else{
        fila.push(pessoas[i]) 
   }
}
console.log(fila)

// Objetos 
//{}
// Dicionario

const pessoa = {
    "nome": "Lucas Gabriel",
} 

console.log(pessoa)
console.log(pessoa.nome)
pessoa.idade = 21
console.log(pessoa)
pessoa.vivo = true
console.log(pessoa)

const pessoa2 = {
    "nome": "Mauricio Brandão",
    "idade": 50,
    "vivo": true

}

console.log(pessoa2)

const pessoa3 = {
    "nome": "Thiago Pereira",
    "idade": 30,
    "vivo": true,
}
    console.log(pessoa3)

    console.log(fila)
    for(let i = 0; i < tamanho; i++){
        fila.pop()
    }

    pessoa.votos = 2
    pessoa2.votos = 5
    pessoa3.votos = 5
    console.log(fila)
    fila.push(pessoa)
    fila.push(pessoa2)
    fila.push(pessoa3)
    console.log(fila)

    console.log (fila[2])
    console.log (`Quantidade de votos: ${fila[2].votos}`)
