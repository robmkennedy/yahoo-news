import styles from './Article.module.css';

type ArticleProps = {
    image: string;
    headline: string;
};

export function Article({ image, headline }: ArticleProps) {
    return (
        <div className={styles.article}>
            <img src={image} />
            {headline}
        </div>
    );
}
