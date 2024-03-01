function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputValue + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputValue - 32) * 5 / 9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputValue - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputValue - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputValue - 273.15) * 9 / 5 + 32;
    } else {
        result = inputValue; // If same units selected
    }

    document.getElementById("result").innerHTML = result.toFixed(3) + " " + toUnit;
}