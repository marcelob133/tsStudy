interface ISoma {
    (num1: number, num2: number): number
}

let primeiraSoma: ISoma

primeiraSoma = (num1 , num2) => num1 + num2

console.log(primeiraSoma(2, 3))


interface ICalculos {
    somar(a: number, b: number): number
    subtrair(a: number, b: number): number
    multiplicar(a: number, b: number): number
    dividir(a: number, b: number): number
}

let calculadora: ICalculos

const subtrair = (n1: number, n2: number): number => n1 - n2

calculadora = { 
    somar: (num1 , num2) => num1 + num2,
    subtrair,
    multiplicar: (num1 , num2) => num1 * num2,
    dividir: (num1 , num2) => num1 / num2
}

console.log(calculadora.subtrair(3,1))