'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, minusOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value: number;
}

export interface CounterResponse {
    count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
        .then(res => res.json());

    return data;
}

export const CartCounter = ({ value }: Props) => {
    const count = useAppSelector(state => state.counterReducer.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispatch(initCounterState(count)))
    }, [dispatch]);

    return (
        <>
            <div>CartCounter</div>
            <span className="text-9xl">{count}</span>

            <div className="flex">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(addOne())}
                >+1</button>

                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch(minusOne())}
                >-1</button>
            </div>
        </>
    )
}