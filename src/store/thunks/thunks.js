import { setPokemons } from "../slices/pokemonSlice"


export const getPokemons = ( name ) => {
    return async( dispatch, getState) => {
    
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ name }/`);
        const data = await resp.json();
        
        dispatch( setPokemons({ name: data.name, stats: data.stats, sprites: data.sprites  }));
    }
}

