import readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NomVend;
let NomProd;
let PrecioProd;
let CatProd;

console.log("========== PUNTO DE VENTA ==========");

r1.question("Ingresa el nombre del vendedor: ", (resp1) => {
    NomVend = resp1.trim();

    r1.question("Ingresa el nombre del producto: ", (resp2) => {
        NomProd = resp2.trim();

        r1.question("Ingresa el precio base del producto: $", (resp3) => {
            PrecioProd = parseFloat(resp3);

            if (isNaN(PrecioProd) || PrecioProd <= 0) {
                console.log("El precio ingresado no es válido.");
                r1.close();
                return;
            }

            console.log("\n========== CATEGORÍAS ==========");
            console.log("A. Línea Blanca - 10% de descuento");
            console.log("B. Electrónica - 5% de descuento");
            console.log("C. Mueblería - 15% de descuento");
            console.log("D. Accesorios/Varios - 0% de descuento");

            r1.question("Selecciona una categoría: ", (resp4) => {
                CatProd = resp4.toUpperCase();

                let PorcDesc;
                let NomCat;

                switch(CatProd) {
                    case "A":
                        NomCat = "Línea Blanca";
                        PorcDesc = 0.10;
                        break;

                    case "B":
                        NomCat = "Electrónica";
                        PorcDesc = 0.05;
                        break;

                    case "C":
                        NomCat = "Mueblería";
                        PorcDesc = 0.15;
                        break;

                    case "D":
                        NomCat = "Accesorios/Varios";
                        PorcDesc = 0;
                        break;

                    default:
                        console.log("La categoría seleccionada no existe.");
                        r1.close();
                        return;
                }

                let DescProd = PrecioProd * PorcDesc;
                let Subtotal = PrecioProd - DescProd;

                let Iva = Subtotal * 0.13;
                let TotalCompra = Subtotal + Iva;

                r1.question("¿Desea agregar garantía extendida? (S/N): ", (resp5) => {

                    let Garantia;

                    if(resp5.toUpperCase() === "S") {
                        Garantia = 25;
                    } else {
                        Garantia = 0;
                    }

                    let TotalFinal = TotalCompra + Garantia;
                    let CobroRed = Math.round(TotalFinal);

                    let FechaActual = new Date();
                    let FechaEmision = FechaActual.toLocaleDateString();
                    let HoraEmision = FechaActual.toLocaleString();

                    console.log("\n==========================================");
                    console.log("        FACTURA FISCAL - PUNTO DE VENTA");
                    console.log("==========================================");
                    console.log("Fecha: " + FechaEmision);
                    console.log("Fecha y hora: " + HoraEmision);
                    console.log("------------------------------------------");
                    console.log("Vendedor: " + NomVend);
                    console.log("Producto: " + NomProd);
                    console.log("Categoría: " + NomCat);
                    console.log("Precio base: $" + PrecioProd.toFixed(2));
                    console.log("Descuento: $" + DescProd.toFixed(2));
                    console.log("Subtotal: $" + Subtotal.toFixed(2));
                    console.log("IVA (13%): $" + Iva.toFixed(2));
                    console.log("Garantía extendida: $" + Garantia.toFixed(2));
                    console.log("------------------------------------------");
                    console.log("Total a pagar: $" + TotalFinal.toFixed(2));
                    console.log("Cobro aproximado: $" + CobroRed);
                    console.log("==========================================");

                    r1.close();
                });
            });
        });
    });
});