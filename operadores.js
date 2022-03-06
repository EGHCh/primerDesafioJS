alert ("Bienvenido, recuerde solo  utilizar numeros  mayores a 0 y distintos entre si")
var num1 = parseInt(prompt("Ingresa el primer numero"))
var num2 =  parseInt(prompt("Ingresa el segundo numero"))

if ((num1 * num2) !== 0  && num1 !== num2) {
  var sum = num1 + num2;
  var sub = num1 - num2;
  var div = num1 / num2;
  var mul = num1 * num2;
  var rem = num1 % num2;

  alert(`El resultado de la suma entre ${num1} y ${num2} de es ${sum}`)
  alert(`El resultado de la resta entre ${num1} y ${num2} de es ${sub}`)
  alert(`El resultado de la división entre ${num1} y ${num2} de es ${div}`)
  alert(`El resultado de la multiplicación entre ${num1} y ${num2} de es ${mul}`)
  alert(`El modulo de entre ${num1} y ${num2} de es ${rem}`)
}  else {
  alert("RECUERDA LAS REGLAS >:(!!!!")
}
