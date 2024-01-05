'use client'

import { IoCafeOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect } from "react";
import { initCounterState } from "@/store/counter/counterSlice";

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counterReducer.count);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initCounterState(count))
    }, [dispatch, count]);

    return (
        <div className="flex flex-wrap p-2 items-center justify-centert">
            <SimpleWidget title={count.toString()} icon={<IoCafeOutline />} href="/dashboard/counter" subTitle="Counter Redux" />
            <SimpleWidget title={count.toString()} icon={<IoCafeOutline />} href="/dashboard/counter" subTitle="Redux Counter" />
        </div>
    )
}