export interface IDocumentType {
  id: number;
  document_category: number;
  document_name: string;
  price: string;
}

export interface IDocumentCategory {
  id: number;
  category_name: string;
  document_type: IDocumentType[];
}

export interface IPostOrderDocument {
  customer_full_name: string;
  customer_phone: string;
  customer_message: string;
  document_category: number;
  document_type: number;
  file: FileList;
}
