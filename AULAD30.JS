let elemento = document.querySelector("p");
elemento.style.color = "green"
//query selector sempre vai ser aplicado no primeiro elemento se for fora da classe

//elemento por classe "par1" atribuindo a classe nos paragrafos selecionados, sempre usar o ."classe"

let elemento2 = document.querySelector(".par1");
elemento2.style.color = "pink"


//elemento por ID CHAMA COM #
let elemento3 = document.querySelector("#par3");
elemento3.style.color = "blue"


//let elemento4 = (document.querySelector('p.par4').innerHTML =
//'Mudei o texto aqui');

//EVENTOS 
const cliquei = () => {
    let elemento5 = document.querySelector("#par5")
    elemento5.style.color = "red";
}



//VARIOS ELEMENTOS.
/* exemplo do professor das explicações
for (let i = 0; i <= 5; i++){
    console.log(`Contador: ${li}`);
}

let itemLista = document.querySelectorAll(".item");
itemLista[1].style.color ="silver" */


let itemLista = document.querySelectorAll("li");
for (let i = 0 ; i <= itemLista.length ; i++){
    itemLista[i].style.color = "silver"
}



//exercicio CRIAR 2 EVENTOS QUE DEVEM ALTERAR A COR, TEXTO E VOLTAR O CONTEUDO PARA O ORIGINAL 



const mouse = () => {
    let paragrafo1 = document.querySelectorAll(".par1");
    paragrafo1.style.color= "blue"
}

const clicar=() => {
    let paragrafo1 = document.querySelectorAll(".par1");
    paragrafo1.style.color = "Red"
}
