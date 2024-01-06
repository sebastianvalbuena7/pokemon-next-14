'use client';

import { useState } from "react";
import { useAppSelector } from "@/store"
import { PokemonGrid, SimplePokemon } from ".."
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
    // Con Object.values toma los valores del objeto y los pasa a un array.
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemonsReducer));

    const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

    return (
        <>
            {
                pokemons.length === 0
                    ? <NoFavorites/>
                    : <PokemonGrid pokemons={pokemons}/>
            }
        </>
    )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className='text-red-500' />
            <span>No hay favoritos</span>
        </div>
    )
}