import { existsIcon, missingIcon } from '@assets/images/icons';
import styles from './BrowserStatusGrid.module.css';

type BrowserStatusGrid = {
    title: string;
    statuses: Map<string, boolean>;
};

export function BrowserStatusGrid({ title, statuses }: BrowserStatusGrid) {
    const content = Array.from(statuses).map(([key, result]) => {
        return (
            <div className={`${styles.status} ${result}`}>
                {result ? existsIcon : missingIcon}
                {key}
            </div>
        );
    });
    return (
        <div className={styles.browserStatusGrid}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.layout}>{content}</div>
        </div>
    );
}
