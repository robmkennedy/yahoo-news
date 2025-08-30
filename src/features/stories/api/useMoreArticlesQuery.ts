import { useQuery } from '@tanstack/react-query';
import type { SlideshowData } from '@features/stories/types/storiesTypes';

const fetchMoreArticles = async (): Promise<SlideshowData> => {
    const response = await fetch(`https://s.yimg.com/cv/apiv2/default/20200528/test.json`);
    return response.json();
};

export const useMoreArticlesQuery = () => {
    return useQuery({
        queryKey: ['more-articles'],
        queryFn: () => fetchMoreArticles()
    });
};