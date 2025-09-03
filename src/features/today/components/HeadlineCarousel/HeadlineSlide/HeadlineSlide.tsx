import type { ArticleData } from '@features/today/types/todayTypes';
import { decodeString, limitString } from '@common/utils/formatter';
import styles from './HeadlineSlide.module.css';

type HeadlineSlideProps = {
    data: ArticleData;
};

/**
 * A slide to be shown in the headline carousel.
 * Includes an overlay to display the title and summary of the article.
 * @param data - the data of the article to be shown in this particular slide
 */
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
