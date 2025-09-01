import { useSidebarNewsQuery } from '@features/stories/api/useSidebarNewsQuery';
import { Article } from '@features/stories/components/Article/Article';
import styles from './SideArticles.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';

export function SideArticles() {
    const { data, isPending, isSuccess, isError } = useSidebarNewsQuery();
    const { t } = useTranslation();

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
        <Card title={t('sidebar.articles.title')}>
            <div className={styles.sideArticles}>
                <div className={styles.sideArticlesItems}>{content}</div>
            </div>
        </Card>
    );
}
