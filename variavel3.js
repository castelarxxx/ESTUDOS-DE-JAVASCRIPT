/*Crie uma variável com o seu nome; 
• Utilizando o método Insert insira o seu nome do meio, depois do seu nome em uma 
nova variável; 
• Depois utilizando o método Replace troque o seu nome do meio pelo último 
sobrenome; 
• Crie uma string para apresentar o resultado. */
let nome = "Hilary"
let sobrenome = "Castelar"
let mensagem = 'Hilary castelar';
console.log(mensagem);
let novaMensagem = mensagem.replace('castelar', 'Alves');
console.log(novaMensagem)
console.log( `Meu nome é ${nome} ${sobrenome} e se trocar meus sobrenomes fica ${novaMensagem}`)
