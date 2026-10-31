import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de filas: ", (r1) => {
    let fil = parseInt(r1);

    rl.question("Ingrese la cantidad de columnas: ", (r2) => {
        let col = parseInt(r2);

        if (isNaN(fil) || isNaN(col) || !Number.isInteger(Number(r1)) || !Number.isInteger(Number(r2)) || fil <= 0 || col <= 0) {
            console.log("Error: ingrese números enteros mayores que cero.");
        } else {
            for (let i = 1; i <= fil; i++) {
                let linea = "";

                for (let j = 1; j <= col; j++) {
                    linea += "[" + i + "," + j + "] ";
                }

                console.log(linea);
            }
        }

        rl.close();
    });
});