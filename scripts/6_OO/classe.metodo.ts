class Professor {
    nome: string;
    idade: number;
    materia: string

    constructor(nome: string, idade: number, materia: string){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string{
        return `Meu nome é ${this.nome} tenho ${this.idade} anos e vou lecionar ${this.materia}.`
    }

    dizerNotas(...notas: number[]): number{
        return notas.reduce((a,b) => a + b, 0) / notas.length
    }
}

const glaucio = new Professor('Glaucio', 45, 'DBA')
console.log(glaucio.seApresentar())
console.log(glaucio.dizerNotas(2,1,4,5))