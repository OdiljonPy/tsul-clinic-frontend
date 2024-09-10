import { create } from "zustand";
import API from "@/lib/axios";
import { IServiceDetailRes, IServices } from "@/types/services/services";

type ServiceDetailState = {
  service_detail: IServices;
  loading: boolean;
  error: boolean;
  fetchServiceDetail: (id: number) => Promise<void>;
};

const useServiceDetailStore = create<ServiceDetailState>((set) => ({
  service_detail: {} as IServices,
  loading: false,
  error: false,

  fetchServiceDetail: async (id: number) => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<IServiceDetailRes>(`/services/${id}/`);
      if (res.data.ok) set({ service_detail: res.data.response, error: false });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useServiceDetailStore;
