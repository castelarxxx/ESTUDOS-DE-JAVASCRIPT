/*//Arrays são usados para armazenar múltiplos valores em uma única variável
// "BIA" "VITOR" "SAMUEL" "LEO"
let salaAula = ["BIA", "VITOR", "SAMUEL", "LEO", 5, 9, true,]
console.log(salaAula);

//meu exemplo de array
let estoquePeriféricos = ["Headset", "Mouse", "Teclado", "WebCam"]
console.log(estoquePeriféricos) // exibe os itens
console.log(estoquePeriféricos.length);//mostra o numero de itens na variável
console.log(estoquePeriféricos[3]);              // exibe 'este é x elemento'

//acessando elementos de uma array
/*var arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'*/

//Array unidimensional
//Vamos ver como acessar elementos armazenados em um array unidimensional. No arquivo, 
//main.js digite o seguinte código.
//Arrays unidimensionais
// Podemos criar array assim
const num1 = new Array(30, -1, 5, 3, 121);
// Ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];
console.log(num1);
console.log(num2);
// Acessando elementos diversos dos arrays
console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);
console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[5]}`)

////Arrays bidimensionais
console.clear();
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];
// Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`)

//meu exemplo de array  bidimensionais, pense como se fosse um array dentro do outro 
let mercado = [
    ["Pão", "Arroz", "Feijão"],
    ["Veja", "Candida", "Sabão em Pó"],
    ["Chocolate", "Danone" , "Bolacha"]]
    console.log(mercado [2][2])
// Alterando um valor do array
//moedas[2] = chama a variável e altera o valor


//Convertendo Array em String
//O método toString() converte um array em uma string

let numeros = [1, 2 , 3 , 4, 5]
console.log(numeros);
console.log(typeof numeros);
let numeros2= numeros.toString();
console.log(numeros2)
console.log(typeof numeros2)

// join()

let numeros3 = [1, 2 , 3 , 4, 5]
console.log(numeros3.join(' - '));


//tamanho da array
const frutas = ['Banana', 'Morango', 'Mamão', 'Kiwi', 'Melão'];
console.log(frutas.length);


//// Laços de arrays
const frutinhas = ['Mangas', 'Maçãs', 'Peras', 'Laranjas', 'Kiwis'];

for (let i = 0; i < frutinhas.length; i++) console.log(`Eu gosto de: ${frutinhas[i]}`)