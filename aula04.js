//Substring e Slipt; O método substring corta a string de acordo com os índices indicados entre os parênteses ex:
const str = 'Mozilla';
console.log(str.substring(1, 3));
// Saída esperada: "oz"
console.log(str.substring(2));
// Saída esperada: "zilla

//O comando str.substring(1, 3) corta a string a partir do índice 1 até o índice 3 e o comando 
/*str.substring(2) corta a string a partir do índice 2 até o seu final.
O método split divide a string em substrings de acordo com a regra colocada entre 
parênteses. O objeto retornado por esse método é um array. Por exemplo*/
const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]

/*Substituir uma string dentro da string:O método replace substitui um pedaço específico da string por outra coisa que você 
desejar*/
// Substituir string

let mensagem = 'Venha para a Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem)

/*Remover espaços da string
O método trim remove os espaços os espaços em branco do início de o final de uma string*/
//Remover Espaços
console.clear();
let text = ' Olá Alunos do IOS! ';
console.log(text.trim());

/*Métodos de buscar em string;
s são úteis para 
programas que precisem encontrar algum valor ou padrão na sequência de caracteres 
enviada*/
/*String.indexOf(): esse método retorna o índice (posição) da primeira vez que um texto 
especificado entre os parênteses foi encontrado na string.
• String.lastIndexOf(): esse método retorna o índice da última ocorrência de um texto 
especificado entre os parênteses foi encontrado na string.
• String.search(): esse método busca um valor específico e retorna a posição inicial desse valor 
na primeira vez que ele é encontrado. Semelhante ao indexOf().
• String.startsWith(): esse método verifica se a string inicia com um valor específico. 
• String.endsWith(): esse método verifica se a string termina com um valor específico*/

// Métodos de busca en strings
console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS')); // Returns 16
console.log(frase.lastIndexOf('IOS')); // Returns 24
console.log(frase.search('IOS')); // Returns 16
console.log(frase.startsWith('S')); // Verdadeiro - retorna true
console.log(frase.startsWith('Sou')); // Verdadeiro - retorna true
console.log(frase.startsWith('a')); // Falso - retorna false
console.log(frase.endsWith('!')); // Verdadeiro - retorna true
console.log(frase.endsWith('bom!')); // Verdadeiro - retorna true
console.log(frase.endsWith('x')); // Falso - retorna false