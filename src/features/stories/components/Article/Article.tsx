import styles from './Article.module.css';
import type { ArticleData } from '@features/stories/types/storiesTypes';

type ArticleProps = {
    type: 'center' | 'more';
    data: ArticleData;
};

export function Article({ image, headline }: ArticleProps) {
    return (
        <div className={styles.article}>
            <img src={image} alt={headline} />
        </div>
    );
}
