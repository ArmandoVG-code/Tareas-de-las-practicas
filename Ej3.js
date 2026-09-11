import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el monto de la compra ($): ", (montoStr) => {
    rl.question("Ingrese el tipo de envio (1: Normal $5.00 / 2: Express $10.00): ", (tipoStr) => {
        rl.question("¿Posee Membresia Premium? (S/N): ", (membresia) => {
            
            let subtotal = parseFloat(montoStr);
            let tipo = parseInt(tipoStr);
            let esPremium = membresia.toUpperCase() === 'S';
            
            if (isNaN(subtotal) || subtotal < 0 || (tipo !== 1 && tipo !== 2)) {
                console.log("Error: Monto invalido o tipo de envio debe ser 1 o 2");
            } else {
                let descuento = 0;
                
                if (subtotal > 150) {
                    descuento = subtotal * 0.10;
                }
                
                let costoEnvio = 0;
                
                if (subtotal >= 100 || esPremium) {
                    costoEnvio = 0.00;
                } else {
                    if (tipo === 1) {
                        costoEnvio = 5.00;
                    } else {
                        costoEnvio = 10.00;
                    }
                }
                
                let total = (subtotal - descuento) + costoEnvio;
                
                console.log("========== DESGLOSE DE COMPRA ==========");
                console.log("Subtotal:           $" + subtotal.toFixed(2));
                console.log("Descuento 10%:     -$" + descuento.toFixed(2));
                console.log("Costo de Envio:     $" + costoEnvio.toFixed(2));
                console.log("----------------------------------------");
                console.log("TOTAL A CANCELAR:   $" + total.toFixed(2));
                console.log("========================================");
            }
            
            rl.close();
        });
    });
});