"use strict";
class Cadastro {
    nome;
    nascimento;
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    email;
    empresa;
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const joaoCliente = new Cliente('João', new Date("2000-01-01"), 'joao@hcode.com.br', 'hcode');
console.log(joaoCliente);
//# sourceMappingURL=classe_heranca.js.map