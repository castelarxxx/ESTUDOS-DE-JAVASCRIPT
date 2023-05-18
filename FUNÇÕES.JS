/*//SINTAXE
//function myFunc(valor1, valor2) {
    //return valor1 * valor2;

// Funções
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
   }
   let x = addNums(4, 5); // Chamada da função addNums
   console.log(x);
   let z = myFunc(4, 5); // Chamada da função myFunc
   console.log(z);
   function myFunc(num1, num2) {
    return num1 * num2;
   }
   
 */
let nota01 = 8;
let nota02 = 9;
let media = (nota01 + nota02)/2

function calMedia(nota01, nota02){
    return (nota01+nota02) /2
    
}
console.log(calMedia(nota01, nota02))



//imc
let altura = parseFloat(prompt("Digite sua altura:"));
let peso = parseFloat(prompt("Digite seu peso:"));

function calIMC(peso, altura){
    return ( peso / (altura * altura) /2)
}
console.log(calIMC(peso, altura))
