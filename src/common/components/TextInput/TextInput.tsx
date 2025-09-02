import type { KeyboardEvent, ChangeEvent } from 'react';
import styles from './TextInput.module.css';

type TextInputProps = {
    placeholder: string;
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput({ placeholder, onEnter, onChange }: TextInputProps) {

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onEnter) {
            onEnter(event);
        }
    };

    return (
        <input
            type='text'
            placeholder={placeholder}
            className={styles.textInput}
            onChange={onChange}
            onKeyUp={handleKeyUp}
        />
    );
}
