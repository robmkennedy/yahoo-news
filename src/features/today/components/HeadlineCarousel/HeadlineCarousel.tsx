import { Card } from '@common/components/Card/Card';
import { Carousel } from '@common/components/Carousel/Carousel';
import { HeadlineSlide } from '@features/today/components/HeadlineCarousel/HeadlineSlide/HeadlineSlide';
import { useHeadlineNewsQuery } from '@features/today/api/useHeadlineNewsQuery';
import { useTranslation } from 'react-i18next';
import MessageBox from '@common/components/MessageBox/MessageBox';
import LoadingBox from '@common/components/LoadingBox/LoadingBox';

export function HeadlineCarousel() {
    const { data, isPending, isSuccess, isError } = useHeadlineNewsQuery();
    const { t } = useTranslation();

    let items = null;
    let content = null;
    if (isError) {
        content = <MessageBox type='error' message={t('headlines.articles.error')} />;
    } else if (isPending) {
        content = <LoadingBox message={t('headlines.articles.loading')} />;
    } else if (isSuccess) {
        items = data?.data.map((articleData) => {
            return <HeadlineSlide key={articleData.id} data={articleData} />;
        });
        content = <Carousel items={items} />;
    }

    return <Card title={t('headlines.title')}>{content}</Card>;
}
