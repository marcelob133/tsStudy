class Pessoa {
    nome: string;
    years: number;
    altura: number

    constructor(nome: string, years: number, altura: number){
        this.nome = nome;
        this.years = years;
        this.altura = altura
    }

    toString(): string{
        return `A pessoa ${this.nome} tem ${this.years} anos e mede ${this.altura} de altura.` 
    }
}

const ronaldo = new Pessoa('Ronaldo', 22, 122);
const marcus = new Pessoa('Marcus', 25, 185);
console.log(ronaldo);
console.log(ronaldo.toString())
console.log(marcus);