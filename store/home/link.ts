import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { ILink } from "@/types/home/link";

type LinkStoreType = {
  links: ILink[];
  loading: boolean;
  error: boolean;
  fetchLinks: () => Promise<void>;
};

const useLinkStore = create<LinkStoreType>((set) => ({
  links: [],
  loading: false,
  error: false,
  fetchLinks: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<ILink>>("/links/");
      const data = res.data;
      if (data.ok) set({ links: data.response, loading: false });
    } catch (err) {
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
export default useLinkStore;
