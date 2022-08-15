"use strict";
class Professor {
    nome;
    idade;
    materia;
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome} tenho ${this.idade} anos e vou lecionar ${this.materia}.`;
    }
    dizerNotas(...notas) {
        return notas.reduce((a, b) => a + b, 0) / notas.length;
    }
}
const glaucio = new Professor('Glaucio', 45, 'DBA');
console.log(glaucio.seApresentar());
console.log(glaucio.dizerNotas(2, 1, 4, 5));
//# sourceMappingURL=classe.metodo.js.map