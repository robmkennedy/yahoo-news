import { useQuery } from '@tanstack/react-query';
import type { NewsData } from '@features/today/types/todayTypes';

const fetchHeadlineNews = async (): Promise<NewsData> => {
    const response = await fetch(`https://s.yimg.com/cv/apiv2/default/20200528/test.json`);
    return response.json();
};

export const useHeadlineNewsQuery = () => {
    return useQuery({
        queryKey: ['headline-news'],
        queryFn: () => fetchHeadlineNews()
    });
};