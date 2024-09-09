import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IFaq } from "@/types/home/faq";

type FaqStoreType = {
  faq: IFaq[];
  loading: boolean;
  error: boolean;
  fetchFAQ: () => Promise<void>;
};

const useFAQStore = create<FaqStoreType>((set) => ({
  faq: [],
  loading: false,
  error: false,
  fetchFAQ: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IFaq>>("/faq/");
      if (res.data.ok) set({ faq: res.data.response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFAQStore;
