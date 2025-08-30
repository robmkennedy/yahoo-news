import type { ReactNode } from 'react';
import { useSlideshowNewsQuery } from '@features/stories/api/useSlideshowNewsQuery';
import { CenterSlide } from '@features/stories/components/CenterPanel/CenterSlideshow/CenterSlide/CenterSlide';
import { Slideshow } from '@common/components/Slideshow/Slideshow';
import { Article } from '@features/stories/components/Article/Article';
import styles from './CenterSlideshow.module.css';

export function CenterSlideshow() {
    const slideshowResponse = useSlideshowNewsQuery();

    let items: ReactNode[] = [];
    if (slideshowResponse.isSuccess) {
        items = slideshowResponse.data.data.map((articleData) => {
            return <CenterSlide key={articleData.id} data={articleData}/>
        })
    }

    return (
        <Slideshow
            items={items}
            isError={slideshowResponse.isError}
            isLoading={slideshowResponse.isPending}
            isSuccess={slideshowResponse.isSuccess}
        />
    );
}
