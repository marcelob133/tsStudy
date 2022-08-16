"use strict";
class Documento {
    valor = '1236544789-01';
    #numero = 35;
    mostrarDocument() {
        return this.#numero;
    }
}
class CNPJ extends Documento {
    #numero = 56;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
console.log(rg.mostrarDocument());
const cnpj = new CNPJ();
console.log(cnpj.mostrarDocument());
console.log(cnpj.mostrarCNPJ());
//# sourceMappingURL=classe_private_ecma.js.map