import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas notas desea ingresar? ", async (resp) => {
    let cant = Number(resp);

    if (resp.trim() === "" || !Number.isInteger(cant) || cant <= 0) {
        console.log("Ingrese una cantidad válida.");
        rl.close();
        return;
    }

    let suma = 0;

    for (let i = 1; i <= cant; i++) {
        let nota = await new Promise((res) => {
            rl.question("Ingrese la nota " + i + ": ", res);
        });

        let n = parseFloat(nota);

        if (nota.trim() === "" || !Number.isFinite(n) || n < 0 || n > 10) {
            console.log("Nota inválida. Intente nuevamente.");
            i--;
        } else {
            suma += n;
        }
    }

    let prom = suma / cant;

    console.log("Suma total: " + suma.toFixed(2));
    console.log("Promedio final: " + prom.toFixed(2));

    rl.close();
});