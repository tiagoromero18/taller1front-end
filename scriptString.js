// STRING

const longitud = () => {
    let palabra = document.querySelector("#palabra").value
    let long = palabra.length;
    alert(`La palabra tiene ${long} letras.`)
}

const toMayus = () => {
    let palabra = document.querySelector("#palabra").value
    let upper = palabra.toUpperCase();
    alert(`La palabra en mayúscula es ${upper}.`)
}

const toMinus = () => {
    let palabra = document.querySelector("#palabra").value
    let lower = palabra.toLowerCase();
    alert(`La palabra en minúscula es ${lower}.`)
}

const primera = () => {
    let palabra = document.querySelector("#palabra").value
    let prim = palabra.substring(0,1);
    alert(`La primera letra es ${prim}.`)
}