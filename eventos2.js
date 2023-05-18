/*Eventos são ações executadas quando algo acontece na página web, ou seja, é a reação 
algum estímulo ou interação em elemento HTML. Esses eventos do HTML normalmente 
chamam funções do JavaScript. Eventos HTML são coisas que o navegador pode fazer ou algo 
que o usuário pode fazer. Os principais eventos do HTML são:
Event Description
onchange Um elemento HTML é alterado.
onclick O usuário clica em um elemento HTML.
onmouseover O usuário move o mouse sobre o elemento HTML.
onmouseout O usuário tira o mouse de cima do elemento HTML.
onkeydown O usuário pressiona um Tecla do teclado.
onload O navegador termina de carregar a página.*/

// Eventos
console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};
const mouseEmCima = () => {
console.log('Mouse está em cima do título');
};