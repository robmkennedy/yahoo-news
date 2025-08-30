import type { ReactNode } from 'react';
import styles from './Slideshow.module.css';

type SlideshowProps = {
    center: ReactNode;
    side: ReactNode;
};

export function Slideshow({ center, side }: SlideshowProps) {
    return (
        <div className={styles.slideshow}>
            Slideshow
        </div>
    );
}
