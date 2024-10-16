import { create } from "zustand";
import API from "@/lib/axios";
import {
  IRatedData,
  TypeRatingRes,
  TypeRatingStore,
} from "@/types/rating/rating";
import { ApiResponse } from "@/types/api-response";

const useRatingStore = create<TypeRatingStore>((set) => ({
  loading: false,
  sendLoad: false,
  error: false,
  isRated: false,
  fetchRatedCheck: async (id: number) => {
    try {
      set({ loading: true });
      const response = await API.get<TypeRatingRes>(`/evaluation/${id}/`);
      const res = response.data;
      if (res.ok) {
        set({ isRated: res.response });
      }
      return res;
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  postRating: async ({ id, data }: { id: number; data: IRatedData }) => {
    try {
      set({ sendLoad: true });
      const response = await API.post<ApiResponse<IRatedData>>(
        `/evaluation/${id}/`,
        data,
      );

      return response.data;
    } catch {
      set({ error: true });
    } finally {
      set({ sendLoad: false });
    }
  },
}));

export default useRatingStore;
