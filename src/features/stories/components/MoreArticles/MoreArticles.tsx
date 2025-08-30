import styles from './MoreArticles.module.css';
import { useMoreArticlesQuery } from '@features/stories/api/useMoreArticlesQuery';
import { Article } from '@features/stories/components/Article/Article';

export function MoreArticles() {
    const { data, isPending, isSuccess, isError } = useMoreArticlesQuery();

    let content = null;
    if (isError) {
        content = <div>Error</div>;
    }
    else if (isPending) {
        content = <div>Loading...</div>;
    }
    else {
        content = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='center' data={articleData}/>
        });
    }

    return (
        <div className={styles.moreArticles}>
            <div className={styles.moreTitle}>Title For More</div>
            {content}
        </div>
    );
}
