const valoresOrigin= [
    {
        produto: "Headset",
        valor: 200,
    },
    {
        produto: "Mouse",
        valor: 100,
    },
    {
        produto: "Teclado",
        valor: 300,
    },
    
    ]
    //10% valores
    let valores = valoresOrigin.map((nv) => nv.valor * 1.5);
    console.log(valoresOrigin)
    console.log(`O valor original do produto é 15% menor do que revendido, com a revenda os valores ficam ${valores}`)
   