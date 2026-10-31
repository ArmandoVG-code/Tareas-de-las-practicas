import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cuentaRegresiva(num) {
    if (num === 1) {
        console.log(num);
        console.log("¡El tiempo ha terminado!");
        rl.close();
        return;
    }

    console.log(num);
    cuentaRegresiva(num - 1);
}

rl.question("Ingrese un numero entero positivo: ", (r) => {
    const num = Number(r);

    if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
        console.log("Error: Debe ingresar un numero entero positivo.");
        rl.close();
    } else {
        cuentaRegresiva(num);
    }
});