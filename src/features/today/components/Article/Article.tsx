import type { ArticleData } from '@features/today/types/todayTypes';
import { decodeString } from '@common/utils/formatter';
import styles from './Article.module.css';

type ArticleProps = {
    type: 'vertical' | 'horizontal';
    data: ArticleData;
};

/**
 * Displays the image and title of an article. Can display the article horizontally or vertically.
 * Vertical layout articles are shown in the Stories for You section.
 * Horizontal layout article are shown in the Read More section.
 * Text from the articles is decoded.
 * @param type - the orientation of the article
 * @param data - the article data from the news api
 */
export function Article({ type, data }: ArticleProps) {
    return (
        <a href={data.url} target={'_blank'} className={`${styles.article} ${styles[type]}`}>
            <img className={styles.articleImage} src={decodeString(data.image_cdn)} alt={decodeString(data.title_a)} />
            <div className={styles.articleTitle}>{decodeString(data.title_a)}</div>
        </a>
    );
}
