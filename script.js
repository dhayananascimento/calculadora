const screenElement =  document.getElementById("screen");

const cleanAll = () => screenElement.value = "";

const clean = () => {
    if(screenElement.value != "")
        screenElement.value = screenElement.value.substring(0, screenElement.value.length-1);
}

const insert = (value) => {
    let char = ["/", "*", "-", "+", "."];
    let element = screenElement.value[screenElement.value.length-1];

    if((char.indexOf(value) > -1) && (screenElement.value != "") && (char.indexOf(element) > -1)) 
            screenElement.value = screenElement.value.substring(0, screenElement.value.length-1);
    
    screenElement.value += value;   
}

const result = () => {
    if(screenElement.value != "") {
        let value = eval(screenElement.value);

        if((value == "Infinity") || (value == "undefined")) {
            screenElement.value = "";
            alert("Expressão inválida!");
        }
        else screenElement.value = value; 
    }
    else alert("Por favor, insira uma expressão válida!");
    
}
