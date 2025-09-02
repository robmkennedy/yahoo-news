import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/stories/types/storiesTypes';

const fetchCenterNews = async (): Promise<NewsData> => {
    const response = await fetch(`/news/center-news.json`);
    return response.json();
};

export const useCenterNewsQuery = () => {
    return useQuery({
        queryKey: ['center-news'],
        queryFn: () => fetchCenterNews()
    });
};