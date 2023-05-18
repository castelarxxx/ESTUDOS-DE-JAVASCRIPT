/*1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar 
um novo array contendo o dobro de cada elemento.
2 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar 
um novo array contendo apenas os números pares.
3 - Dado o array fruits = ['apple', 'banana', 'orange', 'kiwi'], utilize o método 
forEach para exibir cada fruta no console.
4 - Dado o array students = [
{ name: 'John', age: 20 },
{ name: 'Jane', age: 25 }, 
{ name: 'Mark', age: 22 }
], 
Utilize o método forEach para exibir o nome e a idade de cada aluno no 
console.
5 - Dado o array students = [
{ name: 'John', age: 20 },
{ name: 'Jane', age: 25 },
{ name: 'Mark', age: 22 }
], 
Utilize o método map para criar um novo array contendo apenas os nomes 
dos alunos */

//EXERCICIO 1
let colocação = [
{   colocação: "Candidato na posição",
    valores: 1,
},
{   colocação: "Candidato na posição",
    valores: 2,
},
{   colocação: "Candidato na posição",
    valores: 3,
},
{   colocação: "Candidato na posição",
    valores: 4,
}
]
let posição = colocação.map((nv) => nv.valores * 2.0);
    console.log(colocação)
    console.log(`Conforme a colocação passa, os candidatos pulam 2 vezes a posição ${posição}`)



    //EXERICIO 2

const numEx2 = [1, 2, 3, 4, 5]
const numEx2_2 = numEx2.filter((num => num % 2 ==0))
    console.log(numEx2_2);


   // EXERCICIO3
   let fruits = ['apple', 'banana', 'orange', 'kiwi']
   fruits.forEach((item, num, array) => {
    console.log(item, num, array)
  });


  //exercicio 4

 /* Dado o array students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 }, 
    { name: 'Mark', age: 22 }
    ], 
    Utilize o método forEach para exibir o nome e a idade de cada aluno no 
    console. */
    

    let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 }, 
    { name: 'Mark', age: 22 },
    ]; 
    students.forEach((students) =>{
        console.log(students.name + " Tem " + students.age);
    });

    let estudantes = [
        { name: 'John', age: 20 },
        { name: 'Jane', age: 25 }, 
        { name: 'Mark', age: 22 },
        ]; 
        estudantes.map((estudantes) =>{
            console.log(estudantes.name);
        });
    

 
    
