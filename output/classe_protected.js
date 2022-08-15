"use strict";
class Domicilio {
    cor;
    endereco;
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return 'Interfone tocado!';
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone('Oi! Quem é!?!?');
    }
}
const casaDoHomer = new Casa('rosa', { cidade: "Springfield" });
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map