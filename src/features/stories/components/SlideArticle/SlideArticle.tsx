import type { ArticleData } from '@features/stories/types/storiesTypes';
import { limitString } from '@/utils/formatter';
import styles from './SlideArticle.module.css';

type SlideArticleProps = {
    data: ArticleData;
};

export function SlideArticle({ data }: SlideArticleProps) {
    return (
        <a
            href={data.url}
            target={'_blank'}
            style={{ backgroundImage: `url(${data.image_cdn})` }}
            className={styles.slideArticle}>
            <div className={styles.description}>
                <div className={styles.title}>{data.title_a}</div>
                <div className={styles.summary}>{limitString(data.summary, 50)}</div>
            </div>
        </a>
    );
}
