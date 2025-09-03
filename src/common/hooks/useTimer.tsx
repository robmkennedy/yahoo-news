import { useEffect, useRef } from 'react';

/**
 * A custom hook used to start a timer.
 * The delay time can be changed dynamically and the timer can be stopped and restarted if needed.
 * @param callback - the function to call every time the delay time is reached.
 * @param delay - the number of milliseconds of the interval. Can be set to null to stop the timer.
 */
export const useTimer = (callback: () => void, delay: number | null) => {
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
};
