import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favorites',
    description: 'Lorem ipsum'
}

export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Favorite Pokemons <small className="text-blue-500">global state</small></span>
            
            <PokemonGrid pokemons={[]}/>
        </div>
    )
}