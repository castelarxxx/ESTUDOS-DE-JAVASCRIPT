//se o carro for menor que 20 anos paga ipva, se não está isento. Crie 4 variaveis para cada modelo de carro
let carros1 ={
    nome1: 'Civic',
    marca1: 'Honda',
    ano1: 1995,
    cor1: 'Preto',
} 

let carros2 ={
    nome2: 'Corolla',
    marca2: 'Toyota',
    ano2: 2000,
    cor2: 'Preto',
} 
let carro3 ={
    nome3: 'XC60',
    marca3: 'Volvo',
    ano3: 2016,
    cor3: 'Branco',
} 
let carro4 ={
    nome4: 'Taycan',
    marca4: 'Porsche',
    ano4: 2020,
    cor4: 'Branco',
} 

   const {
    nome1,
    marca1,
    ano1,
    cor1,
   } =carros1

   const {
    nome2,
    marca2,
    ano2,
    cor2,
   } =carros2

   
   const {
    nome3,
    marca3,
    ano3,
    cor3,
   } =carros3

   const {
    nome4,
    marca4,
    ano4,
    cor4,
   } =carros4


   if ( ano1<= 2003){
    console.log(`Não Paga IPVA`)
   } else{
    console.log(`Paga IPVA`)
   }
   if ( ano2<= 2003){
    console.log(`Não Paga IPVA`)
   } else{
    console.log(`Paaga IPVA`)
   }
   if ( ano3<= 2003){
    console.log(`Não Paga IPVA`)
   } else{
    console.log(`Paga IPVA`)
   }
   if ( ano4<= 2003){
    console.log(`Não Paga IPVA`)
   } else{
    console.log(`Paga IPVA`)
   }