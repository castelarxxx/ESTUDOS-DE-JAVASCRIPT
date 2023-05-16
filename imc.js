let altura = parseFloat(prompt("Digite sua altura:"));
let peso = parseFloat(prompt("Digite seu peso:"));

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
  alert("Seu IMC está dentro do intervalo saudável.");
} else {
  alert("Seu IMC está fora do intervalo saudável.");
}