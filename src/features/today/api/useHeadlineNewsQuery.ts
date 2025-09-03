import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

/**
 * Fetch the news data
 */
const fetchHeadlineNews = async (): Promise<NewsData> => {
    const response = await fetch(`https://s.yimg.com/cv/apiv2/default/20200528/test.json`);
    return response.json();
};

/**
 * Use react-query to fetch and cache the news data that will be shown in the Headlines Carousel
 */
export const useHeadlineNewsQuery = () => {
    return useQuery({
        queryKey: ['headline-news'],
        queryFn: () => fetchHeadlineNews()
    });
};
