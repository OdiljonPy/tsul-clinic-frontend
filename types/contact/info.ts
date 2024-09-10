export interface IOfficeAddress {
  id: number;
  address_name: string;
  latitude: number;
  longitude: number;
}

export interface IInfo {
  id: number;
  youtube: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  telegram: string;
  phone_number: string;
  office_address: IOfficeAddress[];
}

export interface IInfoResponse {
  ok: boolean;
  response: IInfo;
}
