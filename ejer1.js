import readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NomCli;
let Vehiculo;
let ValorAuto;
let TipoVeh;

console.log("========== COTIZACIÓN DE SEGURO ==========");

r1.question("Ingresa el nombre completo del cliente: ", (resp1) => {
    NomCli = resp1.trim();

    r1.question("Ingresa la marca/modelo del vehículo: ", (resp2) => {
        Vehiculo = resp2.trim();

        r1.question("Ingresa el monto base estimado del auto: $", (resp3) => {
            ValorAuto = parseFloat(resp3);

            if (isNaN(ValorAuto) || ValorAuto <= 0) {
                console.log("El valor del auto no es válido.");
                r1.close();
                return;
            }

            console.log("\n========== TIPO DE VEHÍCULO ==========");
            console.log("1. Sedán - Prima del 5%");
            console.log("2. SUV - Prima del 8%");
            console.log("3. Pick-up / Camioneta - Prima del 12%");

            r1.question("Selecciona una opción: ", (resp4) => {
                TipoVeh = parseInt(resp4);

                let PrimaAnual;
                let TipoAuto;

                switch(TipoVeh) {
                    case 1:
                        TipoAuto = "Sedán";
                        PrimaAnual = ValorAuto * 0.05;
                        break;

                    case 2:
                        TipoAuto = "SUV";
                        PrimaAnual = ValorAuto * 0.08;
                        break;

                    case 3:
                        TipoAuto = "Pick-up / Camioneta";
                        PrimaAnual = ValorAuto * 0.12;
                        break;

                    default:
                        console.log("La opción seleccionada no existe.");
                        r1.close();
                        return;
                }

                let FechaCot = new Date().toLocaleString();

                console.log("\n========== REPORTE DE COTIZACIÓN ==========");
                console.log("Fecha y hora: " + FechaCot);
                console.log("Cliente: " + NomCli);
                console.log("Vehículo: " + Vehiculo);
                console.log("Tipo de vehículo: " + TipoAuto);
                console.log("Valor del vehículo: $" + ValorAuto.toFixed(2));
                console.log("Prima anual: $" + PrimaAnual.toFixed(2));
                console.log("Total anual: $" + PrimaAnual.toFixed(2));
                console.log("===========================================");

                r1.close();
            });
        });
    });
});