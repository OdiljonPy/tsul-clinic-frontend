import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";

type ContactStoreType = {
  loading: boolean;
  error: boolean;
  postContact: (data: FormData) => Promise<ApiResponse<FormData> | undefined>;
};

const useContactStore = create<ContactStoreType>((set) => ({
  loading: false,
  error: false,
  postContact: async (data: FormData) => {
    set({ loading: true, error: false });
    try {
      const res = await API.post<ApiResponse<FormData>>(
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
