/**
 * The response from the news api
 */
export type NewsData = {
    data: ArticleData[];
    count: number;
};
/**
 * Each individual article in the news data. This is only a relevant subset of the data returned for each.
 */
export type ArticleData = {
    id: number;
    title_a: string;
    image_cdn: string;
    summary: string;
    url: string;
};
