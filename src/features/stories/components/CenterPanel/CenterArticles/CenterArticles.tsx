import { Article } from '@features/stories/components/Article/Article';
import { useCenterNewsQuery } from '@features/stories/api/useCenterNewsQuery';
import styles from './CenterArticles.module.css';

export function CenterArticles() {
    const { data, isPending, isSuccess, isError } = useCenterNewsQuery();

    let content = null;
    if (isError) {
        content = <div>Error</div>;
    } else if (isPending) {
        content = <div>Loading...</div>;
    } else {
        content = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='center' data={articleData} />;
        });
    }

    return (
        <div className={styles.centerArticles}>
            {content}
        </div>
    );
}
