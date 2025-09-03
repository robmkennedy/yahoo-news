import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

const fetchMoreNews = async (): Promise<NewsData> => {
    const response = await fetch(`news/more-news.json`);
    return response.json();
};

export const useMoreNewsQuery = () => {
    return useQuery({
        queryKey: ['more-news'],
        queryFn: () => fetchMoreNews()
    });
};