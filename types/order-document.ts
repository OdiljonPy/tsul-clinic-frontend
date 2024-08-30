export interface IOrderDocument {
  id: number;
  name: string;
  documents: {
    id: number;
    name: string;
  }[];
}
