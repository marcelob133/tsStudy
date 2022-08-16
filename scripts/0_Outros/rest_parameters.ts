const somarRenda = (...meses: number[]): number =>  meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0)

console.log(somarRenda(50, 25, 125))