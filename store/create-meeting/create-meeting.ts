import { create } from "zustand";
import { ICreateMeeting } from "@/types/create-meeting/create-meeting";
import { ApiResponse } from "@/types/api-response";
import API from "@/lib/axios";

type CreateMeetingType = {
  loading: boolean;
  error: boolean;
  postCreateMeeting: (
    data: ICreateMeeting,
  ) => Promise<ApiResponse<ICreateMeeting> | undefined>;
};

const useCreateMeetingStore = create<CreateMeetingType>((set) => ({
  loading: false,
  error: false,

  postCreateMeeting: async (data: ICreateMeeting) => {
    set({ loading: true, error: false });
    try {
      const res = await API.post<ApiResponse<ICreateMeeting>>(
        "/create/meeting/",
        data,
      );
      if (res.data.ok) {
        set({ loading: false, error: false });
      }
      return res.data;
    } catch (err) {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCreateMeetingStore;
