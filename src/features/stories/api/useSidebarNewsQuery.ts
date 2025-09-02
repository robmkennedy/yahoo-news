import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/stories/types/storiesTypes';

const fetchSidebarNews = async (): Promise<NewsData> => {
    const response = await fetch(`/news/sidebar-news.json`);
    return response.json();
};

export const useSidebarNewsQuery = () => {
    return useQuery({
        queryKey: ['sidebar-news'],
        queryFn: () => fetchSidebarNews()
    });
};