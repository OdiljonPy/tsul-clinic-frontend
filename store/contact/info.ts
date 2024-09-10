import { create } from "zustand";
import { IInfo, IInfoResponse } from "@/types/contact/info";
import API from "@/lib/axios";

type InfoStoreType = {
  info: IInfo;
  loading: boolean;
  error: boolean;
  fetchInfo: () => Promise<void>;
};

const useInfoStore = create<InfoStoreType>((set) => ({
  info: {} as IInfo,
  loading: false,
  error: false,
  fetchInfo: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<IInfoResponse>("/info/");
      if (res.data.ok) {
        set({ info: res.data.response, loading: false, error: false });
      }
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useInfoStore;
