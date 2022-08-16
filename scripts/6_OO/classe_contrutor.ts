class Pedido {
    // private produto: string;
    // protected valorTotal: number;
    // public previsaoEntrega: Date;

    constructor(
        private produto: string, 
        protected valorTotal: number, 
        public previsaoEntrega: Date
    ) {
        // this.produto = produto;
        // this.valorTotal = valorTotal;
        // this.previsaoEntrega = previsaoEntrega;
    }
}

const meuPedido = new Pedido('TV 32 polegadas', 2000, new Date('2021-05-01'));

console.log(meuPedido);