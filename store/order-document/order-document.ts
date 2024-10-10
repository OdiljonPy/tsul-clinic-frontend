import { create } from "zustand";
import API from "@/lib/axios";
import { ApiResponse } from "@/types/api-response";
import {
  IDocumentCategory,
  IPostOrderDocument,
} from "@/types/order-document/document-category";

type OrderDocumentType = {
  document_category: IDocumentCategory[];
  loading: boolean;
  creatLoading: boolean;
  error: boolean;
  fetchDocumentCategory: () => Promise<void>;
  createOrderDocument: (
    data: FormData,
  ) => Promise<ApiResponse<IPostOrderDocument> | undefined>;
};

const useOrderDocument = create<OrderDocumentType>((set) => ({
  document_category: [],
  loading: false,
  creatLoading: false,
  error: false,

  fetchDocumentCategory: async () => {
    set({ loading: true, error: false });
    try {
      const res = await API.get<ApiResponse<IDocumentCategory>>("/category/");
      if (res.data.ok)
        set({
          document_category: res.data.response,
        });
    } catch {
      set({ loading: false, error: true });
    } finally {
      set({ loading: false });
    }
  },

  createOrderDocument: async (data: FormData) => {
    set({ creatLoading: true, error: false });
    try {
      const res = await API.post<ApiResponse<IPostOrderDocument>>(
        "/create/document/",
        data,
      );
      if (res.data.ok) {
        set({ creatLoading: false });
      }
      return res.data;
    } catch {
      set({ creatLoading: false, error: true });
    } finally {
      set({ creatLoading: false });
    }
  },
}));

export default useOrderDocument;
