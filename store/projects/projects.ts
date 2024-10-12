import { IProjects } from "@/types/projects/projects";
import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";

type TypeProjectStore = {
  loading: boolean;
  error: boolean;
  projects: IProjects[];
  fetchProjects: () => Promise<void>;
};

const useProjectsStore = create<TypeProjectStore>((set) => ({
  loading: false,
  error: false,
  projects: [] as IProjects[],
  fetchProjects: async () => {
    try {
      set({ loading: true });
      const response = await API.get<ApiResponse<IProjects>>("/projects/");
      const data = response.data;
      if (data.ok) set({ projects: data.response, loading: false });
    } catch (err) {
      set({ error: true, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProjectsStore;
