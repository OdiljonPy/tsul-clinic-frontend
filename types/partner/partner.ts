export interface IPartner {
  id: number;
  full_name: string;
  position: string;
  image: string;
  category: number;
}

export interface IPartnerResponse {
  ok: boolean;
  response: {
    "1": IPartner[];
    "2": IPartner[];
    "3": IPartner[];
  };
}
