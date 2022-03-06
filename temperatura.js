var tempCel = parseInt(prompt("Ingrese la temperatura actual en °C"))
var tempKel = tempCel + 273.15
var tempFah = (tempCel * (9 / 5)) + 32

alert(`La temperatura de hoy es: ${tempKel}K  o ${tempFah}°F`)