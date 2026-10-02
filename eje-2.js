import readline from "node:readline";


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcSub(c, p) {
    return c * p;
}

function calcDesc(sub) {
    return sub * 0.10;
}

function calcTot(sub, d) {
    return sub - d;
}

function mostTicket(pr, c, p, sub, d, tot) {
    console.log("\n===== TICKET DE COMPRA =====");
    console.log(`Producto: ${pr}`);
    console.log(`Cantidad: ${c}`);
    console.log(`Precio: $${p}`);
    console.log(`Subtotal: $${sub}`);
    console.log(`Descuento: $${d}`);
    console.log(`Total a pagar: $${tot}`);
}



r1.question("Cual es el producto?: ", function(pr) {
    r1.question("Cuantas unidades compro?: ", function(c) {
        r1.question("Cual es el precio por unidad?: ", function(p) {

            c = parseFloat(c);
            p = parseFloat(p);

            let sub = calcSub(c, p);
            let d = calcDesc(sub);
            let tot = calcTot(sub, d);

            mostTicket(pr, c, p, sub, d, tot);

            r1.close();
        });
    });
});