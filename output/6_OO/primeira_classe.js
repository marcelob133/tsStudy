"use strict";
class Pessoa {
    nome;
    years;
    altura;
    constructor(nome, years, altura) {
        this.nome = nome;
        this.years = years;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} tem ${this.years} anos e mede ${this.altura} de altura.`;
    }
}
const ronaldo = new Pessoa('Ronaldo', 22, 122);
const marcus = new Pessoa('Marcus', 25, 185);
console.log(ronaldo);
console.log(ronaldo.toString());
console.log(marcus);
//# sourceMappingURL=primeira_classe.js.map