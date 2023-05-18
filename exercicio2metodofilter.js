//No ios o curso é ofertado para jovens de 15 a 29 anos, com base na idade dos candidatos recebidos, mostre no console quem iria passar na seleção:


let idadeCandidatos = [14,18,17,23,29,45];
//15 a 29 anos para ser aprovado
let alunosAprovados = idadeCandidatos.filter((idade) => {
    return idade >= 15 && idade <=29;
});

console.log(alunosAprovados);