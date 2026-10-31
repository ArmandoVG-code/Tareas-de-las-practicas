import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tieneLongitudValida = (pass) => pass.length >= 8;

function registrarUsuario(user, pass) {
    if (tieneLongitudValida(pass)) {
        return "Registro exitoso para " + user;
    } else {
        return "Error: La contraseña es demasiado corta";
    }
}

rl.question("Ingrese su usuario: ", (user) => {
    rl.question("Ingrese su contraseña: ", (pass) => {
        console.log(registrarUsuario(user, pass));
        rl.close();
    });
});