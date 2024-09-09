import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { INews } from "@/types/news/news";

type NewsStoreType = {
  news: INews[];
  loading: boolean;
  error: boolean;
  fetchNews: () => Promise<void>;
};

const useNewsStore = create<NewsStoreType>((set) => ({
  news: [],
  loading: false,
  error: false,

  fetchNews: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<INews>>("/news/");
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
