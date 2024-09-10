export interface IServices {
  id: number;
  name: string;
  category: string;
  image: string;
  content: string;
}

export interface IServicesCategory {
  id: number;
  name: string;
}

export interface IServiceDetailRes {
  ok: boolean;
  response: IServices;
}
