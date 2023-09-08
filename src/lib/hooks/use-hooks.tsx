"use client"

import { useEffect, useState } from "react";

export default function useDebounce(
    value:string, delay: number = 1250
) : any {
    const [debounceValue, setDebounceValue] = 
    useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounceValue;
};