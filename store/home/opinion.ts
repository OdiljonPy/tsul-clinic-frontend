import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IOpinion } from "@/types/home/opinion";

type OpinionStoreType = {
  opinion: IOpinion[];
  loading: boolean;
  error: boolean;
  fetchOpinion: () => Promise<void>;
};

const useOpinionStore = create<OpinionStoreType>((set) => ({
  opinion: [],
  loading: false,
  error: false,
  fetchOpinion: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IOpinion>>("/opinion/");
      if (res.data.ok) {
        set({ opinion: res.data.response, error: false });
      }
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useOpinionStore;
