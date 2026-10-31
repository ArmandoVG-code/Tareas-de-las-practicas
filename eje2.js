import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function enviarNotificacionEmail(dest, men) {
    console.log("[EMAIL A: " + dest + "] -> Mensaje: \"" + men + "\"");
}

function enviarNotificacionSMS(dest, men) {
    console.log("[SMS A: " + dest + "] -> Mensaje: \"" + men + "\"");
}

function procesarAlerta(user, tipo, callback) {
    let men;

    if (tipo === "seguridad") {
        men = "Alerta de seguridad";
    } else if (tipo === "bienvenida") {
        men = "Bienvenida al sistema";
    } else {
        men = "Notificación general";
    }

    callback(user, men);
}

rl.question("Ingrese el usuario: ", (user) => {
    rl.question("Tipo de alerta (seguridad/bienvenida): ", (tipo) => {
        rl.question("Medio de envío (email/sms): ", (medio) => {

            if (medio === "email") {
                procesarAlerta(user, tipo, enviarNotificacionEmail);
            } else if (medio === "sms") {
                procesarAlerta(user, tipo, enviarNotificacionSMS);
            } else {
                console.log("Medio de envío no válido");
            }

            rl.close();
        });
    });
});