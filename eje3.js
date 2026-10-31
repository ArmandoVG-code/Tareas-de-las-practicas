import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 1;
let cantidad = 0;
let subtotal = 0;

function registrarProducto() {
    if (contador > cantidad) {
        const iva = subtotal * 0.13;
        const total = subtotal + iva;

        console.log("\n----- RESUMEN DE COMPRA -----");
        console.log("Subtotal: $" + subtotal.toFixed(2));
        console.log("IVA (13%): $" + iva.toFixed(2));
        console.log("Total a pagar: $" + total.toFixed(2));

        rl.close();
        return;
    }

    rl.question("Ingrese el precio del producto " + contador + ": $", (r) => {
        const precio = Number(r);

        if (r === "" || isNaN(precio) || precio < 0) {
            console.log("Error: Ingrese un precio valido mayor o igual a cero.");
            registrarProducto();
        } else {
            subtotal += precio;
            contador++;
            registrarProducto();
        }
    });
}

rl.question("¿Cuantos productos desea registrar?: ", (r) => {
    const num = Number(r);

    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        console.log("Error: Ingrese una cantidad entera positiva.");
        rl.close();
    } else {
        cantidad = num;
        registrarProducto();
    }
});