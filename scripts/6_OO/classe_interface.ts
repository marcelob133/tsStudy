//Representam atributos e métodos que podem ser utilizadas em mais de um contexto.
//Essa prática nos ajuda a reaproveitar melhor o código e também a deixá-lo mais leve.
//Ela não pode ser instanciada ... ela é um modelo.

interface INotificacaoV2 {
    enviar(usuario: IMeuUsuarioV2):boolean 
}

interface IEmailV2 {
    nome: string,
    email: string
}

interface ITelefoneV2{
    numero: string
}

interface IMeuUsuarioV2 {
    nome: string;
    email: string;
    telefone: string;
    idAndroid ?: string
}

abstract class NotificacaoV2 implements INotificacaoV2{
    abstract enviar(): boolean
}

class EmailV2 extends NotificacaoV2 implements INotificacaoV2, IEmailV2{

    nome: string
    email: string

    constructor(usuario: IMeuUsuarioV2){
        super()
        this.nome = usuario.nome
        this.email = usuario.email
    }

    enviar(): boolean {
        console.log(`Enviando e-mail para o usuario ${this.email} ...`)
        return true
    }
}

class SmsV2 extends NotificacaoV2  implements INotificacaoV2 ,ITelefoneV2{
    numero: string

    constructor(usuario: IMeuUsuarioV2){
        super()
        this.numero = usuario.telefone
    }

    enviar(): boolean {
        console.log(`Enviando sms para o usuario ${this.numero} ...`)
        return true
    }
}


new EmailV2({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
}).enviar()

new SmsV2({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
}).enviar()
