import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", (resp) => {
    let num = parseInt(resp);

    if (resp.trim() === "" || isNaN(num) || num < 2 || !Number.isInteger(Number(resp))) {
        console.log("Error: ingrese un número entero mayor o igual a 2.");
    } else {
        let i = 2;

        while (i <= num) {
            console.log(i);
            i += 2;
        }
    }

    rl.close();
});