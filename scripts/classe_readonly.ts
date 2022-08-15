class Usuario {
    readonly id: string = "1213564348ffafa"
    nome: string = "João"
    private senha: string = "123456"
    readonly dataCadastro: Date = new Date('2021-01-01')
}

const usuario = new Usuario()
// usuario.id = '123'
console.log(usuario.id)