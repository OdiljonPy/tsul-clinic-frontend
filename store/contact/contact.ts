import { create } from "zustand";
import { IContact } from "@/types/contact/contact";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";

type ContactStoreType = {
  loading: boolean;
  error: boolean;
  postContact: (data: IContact) => Promise<ApiResponse<IContact> | undefined>;
};

const useContactStore = create<ContactStoreType>((set) => ({
  loading: false,
  error: false,
  postContact: async (data: IContact) => {
    set({ loading: true, error: false });
    try {
      const res = await API.post<ApiResponse<IContact>>(
        "create/contacts/",
        data,
      );
      if (res.data.ok) {
        set({ loading: false, error: false });
      }
      return res.data;
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useContactStore;
