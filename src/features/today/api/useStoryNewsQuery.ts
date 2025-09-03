import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

/**
 * Fetch the news data from the local story-news.json file
 */
const fetchStoryNews = async (): Promise<NewsData> => {
    const response = await fetch(`news/story-news.json`);
    return response.json();
};

/**
 * Use react-query to fetch and cache the news data that will be stories for you
 */
export const useStoryNewsQuery = () => {
    return useQuery({
        queryKey: ['story-news'],
        queryFn: () => fetchStoryNews()
    });
};
