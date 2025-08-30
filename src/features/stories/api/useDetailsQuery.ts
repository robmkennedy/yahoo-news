import { useQuery } from '@tanstack/react-query';

const fetchSlideshow = async (): Promise<SlideshowResponse> => {
    const response = await fetch(`https://s.yimg.com/cv/apiv2/default/20200528/test.json`);
    return response.data.json();
};

export const useSlideshowQuery = () => {
    return useQuery({
        queryKey: ['slideshow'],
        queryFn: () => fetchSlideshow()
    });
};