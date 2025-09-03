import { StoryArticles } from '@features/today/components/StoryArticles/StoryArticles';
import { HeadlineCarousel } from '@features/today/components/HeadlineCarousel/HeadlineCarousel';
import styles from './CenterPanel.module.css';

/**
 * Contains the content of the center of the page.
 * Consists of the headlines carousel and the stories panel.
 */
export function CenterPanel() {
    return (
        <div className={styles.centerPanel}>
            <HeadlineCarousel />
            <StoryArticles />
        </div>
    );
}
