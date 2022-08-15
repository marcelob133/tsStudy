interface ICurso {
    readonly titulo: string;
    descricao?: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number;
}

const curso: ICurso = {
    titulo: 'TypeScript',
    preco: 5000,
    cargaHoraria: 10,
    classificacao: 5
}

// curso.titulo = 'PHP 8.0'
console.log(curso)