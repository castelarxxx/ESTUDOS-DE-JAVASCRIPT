//Alguns dos métodos do objeto window
/*
window.alert(`Olá, Alunos`)
prompt(`Qual é o seu nome?`)
console.log(window.alert)
console.log(window.confirm(`Concorda com os termos do ios?`))
*/
// document.title ="AulaD23";

// // Criar um elemento <h1>
// let titulo = document.createElement('H1');
// titulo.innerHTML = 'Olá alunos!';
// document.body.appendChild(titulo);


///O método createElement() cria um novo nó/elemento com um nome específico. Esse nome de 
//pode ser com letras maiúsculas ou minúscula
/*
//crie mais elementos com atributos html
let par = document.createElement("P");
par.innerHTML = 'Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus. Quibusdam vitae autem asperiores, dolores recusandae enim, consequuntur exercitationem assumenda provident maiores, minima iure harum maxime adipisci sapiente culpa. Vero?*';
document.body.appendChild(par);
*/


//Método getElementById
let titulo = document.getElementById("tituloPrin")

titulo.innerHTML = "Olá, aluno";
titulo.style.color = "red";
titulo.style.textAlign = "center";
titulo.style.backgroundColor= "grey";


//Outro método

const mudarCor= ()=>{
      let valorH2= document.getElementById("tituloSec")
      valorH2.style.color = "red"
        
}

const mudarCor2= ()=>{
      let valorH2= document.getElementById("tituloSec")
      valorH2.style.color = "blue"
        
}
