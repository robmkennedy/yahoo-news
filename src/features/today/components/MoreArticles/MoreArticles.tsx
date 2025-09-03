import { Card } from '@common/components/Card/Card';
import { Article } from '@features/today/components/Article/Article';
import { MessageBox } from '@common/components/MessageBox/MessageBox';
import { LoadingBox } from '@common/components/LoadingBox/LoadingBox';
import { useMoreNewsQuery } from '@features/today/api/useMoreNewsQuery';
import { useTranslation } from 'react-i18next';
import styles from './MoreArticles.module.css';

export function MoreArticles() {
    const { data, isPending, isSuccess, isError } = useMoreNewsQuery();
    const { t } = useTranslation();

    let content = null;
    if (isError) {
        content = <MessageBox type='error' message={t('more.articles.error')}/>;
    } else if (isPending) {
        content = <LoadingBox message={t('more.articles.loading')}/>;
    } else if (isSuccess) {
        content = data?.data.map((articleData) => {
            return <Article key={articleData.id} type='sidebar' data={articleData} />;
        });
    }

    return (
        <Card title={t('more.articles.title')}>
            <div className={styles.moreArticles}>
                <div className={styles.moreArticlesItems}>{content}</div>
            </div>
        </Card>
    );
}
