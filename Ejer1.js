import readline from "node:readline"
import process from "node:process"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del estudiante: ", (nombre) => {
    rl.question("Ingrese la nota del estudiante (0 a 10): ", (notaStr) => {
        let nota = parseFloat(notaStr);
        
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Error: La nota debe ser un número entre 0.0 y 10.0");
        } else {
            let nivelDesempeño;
            
            if (nota >= 9.0 && nota <= 10.0) {
                nivelDesempeño = "Desempeño Excelente (Aprobado)";
            } else if (nota >= 6.0 && nota <= 8.9) {
                nivelDesempeño = "Desempeño Satisfactorio (Aprobado)";
            } else {
                nivelDesempeño = "Reprobado — Requiere refuerzo";
            }
            
            console.log("--------- REPORTE DE NOTA ---------");
            console.log("Estudiante: " + nombre);
            console.log("Nota: " + nota.toFixed(1));
            console.log("Nivel: " + nivelDesempeño);
            console.log("-----------------------------------");
        }
        
        rl.close();
    });
});