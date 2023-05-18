let pessoa = {
    nome: "Hilary",
    sobreNome: "Castelar",
    idade: 19,
    endereco: {
        rua:"Avenida Doutor Wando Henrique Cardim",
        numero: "199",
    },
    escolaridade: "E.M",
};

console.log(`Olá, ${pessoa.nome} !, voce tem ${pessoa.idade} anos de idade e mora na: ${pessoa.endereco.rua}`) 


const {
 
    nome,
    idade,
    escolaridade,
    endereco: {rua}

} =pessoa;
console.log( `Olá, ${pessoa.nome}! vc tem ${pessoa.idade}, `)



//ARRAYS DE OBJETOS PAGINA 98


 const tarefas = [
   { id: "Atividade01",
desc: "Café com os clientes",
concluir: "true",
   }
   ,
   {
    id: "Atividade02",
    desc: "Reunião",
    concluir: "False",
   },
    {
     id: "Atividade03",
     desc: "Consulta no Dentista",
     concluir: "False",
    }
   
];

//console.log(tarefas[1].desc)
//console.log(tarefas[1].concluir)
//console.log(`A ${tarefas [1].desc} está concluída?: ${tarefas[1].concluir}- Descrição: ${tarefas[1].desc}` )


//JSON
console.log(typeof tarefas)
console.log(tarefas)
const texto = JSON.stringify(tarefas)
console.log(texto);
//conversão

const voltarObjeto = JSON.parse(texto);
console.log(voltarObjeto);
console.log(voltarObjeto);