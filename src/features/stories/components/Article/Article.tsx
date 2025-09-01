import type { ArticleData } from '@features/stories/types/storiesTypes';
import styles from './Article.module.css';

type ArticleProps = {
    type: 'center' | 'sidebar';
    data: ArticleData;
};

export function Article({ type, data }: ArticleProps) {
    return (
        <a href={data.url} target={'_blank'} className={`${styles.article} ${styles[type]}`}>
            <img className={styles.articleImage} src={data.image_cdn} />
            <div className={styles.articleTitle}>{data.title_a}</div>
        </a>
    );
}
