//INSERINDO ELEMENTO NO ARRAY push
let nomes = ['Ermeson', 'Jaqueline', 'Adriana', 'Luan']
nomes [4]= 'Bia'
nomes.push('Hilary')
console.log(nomes);
//metodoPUSH
//remover é o POP

//testando inserir valores e remover valor no final do array push e pop
/*let tcc = [ 'Hilary', ' Samuel', 'Bia', 'Adriana']
tcc.push('Liu')
console.log(tcc)*/
//inserir valores e remover valores no inicio do array usa shift e unshift
let tcc = [ 'Hilary', ' Samuel', 'Bia', 'Adriana']
console.log(tcc)
tcc.unshift('liu')
console.log(tcc)
delete tcc[3]
console.log(tcc)
// delete 