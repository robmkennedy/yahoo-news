import type { ReactNode } from 'react';
import { useSlideArticlesQuery } from '@features/stories/api/useSlideArticlesQuery';
import { SlideArticle } from '@features/stories/components/SlideArticle/SlideArticle';
import { Slideshow } from '@common/components/Slideshow/Slideshow';
import { Article } from '@features/stories/components/Article/Article';
import styles from './CenterSlideshow.module.css';

export function CenterSlideshow() {
    const slideshowResponse = useSlideArticlesQuery();

    let items: ReactNode[] = [];
    if (slideshowResponse.isSuccess) {
        items = slideshowResponse.data.data.map((articleData) => {
            return <SlideArticle key={articleData.id} data={articleData}/>
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
