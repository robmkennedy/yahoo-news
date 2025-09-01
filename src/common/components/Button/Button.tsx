import styles from './Button.module.css';
import type { Priority } from '@common/types/commonTypes';
import type { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
    disabled?: boolean;
    onClick?: () => void;
    priority?: Priority;
};

export function Button({ disabled = false, onClick, priority = 'primary', children }: ButtonProps) {
    return (
        <button className={`${styles.button} ${priority}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}
