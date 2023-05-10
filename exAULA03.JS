//criar 3 variaveis var let e const
//criar uma template string para mostrar seus valores
//redeclarar a primeira variavel de escopo global
//substituir o valor da variavel let
//reutilizar o template string para mostrar os nossos valores

var media = 7
let nota = 5
var final = (5 + 7) 
final /= 2
const aprov = 7
console.log( `Para ser aprovado o aluno necessita de ${aprov} e o aluno possui a nota de ${final}`)

var media = 8
nota = 10 
console.log( `Para ser aprovado o aluno necessita de ${media} e o aluno possui a nota de ${nota}`)

//correção//
var nome = "Ermeson"
let idade = 18;
const tenhoDinheiro= false;
console.log(`Olá eu sou o ${nome} e tenho ${idade}. reza a lenda que eu nunca tneho dinheiro, isso é verdade?${tenhoDinheiro} `);
idade = 17;
var nome = 'Samuel';
console.log()
console.log(`Olá eu sou o ${nome} e tenho ${idade}. reza a lenda que eu nunca tneho dinheiro, isso é verdade? ${tenhoDinheiro} `)