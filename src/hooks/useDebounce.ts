import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearInterval(handler);
        };
    }, [delay, value]);

    return debouncedValue;
};

export default useDebounce;