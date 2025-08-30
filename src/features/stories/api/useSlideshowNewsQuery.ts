import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/stories/types/storiesTypes';

const fetchSlideshowNews = async (): Promise<NewsData> => {
    const response = await fetch(`https://s.yimg.com/cv/apiv2/default/20200528/test.json`);
    return response.json();
};

export const useSlideshowNewsQuery = () => {
    return useQuery({
        queryKey: ['slideshow-news'],
        queryFn: () => fetchSlideshowNews()
    });
};