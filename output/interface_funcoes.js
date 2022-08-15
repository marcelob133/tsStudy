"use strict";
let primeiraSoma;
primeiraSoma = (num1, num2) => num1 + num2;
console.log(primeiraSoma(2, 3));
let calculadora;
const subtrair = (n1, n2) => n1 - n2;
calculadora = {
    somar: (num1, num2) => num1 + num2,
    subtrair,
    multiplicar: (num1, num2) => num1 * num2,
    dividir: (num1, num2) => num1 / num2
};
console.log(calculadora.subtrair(3, 1));
//# sourceMappingURL=interface_funcoes.js.map