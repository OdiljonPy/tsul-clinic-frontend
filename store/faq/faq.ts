import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IFaqCategory, IFaqDetail, IFaqDetailResponse } from "@/types/home/faq";

type FaqStoreType = {
  faq: IFaqDetail;
  faq_category: IFaqCategory[];
  loading: boolean;
  error: boolean;
  fetchFAQ: (id: number) => Promise<void>;
  fetchFAQCategory: () => Promise<void>;
};

const useFAQStore = create<FaqStoreType>((set) => ({
  faq: {} as IFaqDetail,
  faq_category: [],
  loading: false,
  error: false,
  fetchFAQCategory: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IFaqCategory>>("/faq/category/");
      if (res.data.ok) set({ faq_category: res.data.response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  fetchFAQ: async (id: number) => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<IFaqDetailResponse>(`/faq/category/${id}`);
      if (res.data.ok) set({ faq: res.data.response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFAQStore;
