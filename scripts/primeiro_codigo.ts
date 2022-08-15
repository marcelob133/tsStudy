console.log('MEU PRIMEIRO TESTE')
console.log('======================')
const nome = 'João'
console.log(`Meu nome não é ${nome}`)

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number){
        this.nome = produtoNome
        this.valor = produtoValor
    }
}

const playstation5 = new Produto('playstation5', 5000)