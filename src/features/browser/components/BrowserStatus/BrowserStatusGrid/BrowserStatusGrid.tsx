import { existsIcon, missingIcon } from '@assets/images/icons';
import styles from './BrowserStatusGrid.module.css';

type BrowserStatusGrid = {
    title: string;
    statuses: Map<string, boolean>;
};

/**
 * Displays a grid of statuses. Each item in the map is displayed with a corresponding existing/missing icon.
 * @param title - the title text to show above the grid
 * @param statuses - the map of statuses
 */
export function BrowserStatusGrid({ title, statuses }: BrowserStatusGrid) {
    const content = Array.from(statuses).map(([key, result]) => {
        return (
            <div className={`${styles.status} ${result}`} key={key}>
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
