/*Utilizando os conceitos apresentados, pergunte ao usuário. 
• Qual o nome do usuário; 
• Qual sua idade; 
• Bairro onde mora; 
• Passe o nome do usuário para todas as letras em maiúscula. 
• Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o 
resultado da soma desses números na tela. 
*/

let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")
let bairro = prompt ("Qual é o bairro aonde mora?")
let string = `Olá!, ${nome}, seja bem vindo`;
alert(string)
alert (nome.toUpperCase());
//soma de dois numeros inteiros
let num1 = prompt("Digite um número inteiro: ")
let num2 = prompt ("Digite outro número inteiro: ")

let res = parseFloat(num1) + parseFloat(num2);

alert(` A soma dos valores ${num1} e ${num2} é ${res}:`)
