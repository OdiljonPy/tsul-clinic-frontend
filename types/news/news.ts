export interface INews {
  id: number;
  title: string;
  short_description: string;
  image: string;
  content: string;
  created_at: string;
}

export interface INewsDetailRes {
  ok: boolean;
  response: INews;
}
