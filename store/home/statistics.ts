import { create } from "zustand";
import API from "@/lib/axios";
import { IStatistics, StatisticsResponse } from "@/types/home/statistics";

type StatisticsStoreType = {
  statistics: IStatistics;
  loading: boolean;
  error: boolean;

  fetchStatistics: () => Promise<StatisticsResponse | undefined>;
};

const useStatisticsStore = create<StatisticsStoreType>((set) => ({
  statistics: {} as IStatistics,
  loading: false,
  error: false,

  fetchStatistics: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<StatisticsResponse>("/statistics/");
      if (res.data.ok) {
        set({ statistics: res.data.response, error: false });
      }
      return res.data;
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStatisticsStore;
