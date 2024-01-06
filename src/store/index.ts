import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import pokemonsReducer from './pokemons/pokemonsSlice';

export const store = configureStore({
    reducer: {
        counterReducer,
        pokemonsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;