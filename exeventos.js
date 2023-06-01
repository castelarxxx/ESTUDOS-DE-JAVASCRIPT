//exercicios era usar 3 eventos, quando o mouse entrar no elemento a cor muda para silver, quando o usuario clicar o texto muda para 'clicou', quando o mouse sair do elemento o texto e a cor devem voltar para o originial 
let valor= document.getElementById("P1");

const mouse = () => {
   valor.style.color= "blue"
}

const clicar=() => {
   valor.innerText= "clicou"
}
const sair =() =>{
   valor.innerText = "Lorem."
   valor.style.color = "black"
};