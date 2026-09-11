import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de horas estacionadas: ", (horasStr) => {
    let horas = parseInt(horasStr);
    
    if (isNaN(horas) || horas <= 0) {
        console.log("Error: La cantidad de horas debe ser un numero entero mayor a cero");
    } else {
        let total;
        
        if (horas === 1) {
            total = 2.00;
        } else if (horas >= 2 && horas <= 4) {
            total = horas * 1.50;
        } else {
            total = horas * 1.00;
        }
        
        console.log("--------- TICKET DE ESTACIONAMIENTO ---------");
        console.log("Horas cobradas: " + horas);
        console.log("Total a pagar: $" + total.toFixed(2));
        console.log("---------------------------------------------");
    }
    
    rl.close();
});