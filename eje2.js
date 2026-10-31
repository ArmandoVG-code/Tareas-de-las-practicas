import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarNumeros(num) {
    if (num === 1) {
        return 1;
    }

    return num + sumarNumeros(num - 1);
}

rl.question("Ingrese un numero entero positivo: ", (r) => {
    const num = Number(r);

    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        console.log("Error: Debe ingresar un numero entero positivo.");
    } else {
        const total = sumarNumeros(num);
        console.log("La sumatoria total es: " + total);
    }

    rl.close();
});