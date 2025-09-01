import { CenterArticles } from '@features/stories/components/CenterPanel/CenterArticles/CenterArticles';
import { CenterSlideshow } from '@features/stories/components/CenterPanel/CenterSlideshow/CenterSlideshow';
import styles from './CenterPanel.module.css';

export function CenterPanel() {

    return (
        <div className={styles.centerPanel}>
            <CenterSlideshow/>
            <CenterArticles/>
        </div>
    );
}
