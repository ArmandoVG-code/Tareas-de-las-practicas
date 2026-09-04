import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el nombre completo del estudiante: ', (nombreCompleto) => {
    rl.question('Ingrese el año de nacimiento: ', (anioNacimiento) => {
        
       
        let nombreLimpio = nombreCompleto.trim();
        
      
        let nombreMayus = nombreLimpio.toUpperCase();
        
 
        let partes = nombreLimpio.split(" ");
        let primerNombre = partes[0];
        
     
        let cantidadLetras = nombreLimpio.length;
        
       
        let primeras3 = primerNombre.slice(0, 3).toUpperCase();
        let ultimos2Anio = anioNacimiento.slice(-2);
        let codigoUsuario = primeras3 + ultimos2Anio + "-ESTUDIANTE";

        
        console.log(`============ DATOS DEL ESTUDIANTE ============`);
        console.log(`Nombre formateado: ${nombreMayus}`);
        console.log(`Cantidad de caracteres: ${cantidadLetras}`);
        console.log(`Codigo de Usuario: ${codigoUsuario}`);
        
        rl.close();
    });
});