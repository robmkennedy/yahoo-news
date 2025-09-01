import { Article } from '@features/stories/components/Article/Article';
import { useCenterNewsQuery } from '@features/stories/api/useCenterNewsQuery';
import styles from './CenterArticles.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';

export function CenterArticles() {
    const { data, isPending, isSuccess, isError } = useCenterNewsQuery();
    const { t } = useTranslation();

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
        <Card title={t('stories.title')}>
            <div className={styles.centerArticles}>{content}</div>
        </Card>
    );
}
