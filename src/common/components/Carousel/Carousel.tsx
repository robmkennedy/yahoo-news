import { type ReactNode, useState } from 'react';
import { prevIcon, nextIcon } from '@assets/images/icons';
import { useTimer } from '@common/hooks/useTimer';
import styles from './Carousel.module.css';

type CarouselProps = {
    items: ReactNode[];
};

const autoIncrementTime = 4000;

const getNextIndex = (totalCount: number, index: number): number => {
    return index === totalCount - 1 ? 0 : index + 1;
};

const getPrevIndex = (totalCount: number, index: number): number => {
    return index === 0 ? totalCount - 1 : index - 1;
};

/**
 * Shows an array of slides, one slide at a time.
 * The slides will wrap if the first/last slide is reached.
 * A timer function will automatically move to the next slide.
 * Contains buttons to control forward/back and a count indicator showing the number of the current visible slide.
 * @param items - an array of items to show. Each item will be wrapped by its own slide.
 */
export function Carousel({ items }: CarouselProps) {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [timerDelay, setTimerDelay] = useState<number | null>(autoIncrementTime);

    useTimer(() => {
        const newVisibleIndex = getNextIndex(items.length, visibleIndex);
        setVisibleIndex(newVisibleIndex);
    }, timerDelay);

    const prevIndex = getPrevIndex(items.length, visibleIndex);
    const nextIndex = getNextIndex(items.length, visibleIndex);

    // Render the slide before/after the visible one to preload images
    const slides = (
        <div className={styles.carouselSlides}>
            <div className={styles.slide} key={prevIndex}>
                {items[prevIndex]}
            </div>
            <div className={styles.visibleSlide} key={visibleIndex}>
                {items[visibleIndex]}
            </div>
            <div className={styles.slide} key={nextIndex}>
                {items[nextIndex]}
            </div>
        </div>
    );

    const handlePrev = () => {
        setTimerDelay(null); // Stop the auto scroll if the user clicks a button
        const newVisibleIndex = getPrevIndex(items.length, visibleIndex);
        setVisibleIndex(newVisibleIndex);
    };

    const handleNext = () => {
        setTimerDelay(null); // Stop the auto scroll if the user clicks a button
        const newVisibleIndex = getNextIndex(items.length, visibleIndex);
        setVisibleIndex(newVisibleIndex);
    };

    return (
        <div className={`${styles.carousel}`}>
            {slides}
            <div className={styles.carouselCount}>{`${visibleIndex + 1} of ${items.length}`}</div>
            <button
                className={`${styles.carouselButton} ${styles.carouselPrev}`}
                aria-label='Prev Slide'
                onClick={handlePrev}>
                {prevIcon}
            </button>
            <button
                className={`${styles.carouselButton} ${styles.carouselNext}`}
                aria-label='Next Slide'
                onClick={handleNext}>
                {nextIcon}
            </button>
        </div>
    );
}
