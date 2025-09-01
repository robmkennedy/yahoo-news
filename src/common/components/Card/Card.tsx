import type { PropsWithChildren } from 'react';
import { CardTitle } from '@common/components/Card/CardTitle/CardTitle';
import styles from './Card.module.css';

type CardProps = PropsWithChildren & {
    title?: string;
}

export function Card({ title, children }: CardProps) {
    return (
        <div className={`${styles.card}`}>
            {title && <CardTitle text={title}/>}
            {children}
        </div>
    );
}
