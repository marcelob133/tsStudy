class Cadastro {

    nome: string;
    nascimento: Date

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }

    toString(): string{
        return `Meu teste ${this.nome} e meu ${this.nascimento}!`
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;

    constructor(nome: string, nascimento: Date, email: string, empresa: string) {
        super(nome, nascimento);
        this.email = email
        this.empresa = empresa
    }
    toString(): string{
        return `Junando ${super.toString()} ou ${this.empresa}!!!`
    }
}

const joaoCliente = new Cliente('João', new Date("2000-01-01"), 'joao@hcode.com.br', 'hcode');
console.log(joaoCliente)
console.log(joaoCliente.toString())