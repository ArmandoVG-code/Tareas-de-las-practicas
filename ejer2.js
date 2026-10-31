import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCostoTotal(tarifaSeguro = 15, ...pesosPaquetes) {
    let suma = 0;

    for (let peso of pesosPaquetes) {
        suma += peso;
    }

    let total = (suma * 3.50) + tarifaSeguro;

    return total;
}

function imprimirCotizacion(cliente, totalCobro) {
    console.log("\n--- COTIZACIÓN DE ENVÍO ---");
    console.log("Cliente: " + cliente);
    console.log("Total a pagar: $" + totalCobro.toFixed(2));
}

rl.question("Ingrese el nombre del cliente: ", (nom) => {

    rl.question("Ingrese el costo del seguro (ENTER para usar $15): ", (r1) => {
        let seg;

        if (r1 === "") {
            seg = undefined;
        } else {
            seg = parseFloat(r1);
        }

        if (seg !== undefined && (isNaN(seg) || seg < 0)) {
            console.log("Costo de seguro inválido.");
            rl.close();
            return;
        }

        rl.question("Ingrese el peso del paquete 1 en kg: ", (r2) => {
            let p1 = parseFloat(r2);

            if (r2 === "" || isNaN(p1) || p1 < 0) {
                console.log("Peso inválido.");
                rl.close();
                return;
            }

            rl.question("Ingrese el peso del paquete 2 en kg: ", (r3) => {
                let p2 = parseFloat(r3);

                if (r3 === "" || isNaN(p2) || p2 < 0) {
                    console.log("Peso inválido.");
                    rl.close();
                    return;
                }

                rl.question("Ingrese el peso del paquete 3 en kg: ", (r4) => {
                    let p3 = parseFloat(r4);

                    if (r4 === "" || isNaN(p3) || p3 < 0) {
                        console.log("Peso inválido.");
                        rl.close();
                        return;
                    }

                    let total = calcularCostoTotal(seg, p1, p2, p3);

                    imprimirCotizacion(nom, total);

                    rl.close();
                });
            });
        });
    });
});