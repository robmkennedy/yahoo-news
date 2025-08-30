import type { PropsWithChildren } from 'react';
import styles from './Container.module.css';

type ContainerProps = PropsWithChildren & {
    className: string
}

export function Container({ className, children }: ContainerProps) {
    return (
        <div className={`${className} ${styles.container}`}>
            {children}
        </div>
    );
}
