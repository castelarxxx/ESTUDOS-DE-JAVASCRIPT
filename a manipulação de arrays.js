//laço for
for (let i= 0; i<=10 ; i++){
    console.log(`Contador: ${i}`)
}

let salaAula = ["Vitor", "Samuel", "Bruno", "Hilary", "Day"]
console.log([0])
console.log([1])
console.log([2])
console.log([3])
console.log([4])
console.log([5])

// aRRUMAR COM O METODO DE MANIPULAÇÃO DE ARRAY
///METODO FOR EACH O método forEach() executa uma determina função para cada um dos elementos de um array. 
//Ele não é executado em elementos vazios do array. A sintaxe do método é:

/*Os parâmetros entre colchetes são opcionais e cada um significa: 
• callback: é a função que será chamada para ser executada em cada elemento do array.
• currentValue: é o valor do elemento que está sendo processado no momento.
• index (opcional): O índice do elemento atual sendo processado no array.
• array (opcional): O array que forEach() está sendo aplicado.
• thisArg (opcional): Valor a ser usado como this quando executar callback.*/

//exemplos com o professor, o de cima é anotação da apostila:

const nomes =(nome, ind)=>{
    return console.log(`Olá Aluno: ${nome} está na chamada numero: ${ind}`)
}
salaAula.forEach((a, b)=> {
    nomes(a,b);
});


//outro exemplo

let cores= ["Azul", "Amarelo", "Verde"]

cores.forEach((item, num, array)=> {
    console.log(`A cor da moda é: ${item} cores mais usadas: ${num}  ! top lista de cores: ${array}`);
})

//
