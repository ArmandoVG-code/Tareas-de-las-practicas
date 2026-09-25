import readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NomHuesp;
let CantNoches;
let TarifaNoche;
let TempReserva;

console.log("========== LIQUIDACIÓN DE HOSPEDAJE ==========");

r1.question("Ingresa el nombre del huésped: ", (resp1) => {
    NomHuesp = resp1.trim();

    r1.question("Ingresa la cantidad de noches: ", (resp2) => {
        CantNoches = parseInt(resp2);

        r1.question("Ingresa la tarifa base por noche: $", (resp3) => {
            TarifaNoche = parseFloat(resp3);

            console.log("\n========== TEMPORADA DE RESERVA ==========");
            console.log("1. Temporada Baja - Sin recargo");
            console.log("2. Temporada Media - Recargo del 15%");
            console.log("3. Temporada Alta - Recargo del 35%");

            r1.question("Selecciona una opción: ", (resp4) => {
                TempReserva = parseInt(resp4);

                let CostoNoche;
                let NomTemp;

                switch(TempReserva) {
                    case 1:
                        NomTemp = "Temporada Baja";
                        CostoNoche = TarifaNoche;
                        break;

                    case 2:
                        NomTemp = "Temporada Media";
                        CostoNoche = TarifaNoche * 1.15;
                        break;

                    case 3:
                        NomTemp = "Temporada Alta";
                        CostoNoche = TarifaNoche * 1.35;
                        break;

                    default:
                        console.log("La opción seleccionada no existe.");
                        r1.close();
                        return;
                }

                let TotalHosp = CostoNoche * CantNoches;
                let Descuento = 0;

                if(CantNoches >= 5) {
                    Descuento = TotalHosp * 0.10;
                } else {
                    Descuento = 0;
                }

                let TotalDescuento = TotalHosp - Descuento;
                let Impuesto = TotalDescuento * 0.05;
                let TotalFinal = TotalDescuento + Impuesto;
                let TotalEntero = Math.ceil(TotalFinal);

                let FechaSalida = new Date();
                FechaSalida.setDate(FechaSalida.getDate() + CantNoches);

                console.log("\n========== REPORTE DE HOSPEDAJE ==========");
                console.log("Huésped: " + NomHuesp);
                console.log("Temporada: " + NomTemp);
                console.log("Noches de hospedaje: " + CantNoches);
                console.log("Costo por noche: $" + CostoNoche.toFixed(2));
                console.log("Subtotal: $" + TotalHosp.toFixed(2));
                console.log("Descuento: $" + Descuento.toFixed(2));
                console.log("Impuesto de turismo: $" + Impuesto.toFixed(2));
                console.log("Total final: $" + TotalFinal.toFixed(2));
                console.log("Total redondeado hacia arriba: $" + TotalEntero);
                console.log("Fecha de check-out: " + FechaSalida.toLocaleDateString());
                console.log("===========================================");

                r1.close();
            });
        });
    });
});