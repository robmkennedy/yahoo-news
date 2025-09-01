import styles from './TextInput.module.css';
import type { ChangeEvent } from 'react';

type TextInputProps = {
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput({ placeholder, onChange }: TextInputProps) {
    return (
        <input type='text' className={styles.textInput} onChange={onChange} placeholder={placeholder} />
    );
}
