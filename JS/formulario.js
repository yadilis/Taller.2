const validarFormulario = () => {
    let nombre = document.getElementById('id-nombre').value.trim();
    let email = document.getElementById('id-email').value.trim();
    let telefono = document.getElementById('id-telefono').value.trim();
    let direccion = document.getElementById('id-direccion').value.trim();
    let asunto = document.getElementById('id-asunto').value.trim();

    let errores = [];

    if (nombre === "") {
        errores.push("El nombre es obligatorio");
    }

    if (!validarEmail(email)) {
        errores.push("El email no es válido");
    }

    if (!validarTelefono(telefono)) {
        errores.push("El teléfono no es válido");
    }

    if (direccion.length < 4) {
        errores.push("La dirección debe tener al menos 4 caracteres");
    }

  
    if (contarPalabras(asunto) < 20) {
        errores.push("El mensaje debe tener al menos 20 palabras");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;
}


function contarPalabras(texto) {
    return texto.split(/\s+/).length;
}

function validarEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarTelefono(telefono) {
    let regexTelefono = /^0\d{9}$/;
    return regexTelefono.test(telefono);
}

function mostrarErrores(errores) {
    let mensaje = "Por favor corrija los siguientes errores:\n";
    errores.forEach(error => {
        mensaje += "* " + error + "\n";
    });
    alert(mensaje);
}
