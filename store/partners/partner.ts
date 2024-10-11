import { create } from "zustand";
import API from "@/lib/axios";
import { IPartners } from "@/types/partner/partner";
import { ApiResponse } from "@/types/api-response";

type TypePartnerStore = {
  partners: IPartners[];
  loading: boolean;
  error: boolean;
  fetchPartners: () => Promise<void>;
};

const usePartnerStore = create<TypePartnerStore>((set) => ({
  partners: [],
  loading: false,
  error: false,
  fetchPartners: async () => {
    set({ loading: true, error: false });
    try {
      const response = await API.get<ApiResponse<IPartners>>("/partners/");
      const res = response.data;
      if (res.ok) {
        set({ partners: res.response, error: false });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default usePartnerStore;
