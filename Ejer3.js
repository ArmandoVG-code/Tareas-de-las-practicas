import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de líneas de ensamblaje: ", (r1) => {
    let lin = parseInt(r1);

    rl.question("Ingrese la cantidad de sensores por línea: ", (r2) => {
        let sen = parseInt(r2);

        if (isNaN(lin) || isNaN(sen) || !Number.isInteger(Number(r1)) || !Number.isInteger(Number(r2)) || lin <= 0 || sen <= 0) {
            console.log("Error: ingrese números enteros mayores que cero.");
        } else {
            console.log("\n--- TABLERO DE SENSORES ---");

            for (let i = 1; i <= lin; i++) {
                console.log("\nLínea de ensamblaje " + i);

                for (let j = 1; j <= sen; j++) {
                    let rend = i * j * 5;

                    if (rend >= 50) {
                        console.log("Sensor " + j + " | Rendimiento: " + rend + " | Estado: Óptimo 🚀");
                    } else if (rend >= 25) {
                        console.log("Sensor " + j + " | Rendimiento: " + rend + " | Estado: Mantenimiento Preventivo 🛠️");
                    } else {
                        console.log("Sensor " + j + " | Rendimiento: " + rend + " | Estado: Falla de Lectura ❌");
                    }
                }
            }
        }

        rl.close();
    });
});