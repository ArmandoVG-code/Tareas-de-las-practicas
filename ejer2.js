import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let precios = [];
let contador = 0;

function solicitarPrecio() {
    if (contador === 6) {
        console.log("\nPRECIOS Y POSICIONES");

        for (let i = 0; i < precios.length; i++) {
            console.log("Indice " + i + ": $" + precios[i].toFixed(2));
        }

        let total = 0;

        for (let precio of precios) {
            total += precio;
        }

        console.log("\nTotal acumulado: $" + total.toFixed(2));

        console.log("\nPRODUCTOS PREMIUM");

        precios.forEach((precio) => {
            if (precio > 30) {
                console.log("Alerta: Producto premium de $" + precio.toFixed(2));
            }
        });

        rl.close();
        return;
    }

    rl.question("Ingrese el precio del articulo " + (contador + 1) + ": $", (r) => {
        const precio = Number(r);

        if (r === "" || isNaN(precio) || precio < 0) {
            console.log("Error: Ingrese un precio valido.");
            solicitarPrecio();
        } else {
            precios.push(precio);
            contador++;
            solicitarPrecio();
        }
    });
}

solicitarPrecio();