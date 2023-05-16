let idadeUs = prompt("Qual é a sua idade?");
idadeUs = Number(idadeUs);
if (idadeUs < 18) {
  alert("Você é menor de idade");
} else if (idadeUs >= 18 && idadeUs < 60) {
  alert("Você é um adulto");
} else {
  alert("Você é um idoso.");
}