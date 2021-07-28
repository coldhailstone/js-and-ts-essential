import { NewsFeed, NewsDetail } from '../types';

export class Api {
    url: string;
  
    constructor(url: string) {
        this.url = url;
    }
  
    async request<AjaxResponse>(): Promise<AjaxResponse> {
        let response = await fetch(this.url);
        return await response.json() as AjaxResponse;
    }
}
  
export class NewsFeedApi extends Api {
    async getData(): Promise<NewsFeed[]> {
        return await this.request<NewsFeed[]>();
    }
}

export class NewsDetailApi extends Api {
    async getData(): Promise<NewsDetail> {
        return await this.request<NewsDetail>();
    }
}