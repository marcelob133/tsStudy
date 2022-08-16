"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email} ...`);
        return true;
    }
}
class Sms extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando sms para o usuario ${usuario.telefone} ...`);
        return true;
    }
}
new Email().enviar({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
});
new Sms().enviar({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
});
//# sourceMappingURL=classe_abstratas.js.map