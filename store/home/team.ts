import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import { ITeam } from "@/types/home/team";

type TeamStoreType = {
  team: ITeam[];
  loading: boolean;
  error: boolean;
  fetchTeam: () => Promise<void>;
};

const useTeamStore = create<TeamStoreType>((set) => ({
  team: [],
  loading: false,
  error: false,
  fetchTeam: async () => {
    set({ loading: true });
    try {
      const res = await API.get<ApiResponse<ITeam>>("/team/");
      const data = res.data;
      if (data.ok) set({ team: data.response, loading: false });
    } catch (err) {
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useTeamStore;