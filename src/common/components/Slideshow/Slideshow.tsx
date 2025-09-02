import styles from './Slideshow.module.css';
import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import '@common/hooks/useTimer';
import { Slide } from '@common/components/Slideshow/Slide/Slide';
import { useTimer } from '@common/hooks/useTimer';

type SlideshowProps = {
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    items: ReactNode[];
};

const getNextIndex = (totalCount: number, index: number) => {
    return index === totalCount ? 0 : index + 1;
}

const getPrevIndex = (totalCount: number, index: number) => {
    return index === 0 ? totalCount : index - 1;
}

export function Slideshow({ isError, isLoading, isSuccess, items }: SlideshowProps) {
    const previousIndex = useRef(0);
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [timerDelay, setTimerDelay] = useState<number | null>(40000);
    const gridRef = useRef<HTMLDivElement | null>(null);
    const rowRef = useRef<HTMLDivElement | null>(null);
    const centerSlideRef = useRef<HTMLDivElement | null>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);


    useEffect(() => {
        // Scroll the visible slide into view
        // gridRef.current?.children[visibleIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // gridRef.current?.style.setProperty('left', '-100%');

        // gridRef.current?.classList.add('move');

        setTimeout(() => {

            gridRef.current?.classList.add('shift');
        }, 500);

        // gridRef.current?.classList.add('shift');

        // setTimeout(() => {
        //
        // slideRefs.current?.forEach(((slide) => {
        // // slide?.style.setProperty('transform', 'translateX(-90%)');
        //     slide?.classList.add('move');
        // }))
        // }, 100);
        // slideRefs.current?.[1]?.scrollIntoView({ behavior: 'smooth' });
        previousIndex.current = visibleIndex;
    }, [visibleIndex]);

    // useTimer(() => {
    //     setVisibleIndex(visibleIndex + 1);
    // }, timerDelay);

    useLayoutEffect(() => {
        // gridRef.current?.style.setProperty('left', '-200%');

        // gridRef.current?.classList.remove('shift');


        // slideRefs.current?.forEach(((slide) => {
        //     // slide?.style.setProperty('transform', 'translateX(-90%)');
        //     slide?.classList.add('move');
        // }))

    }, [visibleIndex]);

    const content: ReactNode[] = [];
    if (isSuccess) {
        // When clicking prev - render two slides to the left of the visible one
        // When clicking next - render two slides to the right of the visible one
        for (let i = visibleIndex - 1; i <= visibleIndex + 1; i++) {
            content.push(
                <div ref={ element => slideRefs.current[i] = element }  className={styles.slide} key={i}>
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
            <div data-index={visibleIndex} className={styles.slideshowWindow} ref={rowRef} >
                <div data-index={visibleIndex} className={`${styles.slideshowGrid} ${visibleIndex}`} ref={gridRef}>
                    {content}
                </div>
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
