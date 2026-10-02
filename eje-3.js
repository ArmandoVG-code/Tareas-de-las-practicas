import readline from "node:readline";


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function calcLitros(d, r) {
    return d / r;
}

function calcCosto(l, pp) {
    return l * pp;
}

function calcKm(ct, d) {
    return ct / d;
}

function mostViaje(d, r, l, ct, ck) {
    console.log("\n===== RESUMEN DEL VIAJE =====");
    console.log(`Distancia: ${d} km`);
    console.log(`Rendimiento: ${r} km/l`);
    console.log(`Litros necesarios: ${l.toFixed(2)}`);
    console.log(`Costo combustible: $${ct.toFixed(2)}`);
    console.log(`Costo por km: $${ck.toFixed(2)}`);
}


r1.question("Cuantos kilometros recorrera?: ", function(d) {
    r1.question("Cuantos km recorre por litro?: ", function(r) {
        r1.question("Cual es el precio por litro?: ", function(pp) {

            d = parseFloat(d);
            r = parseFloat(r);
            pp = parseFloat(pp);

            let l = calcLitros(d, r);
            let ct = calcCosto(l, pp);
            let ck = calcKm(ct, d);

            mostViaje(d, r, l, ct, ck);

            r1.close();
        });
    });
});