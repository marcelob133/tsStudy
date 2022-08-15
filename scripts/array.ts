const filmesCategorias: string[] = ['Comédia', 'Drama', 'Aventura', 'Romance']
filmesCategorias.push('Comédia')
console.log(filmesCategorias)

const filmesAno: Array<number> = []
for (let ano = 2000; ano <= new Date().getFullYear() ; ano++) {
   filmesAno.push(ano)
}
console.log(filmesAno)