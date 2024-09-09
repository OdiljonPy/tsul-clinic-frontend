export interface IAbout {
  id: number;
  about_us: string;
  our_goal: string;
  image: string;
}

export interface IAboutResponse {
  ok: boolean;
  response: IAbout;
}
