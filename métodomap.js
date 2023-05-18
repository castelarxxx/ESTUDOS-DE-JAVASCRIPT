/*O método map() cria um novo array com o resultado gerado pela chamada de uma função 
para cada elemento do array*/
const valores= [
{
    produto: "Cell",
    valor: 2000,
},
{
    produto: "tv",
    valor: 1000,
},
{
    produto: "Pc",
    valor: 5000,
},

]
//10% valores
let novosValores = valores.map((nv) => nv.valor *1.1);
console.log(novosValores)
console.log(typeof valores)
console.log(valores)