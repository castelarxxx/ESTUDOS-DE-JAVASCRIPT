//criamos a função para calcular a média de um aluno
const mediaAluno = () => {
    //aqui estamos selecionando um elemento do html
 let notaT1 = document.getElementById("nota01");
 let notaT2 = document.getElementById("nota02");
 //convertendo string para number
 let notaNum1 = Number(notaT1.value)
 let notaNum2 = Number(notaT2.value)
 let res = document.getElementById("resultado")
  let resultado = (notaNum1 + notaNum2)/2 
  res.innerHTML =`Sua média é: ${resultado}`
};


