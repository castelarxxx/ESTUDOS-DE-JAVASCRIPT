let codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");

let desconto;
switch(codigoPromocional) {
  case "DESC1":
    desconto = 0.05;
    alert("5% de desconto");
    break;
  case "DESC2":
    desconto = 0.1;
    alert("10% de desconto");
    break;
  case "DESC3":
    desconto = 0.15;
    alert("15% de desconto");
    break;
  case "DESC4":
    desconto = 0.2;
    alert("20% de desconto");
    break;
  case "DESC5":
    desconto = 0.25;
    alert("25% de desconto");
    break;
  default:
    alert("Erro: o código promocional informado não é válido.");
}

if (desconto !== undefined) {
  let valorOriginal = 1000; // valor original do produto (exemplo)
  let valorComDesconto = valorOriginal * (1 - desconto);
  alert("Valor original: R$ " + valorOriginal.toFixed(2));
 alert("Valor com desconto: R$ " + valorComDesconto.toFixed(2));
}
