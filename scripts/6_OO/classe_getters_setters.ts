class Permissao {

    constructor(
        private _nome: string, 
        private _nivel: number
    ){}

    get nome(): string{
        return this._nome.toUpperCase()
    }

    set nome(novoNome: string){
        if(novoNome.length < 5){
            throw new Error('O nome da permissão deve ter no mínimo 5 letras.')
        }
        this._nome = novoNome
    }
}

const permissao = new Permissao('Administrador', 1)

try {
    console.log(permissao.nome)
} catch (error) {
    console.log(error)
}

permissao.nome = 'Administração'

try {
    console.log(permissao.nome)
} catch (error) {
    console.log(error)
}