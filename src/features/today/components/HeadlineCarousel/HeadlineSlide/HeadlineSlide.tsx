import type { ArticleData } from '@features/today/types/todayTypes';
import { decodeString, limitString } from '@/utils/formatter';
import styles from './HeadlineSlide.module.css';

type HeadlineSlideProps = {
    data: ArticleData;
};

export function HeadlineSlide({ data }: HeadlineSlideProps) {
    return (
        <a href={data.url} target={'_blank'} className={styles.headlineSlide}>
            <img src={data.image_cdn} alt={decodeString(data.title_a)} />
            <div className={styles.description}>
                <h2 className={styles.title}>{decodeString(data.title_a)}</h2>
                <span className={styles.summary}>{limitString(decodeString(data.summary), 50)}</span>
            </div>
        </a>
    );
}
