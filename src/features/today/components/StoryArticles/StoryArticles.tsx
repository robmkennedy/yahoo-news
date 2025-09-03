import { Article } from '@features/today/components/Article/Article';
import { Card } from '@common/components/Card/Card';
import { MessageBox } from '@common/components/MessageBox/MessageBox';
import { LoadingBox } from '@common/components/LoadingBox/LoadingBox';
import { useStoryNewsQuery } from '@features/today/api/useStoryNewsQuery';
import { useTranslation } from 'react-i18next';
import styles from './StoryArticles.module.css';

/**
 * Shows a grid of "Stories for You" inside a Card component.
 * Each article is layout vertical and is located below the carousel.
 * Uses a react-query custom hook to get the news data.
 * Also handles the loading and error states when fetching the news data.
 */
export function StoryArticles() {
    const { data, isPending, isSuccess, isError } = useStoryNewsQuery();
    const { t } = useTranslation();

    let content = null;
    let articles = null;
    if (isError) {
        content = <MessageBox type='error' message={t('stories.articles.error')} />;
    } else if (isPending) {
        content = <LoadingBox message={t('stories.articles.loading')} />;
    } else if (isSuccess) {
        articles = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='vertical' data={articleData} />;
        });
        content = <div className={styles.storyArticlesGrid}>{articles}</div>;
    }

    return (
        <Card title={t('stories.title')}>
            <div className={styles.storyArticles}>{content}</div>
        </Card>
    );
}
