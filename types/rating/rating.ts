import {ApiResponse} from "@/types/api-response";

export interface TypeRatingRes {
  ok: boolean;
  response: boolean;
}

export interface IRatedData {
  rating: number;
  description: string;
}

export interface TypeRatingStore {
  loading: boolean;
  sendLoad: boolean;
  error: boolean;
  isRated: boolean;
  fetchRatedCheck: (id: number) => Promise<TypeRatingRes | undefined>;
  postRating: ({ id, data }: { id: number; data: IRatedData }) => Promise<ApiResponse<IRatedData> | undefined>;
}
