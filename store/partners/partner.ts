import { create } from "zustand";
import API from "@/lib/axios";
import { IPartnerResponse } from "@/types/partner/partner";

type TypePartnerStore = {
  partners: IPartnerResponse["response"];
  loading: boolean;
  error: boolean;
  fetchPartners: () => Promise<void>;
};

const usePartnerStore = create<TypePartnerStore>((set) => ({
  partners: {} as IPartnerResponse["response"],
  loading: false,
  error: false,
  fetchPartners: async () => {
    set({ loading: true, error: false });
    try {
      const response = await API.get<IPartnerResponse>("/partners/");
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
