import type { ArticleData } from '@features/stories/types/storiesTypes';
import { limitString } from '@/utils/formatter';
import styles from './CenterSlide.module.css';

type CenterSlideProps = {
    data: ArticleData;
};

export function CenterSlide({ data }: CenterSlideProps) {
    return (
        <a
            href={data.url}
            target={'_blank'}
            style={{ backgroundImage: `url(${data.image_cdn})` }}
            className={styles.centerSlide}>
            <div className={styles.description}>
                <div className={styles.title}>{data.title_a}</div>
                <div className={styles.summary}>{limitString(data.summary, 50)}</div>
            </div>
        </a>
    );
}
