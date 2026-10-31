import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de departamentos: ", (r1) => {
    let dep = parseInt(r1);

    rl.question("Ingrese la cantidad de empleados por departamento: ", (r2) => {
        let emp = parseInt(r2);

        if (isNaN(dep) || isNaN(emp) || !Number.isInteger(Number(r1)) || !Number.isInteger(Number(r2)) || dep <= 0 || emp <= 0) {
            console.log("Error: ingrese números enteros mayores que cero.");
        } else {
            console.log("\n--- MATRIZ DE ASISTENCIA ---");

            for (let i = 1; i <= dep; i++) {
                console.log("\nDepartamento " + i);

                for (let j = 1; j <= emp; j++) {
                    if (i % 2 !== 0) {
                        console.log("Empleado " + j + ": Turno Mañana");
                    } else {
                        console.log("Empleado " + j + ": Turno Tarde");
                    }
                }
            }
        }

        rl.close();
    });
});