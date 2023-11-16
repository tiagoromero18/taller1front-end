function getSides(){
    let lado1 = parseInt(document.querySelector("#lado1").value)
    let lado2 = parseInt(document.querySelector("#lado2").value)
    let lado3 = parseInt(document.querySelector("#lado3").value)

    if (lado1 == lado2 && lado2 == lado3){
        alert(`El triángulo es equilátero`)
    }
    else if((lado1 == lado2 && lado1 != lado3) || (lado1 == lado3 && lado1 != lado2) || (lado2 == lado3 && lado1 != lado2)){
        alert(`El triángulo es isósceles`)
    }
    else{
        alert(`El triángulo es escaleno`)
    }

}