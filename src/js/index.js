/*
- Ao clicar em um pokemon da listagem pegamos o id desse pokmemon pra saber qual cartão mostrar.
- Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostar o cartão correspondente ao que foi selecionado na listagem
pra isso vamos precisar de dois elementos:

    1 - Listagem
    2 - Cartão Pokemon
*/

// Precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

function soma(numero1, numero2){
    console.log(mumero1 + numero2)
}
// Vamos precisar de um evento de clique feito pelo usuario na listagem dos pokemons
listaSelecaoPokemons.forEach(pokemon =>{
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
        // Remover classe aberto só do cartão que está aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        // Ao clicar em um pokemon da listagem pegamos o id desse pokmemon pra saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado
        const cartaoPokemonParaAbir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbir.classList.add('aberto')

        // Remover classe ativo que marca qual pokemon ta selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Ativar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})