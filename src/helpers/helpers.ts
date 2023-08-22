import {NewsModel} from "../features/news/news.models";

export const sort = (arr:NewsModel[], toStart:boolean) => {
    const sortData = arr?.sort(function(a,b): any{
        if (toStart) {
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        } else {
            return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        }
    });
    return sortData
}