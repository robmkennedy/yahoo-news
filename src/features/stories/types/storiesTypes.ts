type ArticleResponse = {
    title_a: string
    image_cdn: string
    summary: string
    url: string
}

type SlideshowResponse = {
    data: ArticleResponse[];
    count: number;
}