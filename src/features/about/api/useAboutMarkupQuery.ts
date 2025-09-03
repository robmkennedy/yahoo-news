import { useQuery } from '@tanstack/react-query';

const fetchAboutMarkup = async (): Promise<string> => {
    const response = await fetch(`README.md`);
    return response.text();
};

export const useAboutMarkupQuery = () => {
    return useQuery({
        queryKey: ['about-markup'],
        queryFn: () => fetchAboutMarkup()
    });
};