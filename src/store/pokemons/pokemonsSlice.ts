import { SimplePokemon } from '@/app/pokemons';
import { createSlice } from '@reduxjs/toolkit';

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const initialState = {

}

export const PokemonsSlice = createSlice({
    name: 'Pokemons',
    initialState,
    reducers: {
        
    }
});

export const {  } = PokemonsSlice.actions;

export default PokemonsSlice.reducer;