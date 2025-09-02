import { useSidebarNewsQuery } from '@features/stories/api/useSidebarNewsQuery';
import { Article } from '@features/stories/components/Article/Article';
import styles from './SideArticles.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import MessageBox from '@common/components/MessageBox/MessageBox';
import LoadingBox from '@common/components/LoadingBox/LoadingBox';

export function SideArticles() {
    const { data, isPending, isSuccess, isError } = useSidebarNewsQuery();
    const { t } = useTranslation();

    let content = null;
    if (isError) {
        content = <MessageBox type='error' message={t('sidebar.articles.error')}/>;
    } else if (isPending) {
        content = <LoadingBox message={t('sidebar.articles.loading')}/>;
    } else if (isSuccess) {
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
