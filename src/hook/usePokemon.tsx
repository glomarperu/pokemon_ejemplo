import { useEffect, useRef, useState } from 'react'
import { Pokemon, Result } from '../Interfaces/pokemon.interface';
import axios from 'axios';

const loadPokemons =  async ( page: number ): Promise<Pokemon[]>  => {

    try{
        const {data} = await axios.get<Result>('https://pokeapi.co/api/v2/pokemon',{
            params: {
                offset: (page - 1) * 10,
                limit: 10
            }
        });
        return data.results;
    }catch (error){
        console.log(error);
        return [];
    }
    
}

export const usePokemon = () => {

    const [ pokemons, setPokemons] = useState<Pokemon[]>([]);
    const currentPageRef = useRef(1);

    useEffect( () => {

        loadPokemons(currentPageRef.current)
        .then( setPokemons);

    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const pokemons = await loadPokemons(currentPageRef.current);
        if(pokemons.length > 0){
            setPokemons(pokemons);
        } else{
            currentPageRef.current--;
        }
    }

    const prevPage = async() => {
        if(currentPageRef.current < 1) return;
        currentPageRef.current--;
        const pokemons = await loadPokemons(currentPageRef.current);
        setPokemons(pokemons);
    }
    
  return {
    pokemons,
    nextPage,
    prevPage
  };
  
}
