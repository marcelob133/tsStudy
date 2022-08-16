class Documento {
    private valor: string = '1236544789-01' //TS
    #numero: number = 35 //ECMAScript

    mostrarDocument(): number {
        return this.#numero
    }
}

class CNPJ extends Documento {
    // private valor: string = '25698745632-01'
    #numero: number = 56

    mostrarCNPJ(): number {
        return this.#numero
    }
}

const rg = new Documento();
console.log(rg.mostrarDocument())

const cnpj = new CNPJ()
console.log(cnpj.mostrarDocument())
console.log(cnpj.mostrarCNPJ())