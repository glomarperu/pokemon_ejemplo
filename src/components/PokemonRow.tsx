import { Pokemon } from '../Interfaces/pokemon.interface'

interface Props {
    pokemon: Pokemon
}


export const PokemonRow = ({pokemon}:Props) => {

    const getPhoto = ( url: string): string => {
        const id = url.split('/').slice(-2,-1)
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }

    const getId = ( url: string): string => {
        return url.split('/').slice(-2,-1)[0];
    }

  return (
    <tr>
        <td>{getId(pokemon.url)}</td>
        <td><img style={ { width: '30px'} } src={ getPhoto(pokemon.url) } alt="Pokemon Avatar" /></td>
        <td>{ pokemon.name }</td>
    </tr>
  )
}
