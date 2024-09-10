import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IServices } from "@/types/services/services";

type ServicesStoreType = {
  services: IServices[];
  loading: boolean;
  error: boolean;
  fetchServices: () => Promise<void>;
};

const useServicesStore = create<ServicesStoreType>((set) => ({
  services: [],
  loading: false,
  error: false,

  fetchServices: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IServices>>("/services/");
      if (res.data.ok)
        set({ services: res.data.response, loading: false, error: false });
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useServicesStore;
