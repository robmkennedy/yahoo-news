import { Article } from '@features/today/components/Article/Article';
import { useStoryNewsQuery } from '@features/today/api/useStoryNewsQuery';
import styles from './StoryArticles.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';
import MessageBox from '@common/components/MessageBox/MessageBox';
import LoadingBox from '@common/components/LoadingBox/LoadingBox';

export function StoryArticles() {
    const { data, isPending, isSuccess, isError } = useStoryNewsQuery();
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
        content = <div className={styles.storyArticlesGrid}>{articles}</div>
    }

    return (
        <Card title={t('stories.title')}>
            <div className={styles.storyArticles}>{content}</div>
        </Card>
    );
}
