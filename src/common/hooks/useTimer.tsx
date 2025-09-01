import { useEffect, useRef } from 'react';

export const useTimer = (callback: () => void, delay: number | null ) => {
    const savedCallback = useRef<() => void | null>(null);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current?.();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}