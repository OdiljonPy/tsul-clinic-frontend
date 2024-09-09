import { create } from "zustand";
import API from "@/lib/axios";
import { INews } from "@/types/news/news";
import { ApiPagination } from "@/types/api-pagination";

type NewsProps = ApiPagination<INews>["response"];

type NewsStoreType = {
  news: NewsProps;
  loading: boolean;
  error: boolean;
  fetchNews: (page: number, limit?: number) => Promise<void>;
};

const useNewsStore = create<NewsStoreType>((set) => ({
  news: {} as NewsProps,
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
}));

export default useNewsStore;
