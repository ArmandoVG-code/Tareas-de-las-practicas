import readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcSB(h, ph) {
    return h * ph;
}

function calcD(sb) {
    return sb * 0.03;
}

function calcSN(sb, d) {
    return sb - d;
}

function mostRec(h, ph, sb, d, sn) {
    console.log("\n===== RECIBO DE PAGO =====");
    console.log(`Horas trabajadas: ${h}`);
    console.log(`Pago por hora: $${ph}`);
    console.log(`Salario bruto: $${sb}`);
    console.log(`Descuento ISSS: $${d}`);
    console.log(`Salario neto: $${sn}`);
}



r1.question("Cuantas horas trabajo?: ", function(h) {
    r1.question("Cuanto le pagan por hora?: ", function(ph) {

        h = parseFloat(h);
        ph = parseFloat(ph);

        let sb = calcSB(h, ph);
        let d = calcD(sb);
        let sn = calcSN(sb, d);

        mostRec(h, ph, sb, d, sn);

        r1.close();
    });
});