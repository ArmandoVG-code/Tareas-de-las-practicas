import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", (nom) => {

    rl.question("Ingrese la nota del parcial 1: ", (r1) => {
        let n1 = parseFloat(r1);

        rl.question("Ingrese la nota del parcial 2: ", (r2) => {
            let n2 = parseFloat(r2);

            rl.question("Ingrese la nota del parcial 3: ", (r3) => {
                let n3 = parseFloat(r3);

                let prom = (n1 * 0.30) + (n2 * 0.30) + (n3 * 0.40);

                console.log("\n--- REPORTE DE CALIFICACIONES ---");
                console.log("Estudiante: " + nom);
                console.log("Nota final: " + prom.toFixed(2));

                rl.close();
            });
        });
    });
});