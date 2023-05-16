//• Crie um programa que declare duas variáveis do tipo inteiro e exiba o resultado da 
//soma dessas variáveis. 
let num1 = prompt("Digite um número: ")
let num2 = prompt ("Digite outro número: ")

let res = parseFloat(num1) + parseFloat(num2);

alert(` A soma dos valores ${num1} e ${num2} é ${res}:`)

//Crie um programa que declare uma variável do tipo string e exiba seu conteúdo na 
//tela. 
let nome = prompt ("Qual é o seu nome?")
let string = `Olá!, ${nome}, seja bem vindo`;
alert(string);

//Crie um programa que declare uma variável do tipo booleano e atribua a ela o valor 
//"true". Em seguida, exiba o valor dessa variável na tela. 
let name = "Hilary"
let idade = 19;
let tenhoDinheiro = true;
console.log(`Olá eu sou a ${nome} e tenho ${idade} anos, tenho dinheiro para sair esse final de semana? ${tenhoDinheiro} `);

//Crie um programa que declare uma variável do tipo double e atribua a ela o valor 
//3.1415. Em seguida, exiba o valor dessa variável na tela. 
let double = 3.1415
console.log( `O valor de PI é ${double}`)