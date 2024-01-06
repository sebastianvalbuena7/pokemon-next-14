import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/dist/createAction.d';
import { SimplePokemon } from '@/app/pokemons';
import { createSlice } from '@reduxjs/toolkit';

/* {
        '1': {id: 1, name: 'bulbasaur'},
        '2': {id: 2, name: 'charizard'}
    } */

interface PokemonsState {
    [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

    return favorites;
}

const initialState: PokemonsState = getInitialState();

const PokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload;
            const { id } = pokemon;

            if (state[id] != undefined) {
                delete state[id];
                return;
            } else {
                state[id] = pokemon;
            }

            // TODO: No se debe hacer en redux
            localStorage.setItem('favorite-pokemons', JSON.stringify(state));
        }
    }
});

export const { toggleFavorite } = PokemonsSlice.actions;

export default PokemonsSlice.reducer;