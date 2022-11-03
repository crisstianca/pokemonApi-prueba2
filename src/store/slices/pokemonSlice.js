import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        name: '',
        sprites:'', 
        stats: [],
    },
    reducers: {
        setPokemons: ( state, action ) => {
            state.name = action.payload.name;
            state.stats = action.payload.stats;
            state.sprites = action.payload.sprites;
        }
    }
});

export const { setPokemons } = pokemonSlice.actions;