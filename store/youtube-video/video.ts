import { create } from "zustand";
import API from "@/lib/axios";

type TVideoResponse = {
  ok: boolean;
  response: string;
};

type TVideoStore = {
  loading: boolean;
  error: boolean;
  video_url: any;
  fetchVideoUrl: () => Promise<void>;
};

const useVideoStore = create<TVideoStore>((set) => ({
  loading: false,
  error: false,
  video_url: "",
  fetchVideoUrl: async () => {
    try {
      set({ loading: true, error: false });
      const res = await API.get<TVideoResponse>("/manual/");
      const data = res.data;
      if (data.ok) set({ video_url: data.response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useVideoStore;
