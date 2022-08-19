"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("../7_Modulos/classes/BancoDeDados");
const conexaoBanco = BancoDeDados_1.BancoDeDados.factory({
    tipoBanco: BancoDeDados_1.BancoDeDados.TIPO_SQLSERVER,
    senha: '654321',
    usuario: 'root',
    ip: BancoDeDados_1.BancoDeDados.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map