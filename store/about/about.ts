import { create } from "zustand";
import { IAbout, IAboutResponse } from "@/types/home/about";
import API from "@/lib/axios";

type AboutStoreType = {
  about: IAbout;
  loading: boolean;
  error: boolean;
  fetchAbout: () => Promise<void>;
};

const useAboutStore = create<AboutStoreType>((set) => ({
  about: {} as IAbout,
  loading: false,
  error: false,
  fetchAbout: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<IAboutResponse>("/about/");
      set({ about: res.data.response, loading: false, error: false });
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAboutStore;
