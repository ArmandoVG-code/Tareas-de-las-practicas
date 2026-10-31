import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inventario = ["Teclado", "Mouse", "Monitor"];

console.log("Inventario inicial:", inventario);

rl.question("Ingrese un producto para agregar al final: ", (p1) => {
    inventario.push(p1);
    console.log("Despues de push():", inventario);

    rl.question("Ingrese un producto para agregar al inicio: ", (p2) => {
        inventario.unshift(p2);
        console.log("Despues de unshift():", inventario);

        inventario.pop();
        console.log("Despues de pop():", inventario);

        inventario.shift();
        console.log("Despues de shift():", inventario);

        rl.question("Ingrese el producto para reemplazar el indice 1: ", (p3) => {
            inventario.splice(1, 1, p3);
            console.log("Despues de splice():", inventario);

            let lista = inventario.slice(0, 2);

            console.log("Sublista con slice():", lista);
            console.log("Inventario final:", inventario);

            rl.close();
        });
    });
});