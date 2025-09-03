import { loadingIcon } from '@assets/images/icons';
import styles from './LoadingBox.module.css';

type LoadingBoxProps = {
    message: string;
};

/**
 * Used to display a loading message to the user. Also shows a spinner icon.
 * @param message - the loading message to show
 */
export function LoadingBox({ message }: LoadingBoxProps) {
    return (
        <div className={styles.loadingBox}>
            {loadingIcon}
            <div>{message}</div>
        </div>
    );
}
