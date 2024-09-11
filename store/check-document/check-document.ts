import { create } from "zustand";
import API from "@/lib/axios";
import {
  CheckDocumentResponse,
  ICheckDocument,
} from "@/types/check-document/check-document";

type CheckDocumentType = {
  documentInfo: ICheckDocument;
  loading: boolean;
  error: boolean;
  checkDocumentStatus: (id: string) => Promise<void>;
};

const useCheckDocumentStore = create<CheckDocumentType>((set) => ({
  documentInfo: {} as ICheckDocument,
  loading: false,
  error: false,
  checkDocumentStatus: async (id: string) => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<CheckDocumentResponse>(
        `/check/document/${id}/`,
      );
      if (res.data.ok) set({ documentInfo: res.data.response });
    } catch {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCheckDocumentStore;
