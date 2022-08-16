//Representam atributos e métodos que podem ser utilizadas em mais de um contexto.
//Essa prática nos ajuda a reaproveitar melhor o código e também a deixá-lo mais leve.
//Ela não pode ser instanciada ... ela é um modelo.

interface IMeuUsuario {
    nome: string;
    email: string;
    telefone: string;
    idAndroid ?: string
}

abstract class Notificacao {
    abstract enviar(usuario: IMeuUsuario): boolean
}

class Email extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando e-mail para o usuario ${usuario.email} ...`)
        return true
    }
}

class Sms extends Notificacao {
    enviar(usuario: IMeuUsuario): boolean {
        console.log(`Enviando sms para o usuario ${usuario.telefone} ...`)
        return true
    }
}


new Email().enviar({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
})

new Sms().enviar({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
})
