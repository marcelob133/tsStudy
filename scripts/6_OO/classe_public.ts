class Veiculo {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false
    }
}

const carro = new Veiculo('branco')
carro.cor = 'preto'

console.log(carro.cor)
console.log(carro.tentarAbrirPorta())