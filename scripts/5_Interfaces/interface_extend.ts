interface Modelo {
    id: number;
    created_at: number;
    updated_at: number;
}

interface Pessoa extends Modelo {
    nome: string;
    idade?: number;
}

interface IUsuario extends Pessoa{
    email: string;
    senha: string;
    id: number;
}

const joao: IUsuario = {
    email: 'joao@hcode.com.br',
    id: 1,
    nome: 'João',
    senha: 'jonas',
    idade: 22,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    years: 0,
    altura: 0
}