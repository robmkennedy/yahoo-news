import ReactMarkdown from 'react-markdown';
import { Card } from '@common/components/Card/Card';
import { LoadingBox } from '@common/components/LoadingBox/LoadingBox';
import { MessageBox } from '@common/components/MessageBox/MessageBox';
import { useAboutMarkupQuery } from '@features/about/api/useAboutMarkupQuery';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
    const { data, isPending, isSuccess, isError } = useAboutMarkupQuery();
    const { t } = useTranslation();

    let content = null;
    if (isError) {
        content = <MessageBox type='error' message={t('about.error')} />;
    } else if (isPending) {
        content = <LoadingBox message={t('about.loading')} />;
    } else if (isSuccess) {
        if (data) {
            content = <ReactMarkdown children={data} />;
        }
    }

    return <Card title={t('about.title')}>{content}</Card>;
}
