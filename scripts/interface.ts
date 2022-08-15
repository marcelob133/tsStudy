interface IEndereco {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string
}
let casa: IEndereco

casa = {
    logradouro: 'Av. Paulista',
    numero: 1000,
    bairro: 'Bela Vista',
    cidade: 'São Paulo'
}
