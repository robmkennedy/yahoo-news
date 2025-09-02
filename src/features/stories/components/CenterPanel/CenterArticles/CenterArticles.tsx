import { Article } from '@features/stories/components/Article/Article';
import { useCenterNewsQuery } from '@features/stories/api/useCenterNewsQuery';
import styles from './CenterArticles.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import MessageBox from '@common/components/MessageBox/MessageBox';
import LoadingBox from '@common/components/LoadingBox/LoadingBox';

export function CenterArticles() {
    const { data, isPending, isSuccess, isError } = useCenterNewsQuery();
    const { t } = useTranslation();

    let content = null;
    let articles = null;
    if (isError) {
        content = <MessageBox type='error' message={t("stories.articles.error")}/>;
    } else if (isPending) {
        content = <LoadingBox message={t("stories.articles.loading")}/>;
    } else if (isSuccess) {
        articles = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='center' data={articleData} />;
        });
        content = <div className={styles.centerArticlesGrid}>{articles}</div>
    }

    return (
        <Card title={t('stories.forYou')}>
            <div className={styles.centerArticles}>{content}</div>
        </Card>
    );
}
