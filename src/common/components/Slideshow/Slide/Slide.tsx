import styles from './Slide.module.css';
import { type PropsWithChildren } from 'react';

type SlideProps = PropsWithChildren & {
    isVisible: boolean;
};

export function Slide({ isVisible, children }: SlideProps) {
    return <div className={`${styles.slide} ${isVisible ? styles.visible : ''}`}>{children}</div>;
}
