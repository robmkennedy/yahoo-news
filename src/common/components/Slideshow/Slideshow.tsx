import styles from './Slideshow.module.css';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import '@common/hooks/useTimer';
import { Slide } from '@common/components/Slideshow/Slide/Slide';
import { useTimer } from '@common/hooks/useTimer';

type SlideshowProps = {
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    items: ReactNode[];
};

export function Slideshow({ isError, isLoading, isSuccess, items }: SlideshowProps) {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [timerDelay, setTimerDelay] = useState<number | null>(40000);
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scroll the visible slide into view
        gridRef.current?.children[visibleIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [visibleIndex]);

    useTimer(() => {
        setVisibleIndex(visibleIndex + 1);
    }, timerDelay);

    const content: ReactNode[] = [];
    if (isSuccess) {
        // Render the slides up to the visible one - PLUS get next slide to prefetch image
        for (let i = 0; i <= visibleIndex + 1; i++) {
            content.push(
                <div className={styles.slide} key={i}>
                    {items[i]}
                </div>
            );
        }
    }

    const handlePrev = () => {
        setTimerDelay(null);
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1);
        }
    };

    const handleNext = () => {
        setTimerDelay(null);
        if (visibleIndex < items.length) {
            setVisibleIndex(visibleIndex + 1);
        }
    };

    return (
        <div className={`${styles.slideshow}`}>
            <div className={styles.slideshowGrid} ref={gridRef}>
                {content}
            </div>
            <div className={styles.slideshowCount}>{`${visibleIndex + 1} of ${items.length}`}</div>
            <button className={styles.slideshowPrev} onClick={handlePrev} disabled={visibleIndex === 0}>
                Back
            </button>
            <button className={styles.slideshowNext} onClick={handleNext} disabled={visibleIndex + 1 === items.length}>
                Next
            </button>
        </div>
    );
}
