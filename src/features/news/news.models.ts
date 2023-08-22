export interface NewsSource {
    id: string | null;
    name: string;
}

export interface NewsModel {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsModelData {
    status: string;
    totalResults: number;
    articles: NewsModel[]
}