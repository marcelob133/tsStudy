"use strict";
class Empresa {
    prestarServico() {
        return "Empresa prestando serviço.";
    }
}
class Padaria extends Empresa {
    prestarServico() {
        return "Vendendo pão!";
    }
}
class Mercearia extends Empresa {
    prestarServico() {
        return "Vendendo alimentos e bebidas.";
    }
}
console.log(new Empresa().prestarServico());
console.log(new Mercearia().prestarServico());
const padaraia = new Padaria();
console.log(padaraia.prestarServico());
//# sourceMappingURL=classe_polimorfismo.js.map