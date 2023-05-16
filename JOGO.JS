let numeroSecreto = parseInt(Math.random()*10)
let tentativas = 3
let chute = -1
while (tentativas > 0){
  chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if(numeroSecreto == chute) {
    alert("Acertou!")
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor.")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior.")
    tentativas = tentativas - 1
  }
}

if (tentativas == 0) { 
  alert("Suas tentativas terminaram. O número secreto era " + numeroSecreto + ".")
}