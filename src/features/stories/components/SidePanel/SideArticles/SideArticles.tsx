import { useSidebarNewsQuery } from '@features/stories/api/useSidebarNewsQuery';
import { Article } from '@features/stories/components/Article/Article';
import styles from './SideArticles.module.css';

export function SideArticles() {
    const { data, isPending, isSuccess, isError } = useSidebarNewsQuery();

    let content = null;
    if (isError) {
        content = <div>Error</div>;
    } else if (isPending) {
        content = <div>Loading...</div>;
    } else {
        content = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='sidebar' data={articleData} />;
        });
    }

    return (
        <div className={styles.sideArticles}>
            <div className={styles.sideArticlesTitle}>Title For More</div>
            <div className={styles.sideArticlesItems}>{content}</div>
        </div>
    );
}
