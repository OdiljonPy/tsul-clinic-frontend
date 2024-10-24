import { create } from "zustand";
import API from "@/lib/axios";
import { INews, INewsDetailRes } from "@/types/news/news";
import { ApiPagination } from "@/types/api-pagination";
import { ApiResponse } from "@/types/api-response";

type NewsProps = ApiPagination<INews>["response"];

type NewsStoreType = {
  news: NewsProps;
  news_detail: INews;
  news_popular: INews[];
  loading: boolean;
  error: boolean;
  fetchNews: (page: number, limit?: number) => Promise<void>;
  fetchNewsDetail: (id: number) => Promise<void>;
  fetchNewsPopular: () => Promise<void>;
};

const useNewsStore = create<NewsStoreType>((set) => ({
  news: {} as NewsProps,
  news_detail: {} as INews,
  news_popular: [],
  loading: false,
  error: false,

  fetchNews: async (page: number, limit?: number) => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiPagination<INews>>(
        `/news/?page=${page}&page_size=${limit ? limit : 10}`,
      );
      if (res.data.ok) {
        set({ news: res.data.response, error: false });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchNewsDetail: async (id: number) => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<INewsDetailRes>(`/news/${id}/`);
      if (res.data.ok) {
        set({ news_detail: res.data.response, error: false });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchNewsPopular: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<INews>>(`/news/popular/`);
      if (res.data.ok) {
        set({ news_popular: res.data.response, error: false });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useNewsStore;
