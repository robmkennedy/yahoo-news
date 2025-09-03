import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

/**
 * Fetch the news data from the local more-news.json file
 */
const fetchMoreNews = async (): Promise<NewsData> => {
    const response = await fetch(`news/more-news.json`);
    return response.json();
};

/**
 * Use react-query to fetch and cache the news data that will be shown in the sidebar
 */
export const useMoreNewsQuery = () => {
    return useQuery({
        queryKey: ['more-news'],
        queryFn: () => fetchMoreNews()
    });
};
