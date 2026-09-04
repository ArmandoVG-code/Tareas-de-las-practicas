import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el peso del paquete en kg: ', (pesoIngresado) => {
    rl.question('Ingrese la tarifa por kg en $: ', (tarifaIngresada) => {
        
        
        let peso = parseFloat(pesoIngresado)
        let tarifa = parseFloat(tarifaIngresada)

        
        if(isNaN(peso) || isNaN(tarifa) || peso <= 0 || tarifa <= 0){
            console.log(`ERROR: INGRESE NUMEROS VALIDOS MAYORES A 0`)
        } else {
            
            let costoBase = peso * tarifa

            
            let costoTradicional = Math.round(costoBase) 
            let costoMinimo = Math.floor(costoBase)      
            let costoMaximo = Math.ceil(costoBase)      

            console.log(`============ COTIZACION DE ENVIO ============`);
            console.log(`Peso del paquete: ${peso} kg`);
            console.log(`Tarifa por kg: $${tarifa.toFixed(2)}`);
            console.log(`----------------------------------------------`);
            console.log(`Costo Base: $${costoBase.toFixed(2)}`);
            console.log(`Costo Redondeado Tradicional: $${costoTradicional.toFixed(2)}`);
            console.log(`Costo Minimo: $${costoMinimo.toFixed(2)}`);
            console.log(`Costo Maximo: $${costoMaximo.toFixed(2)}`);
            console.log(`==============================================`);
        }
        rl.close()
    });
});
