import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { IAchievement } from "@/types/achievement/achievement";

type TypeAchievementStore = {
  loading: boolean;
  error: boolean;
  achievements: IAchievement[];
  fetchAchievements: () => Promise<void>;
};

const useAchievement = create<TypeAchievementStore>((set) => ({
  loading: false,
  error: false,
  achievements: [],

  fetchAchievements: async () => {
    try {
      set({ loading: true });
      const response =
        await API.get<ApiResponse<IAchievement>>("/achievement/");
      const data = response.data;
      if (data.ok) set({ achievements: data.response, loading: false });
    } catch (err) {
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useAchievement;
