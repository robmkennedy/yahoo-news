import styles from './Slideshow.module.css';
import { type ReactNode, useRef, useState } from 'react';
import { Slide } from '@common/components/Slideshow/Slide/Slide';

type SlideshowProps = {
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    items: ReactNode[];
};

export function Slideshow({ isError, isLoading, isSuccess, items }: SlideshowProps) {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const windowRef = useRef<HTMLDivElement | null>(null);

    const content: ReactNode[] = [];
    if (isSuccess) {
        // Render the slides up to the visible one - PLUS get next slide to prefetch image
        for (let i = 0; i <= visibleIndex + 1; i++) {
            const slide = (
                <Slide isVisible={i === visibleIndex} key={i}>{items[i]}</Slide>
            );
            content.push(slide);
        }
    }

    const handleBack = () => {
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1);
        }
    };

    const handleNext = () => {
        if (visibleIndex < items.length) {
            setVisibleIndex(visibleIndex + 1);
        }
    };

    return (
        <div className={styles.slideshow}>
            <div ref={windowRef} className={styles.slideshowWindow}>{content}</div>
            <button onClick={handleBack} disabled={visibleIndex === 0}>Back</button>
            <button onClick={handleNext} disabled={visibleIndex === items.length}>Next</button>
        </div>
    );
}
