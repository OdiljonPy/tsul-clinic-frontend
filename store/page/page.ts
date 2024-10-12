import { create } from "zustand";
import API from "@/lib/axios";

type IResponse = {
  ok: boolean;
  response: boolean;
};

type TypeIsActivePage = {
  isActive: boolean;
  fetchReq: () => Promise<IResponse | undefined>;
};

const useIsActivePage = create<TypeIsActivePage>((set) => ({
  isActive: false,
  fetchReq: async () => {
    try {
      const res = await API.get<IResponse>("/document/page/");
      const data = res.data;
      if (data.ok) {
        set({ isActive: data.response });
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useIsActivePage;
