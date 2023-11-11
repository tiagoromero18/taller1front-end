function confirm(nombre, apellido, deporte) {
    let boolean = true;
    if (nombre == 'Lionel' && apellido == 'Messi' && deporte == 'Futbol') {
        return boolean;
    } else if (nombre == 'Lebron' && apellido == 'James' && deporte == 'Baloncesto') {
        return boolean;
    } else if (nombre == 'Juan Pablo' && apellido == 'Montoya' && deporte == 'Formula 1') {
        return boolean;
    } else {
        boolean = false;
        return boolean;
    }
}

let nombreInput = document.getElementById('nombre');
let apellidoInput = document.getElementById('apellido');
let deporteInput = document.getElementById('deporte');

// Get values when needed (e.g., on button click)
let nombre = nombreInput.value;
let apellido = apellidoInput.value;
let deporte = deporteInput.value;

let x = confirm(nombre, apellido, deporte);

if (x == true) {
    alert("su respuesta es correcta");
} else {
    alert("su respuesta es incorrecta");
}
