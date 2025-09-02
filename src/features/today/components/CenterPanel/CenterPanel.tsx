import { StoryArticles } from '@features/today/components/StoryArticles/StoryArticles';
import { HeadlineCarousel } from '@features/today/components/HeadlineCarousel/HeadlineCarousel';
import styles from './CenterPanel.module.css';

export function CenterPanel() {

    return (
        <div className={styles.centerPanel}>
            <HeadlineCarousel/>
            <StoryArticles/>
        </div>
    );
}
