import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

const fetchStoryNews = async (): Promise<NewsData> => {
    const response = await fetch(`news/story-news.json`);
    return response.json();
};

export const useStoryNewsQuery = () => {
    return useQuery({
        queryKey: ['story-news'],
        queryFn: () => fetchStoryNews()
    });
};