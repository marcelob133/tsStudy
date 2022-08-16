"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    nome;
    email;
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuario ${this.email} ...`);
        return true;
    }
}
class SmsV2 extends NotificacaoV2 {
    numero;
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando sms para o usuario ${this.numero} ...`);
        return true;
    }
}
new EmailV2({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
}).enviar();
new SmsV2({
    nome: 'João',
    email: 'teste@gmail.com',
    telefone: '98211-1111'
}).enviar();
//# sourceMappingURL=classe_interface.js.map