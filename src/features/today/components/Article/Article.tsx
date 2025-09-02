import type { ArticleData } from '@features/today/types/todayTypes';
import { decodeString } from '@/utils/formatter';
import styles from './Article.module.css';

type ArticleProps = {
    type: 'center' | 'sidebar';
    data: ArticleData;
};

export function Article({ type, data }: ArticleProps) {
    return (
        <a href={data.url} target={'_blank'} className={`${styles.article} ${styles[type]}`}>
            <img className={styles.articleImage} src={decodeString(data.image_cdn)} alt={decodeString(data.title_a)} />
            <div className={styles.articleTitle}>{decodeString(data.title_a)}</div>
        </a>
    );
}
