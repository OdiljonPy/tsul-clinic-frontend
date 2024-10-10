import { create } from "zustand";
import API from "@/lib/axios";
import {
  IComplaintDocs,
  ResponseComplaint,
} from "@/types/complaint-docs/complaint-docs";

type TypeComplaintStore = {
  loading: boolean;
  error: boolean;
  postComplaint: ({
    id,
    data,
  }: {
    id: number;
    data: IComplaintDocs;
  }) => Promise<ResponseComplaint>;
};

const useComplaintStore = create<TypeComplaintStore>((set) => ({
  loading: false,
  error: false,
  postComplaint: async ({ id, data }: { id: number; data: IComplaintDocs }) => {
    set({ loading: true });
    try {
      const response = await API.post(`/complaint/${id}/`, data);
      return response.data;
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useComplaintStore;
