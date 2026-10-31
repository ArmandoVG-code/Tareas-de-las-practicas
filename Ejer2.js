import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de lotes: ", (r1) => {
    let lot = parseInt(r1);

    rl.question("Ingrese la cantidad de cajas por lote: ", (r2) => {
        let caj = parseInt(r2);

        if (isNaN(lot) || isNaN(caj) || !Number.isInteger(Number(r1)) || !Number.isInteger(Number(r2)) || lot <= 0 || caj <= 0) {
            console.log("Error: ingrese números enteros mayores que cero.");
        } else {
            console.log("\n--- CONTROL DE INVENTARIO ---");

            for (let i = 1; i <= lot; i++) {
                console.log("\nLote " + i);

                for (let j = 1; j <= caj; j++) {
                    let cod = i * j * 2;

                    if (cod % 4 === 0) {
                        console.log("Caja " + j + " | Código: " + cod + " | Revisión Prioritaria ");
                    } else {
                        console.log("Caja " + j + " | Código: " + cod + " | Aprobado ");
                    }
                }
            }
        }

        rl.close();
    });
});