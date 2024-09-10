import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IServices, IServicesCategory } from "@/types/services/services";

type ServicesStoreType = {
  services: IServices[];
  services_copy: IServices[];
  service_category: IServicesCategory[];
  loading: boolean;
  error: boolean;
  fetchServices: () => Promise<void>;
  fetchServicesCategory: () => Promise<void>;
  filterCategory: (name: string) => void;
};

const useServicesStore = create<ServicesStoreType>((set, get) => ({
  services: [],
  services_copy: [],
  service_category: [],
  loading: false,
  error: false,

  fetchServices: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IServices>>("/services/");
      if (res.data.ok)
        set({
          services: res.data.response,
          services_copy: res.data.response,
          loading: false,
          error: false,
        });
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchServicesCategory: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IServicesCategory>>(
        "/services/category/",
      );
      if (res.data.ok)
        set({
          service_category: res.data.response,
          loading: false,
          error: false,
        });
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },

  filterCategory: (name) => {
    const services = get().services_copy;
    const filterServices = services.filter((item) => item.category === name);
    set({ services: filterServices });
  },
}));

export default useServicesStore;
