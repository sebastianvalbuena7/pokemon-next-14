'use client';

import Image from "next/image"
import Link from "next/link"
import { SimplePokemon } from ".."
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "@/store"
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
    simplePokemon: SimplePokemon
}

export const PokemonCard = ({ simplePokemon }: Props) => {
    const { id, name } = simplePokemon;

    const isFavorite = useAppSelector(state => state.pokemonsReducer[id] != undefined);

    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavorite(simplePokemon));
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60 rounded-xl">
            <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
                    <Image priority={false} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={100} height={100} alt={name} />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div
                        className="px-4 py-2 hover:bg-gray-100 flex items-center hover:cursor-pointer"
                        onClick={onToggle}
                    >
                        <div className="text-red-600">
                            {
                                isFavorite
                                    ? <IoHeart />
                                    : <IoHeartOutline />
                            }
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {
                                    isFavorite
                                        ? 'Is Favorite'
                                        : 'Not is favorite'
                                }
                            </p>
                            <p className="text-xs text-gray-500">Clic to change</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}