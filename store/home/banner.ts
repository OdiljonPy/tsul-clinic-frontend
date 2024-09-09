import { create } from "zustand";
import API from "@/lib/axios";
import { IBannerItem } from "@/types/home/banner";
import { ApiResponse } from "@/types/api-response";

type BannerStoreType = {
  bannerItems: IBannerItem[];
  loading: boolean;
  error: boolean;
  fetchBannerItems: () => Promise<void>;
};

const useBannerStore = create<BannerStoreType>((set) => ({
  bannerItems: [],
  loading: false,
  error: false,

  fetchBannerItems: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IBannerItem>>("/banners/");
      if (res.data.ok) set({ bannerItems: res.data.response, error: false });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useBannerStore;
