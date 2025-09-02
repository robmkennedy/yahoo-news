import { loadingIcon } from '@assets/images/icons';
import styles from './LoadingBox.module.css';

type LoadingBoxProps = {
    message?: string
};

/**
 * A component used to display a loading message to the user.
 * If no specific message prop is supplied, a default loading message is used.
 */
const LoadingBox = ({ message }: LoadingBoxProps) => {

    return (
        <div className={styles.loadingBox}>
            {loadingIcon}
            <div>{message}</div>
        </div>
    );
};

export default LoadingBox;