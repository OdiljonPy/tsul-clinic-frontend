export enum MeetingType {
  phone,
  video,
  meeting,
}

export interface ICreateMeeting {
  customer_full_name: string;
  customer_phone: string;
  meeting_type: MeetingType;
  short_description: string;
  language: "uz" | "ru" | "en";
}
