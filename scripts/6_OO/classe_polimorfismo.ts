//Qualidade ou estado de ser capaz de assumir diferentes formas
//Aplicado quando uma classe filha cria um mesmo atributo ou método de sua classe pai, mas implementando um novo comportamento ou lógica, sobrescrevendo-o

class Empresa {
    prestarServico(){
        return "Empresa prestando serviço."
    }
}

class Padaria extends Empresa {
    prestarServico(){
        return "Vendendo pão!"
    }
}

class Mercearia extends Empresa {
    prestarServico(){
        return "Vendendo alimentos e bebidas."
    }
}

console.log(new Empresa().prestarServico())
console.log(new Mercearia().prestarServico())
const padaraia = new Padaria();
console.log(padaraia.prestarServico())