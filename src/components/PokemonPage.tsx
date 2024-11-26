import { PokemonRow } from './PokemonRow';
import { usePokemon } from '../hook/usePokemon';

export const PokemonPage = () => {

    //TODO Clear pokemons
    const {pokemons, prevPage, nextPage} = usePokemon();

  return (
    <>
        <h3>Lista de Pokemones</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Foto</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokemons.map( pokemon => (
                        <PokemonRow pokemon={pokemon} />
                    ))
                }
            </tbody>
            
        </table>
        <div>
            <button className="buttonPaginator" onClick={ prevPage }>Prev</button>
            <button className="buttonPaginator" onClick={ nextPage }>Next</button>
        </div>
    </>
  )
}
