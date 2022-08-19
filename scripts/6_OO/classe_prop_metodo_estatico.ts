import { BancoDeDados } from "../7_Modulos/classes/BancoDeDados"

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_SQLSERVER,
    senha: '654321',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
})

console.log(conexaoBanco)