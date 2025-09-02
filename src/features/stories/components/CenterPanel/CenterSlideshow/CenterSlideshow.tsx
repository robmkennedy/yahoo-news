import type { ReactNode } from 'react';
import { useSlideshowNewsQuery } from '@features/stories/api/useSlideshowNewsQuery';
import { CenterSlide } from '@features/stories/components/CenterPanel/CenterSlideshow/CenterSlide/CenterSlide';
import { Slideshow } from '@common/components/Slideshow/Slideshow';
import { Article } from '@features/stories/components/Article/Article';
import styles from './CenterSlideshow.module.css';
import { Card } from '@common/components/Card/Card';
import { useTranslation } from 'react-i18next';

export function CenterSlideshow() {
    const slideshowResponse = useSlideshowNewsQuery();
    const {t} = useTranslation();

    let items: ReactNode[] = [];
    if (slideshowResponse.isSuccess) {
        items = slideshowResponse.data.data.map((articleData) => {
            return <CenterSlide key={articleData.id} data={articleData} />;
        });
    }

    return (
        <Card title={t('stories.headlines')}>
            <Slideshow
                items={items}
                isError={slideshowResponse.isError}
                isLoading={slideshowResponse.isPending}
                isSuccess={slideshowResponse.isSuccess}
            />
        </Card>
    );
}
