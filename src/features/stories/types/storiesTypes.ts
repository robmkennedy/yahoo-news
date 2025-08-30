export type ArticleData = {
    id: number
    title_a: string
    image_cdn: string
    summary: string
    url: string
}

export type SlideshowData = {
    data: ArticleData[];
    count: number;
}