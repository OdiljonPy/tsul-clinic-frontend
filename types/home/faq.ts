export interface IFaq {
  id: number;
  question: string;
  answer: string;
  created_at: string;
}

export interface IFaqDetail {
  faqs: IFaq[];
  id: number;
  name: string;
}

export interface IFaqDetailResponse {
  ok: boolean;
  response: IFaqDetail;
}

export interface IFaqCategory {
  id: number;
  name: string;
}
