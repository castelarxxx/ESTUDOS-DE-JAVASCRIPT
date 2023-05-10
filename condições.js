//ESTRUTURAS CONDICIONAIS

let valorCompra = 1400;
//32polegadas se eu tiver um valor menor do que 1300
// 55 polegadas se eu tiver um valor menor do que 1500
// 75 polegadas se eu tiver um valor maior do que 2500
if (valorCompra <= 1300) {

    console.log("vou comprar 32 polegadas")

}

else if (valorCompra <= 1500) {
    console.log("Vou compar 55 polegadas")
}
else {
    console.log("Vou comprar 75 polegadas")
}
console.log("Fim do programa")

// OPERADOR TERNARIO
let testeValor = true;
let salario = 1320
let vouApraia = salario >= 1500 ? "vou a praia" : "ficar em casa"
console.log(!testeValor);
console.log(vouApraia)

//OPERADOR TERNARIO ATIVIDADE
let dinheiroG = true;
let carteira = 150
let irProJogo = carteira > 100 ? "vou ir" : "ficar em casa"
console.log(irProJogo)


//SWITCH

let pontosAluno = "ptsBonus4"

switch
(pontosAluno) {
    case "ptsBonus1":
        console.log("2.o pts")
        break;

    case "ptsBonus2":
        console.log("1,5 pts")
        break;

    case "ptsBonus3":
        console.log("1,0 pts")
        break;

    case "ptsBonus3":
        console.log("1,0 pts")
        break;

    case "ptsBonus4":
        console.log("o,5 pts")
        break;

    case "ptsBonus5":
        console.log("o,25 pts")
        break;

    default:
        console.log("Não foi aplicado pontos adicionais");
        break;

}

//Switch ATIVIDADE

let horario = 20;
let roupa = horario > 18 ? 'preta' : 'vermelha'

switch (roupa) {
case 'vermelha':
console.log('Saia de roupa vermelha');
break;
case 'preta':
console.log('Saia com a roupa Preta');
break;
default:
console.log('Fique em casa de pijama');
break;}