import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularComision(montoVentas, porcentajeComision = 5) {
    return montoVentas * (porcentajeComision / 100);
}

rl.question("Ingrese el monto total de ventas: ", (r1) => {
    let monto = Number(r1);

    if (r1 === "" || isNaN(monto)) {
        console.log("Error: ingrese un monto válido.");
        rl.close();
        return;
    }

    rl.question("Ingrese el porcentaje de comisión (ENTER para usar 5%): ", (r2) => {
        let porc;

        if (r2 === "") {
            porc = undefined;
        } else {
            porc = Number(r2);
        }

        if (porc !== undefined && (isNaN(porc) || porc < 0)) {
            console.log("Porcentaje inválido.");
            rl.close();
            return;
        }

        let com = calcularComision(monto, porc);

        console.log("\n--- COMISIÓN POR VENTAS ---");
        console.log("Monto de ventas: $" + monto.toFixed(2));
        console.log("Porcentaje: " + (porc === undefined ? 5 : porc) + "%");
        console.log("Comisión ganada: $" + com.toFixed(2));

        rl.close();
    });
});