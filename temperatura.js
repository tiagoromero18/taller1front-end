document.getElementById('convertir').onclick = function convertirTemperatura() {
    var temperatura = parseFloat(document.getElementById('inputNumero').value);
    var convde = document.getElementById('selectDe').value;
    var conva = document.getElementById('selectA').value;

    var resultado;

    if (convde === 'celsius'){
        if (conva === 'fahrenheit'){
            resultado = temperatura * 9/5 + 32;
        } else {
            if (conva === 'kelvin'){
                resultado = temperatura + 273.15;
            } else {
                resultado = temperatura
            }
        }
    } else {
        if (convde === 'fahrenheit'){
            if (conva === 'celsius'){
                resultado = (temperatura - 32) * 5/9
            } else {
                if (conva === 'kelvin'){
                    resultado = (temperatura - 32) * 5/9 + 273.15;
                } else {
                    resultado = temperatura
                }
            } 
        } else {
            if (conva === 'celsius'){
                resultado = temperatura - 273.15;
            } else {
                if (conva === 'fahrenheit'){
                    resultado = (temperatura - 273.15) * 9/5 + 32;
                } else {
                    resultado = temperatura
                }
            } 
        }
    }

    alert(`Resultado: ${resultado.toFixed(2)} ${conva}`);
}