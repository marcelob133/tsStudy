function mostrarMensagem(texto: string | number): boolean{
    console.log(texto)
    return true
}

console.log(mostrarMensagem('Hcode!'))
console.log(mostrarMensagem(21))

const show = (codigo: number): number => codigo

console.log(show(2))