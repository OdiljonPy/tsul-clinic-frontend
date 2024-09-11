export enum DocumentStatus {
  pending,
  accepted,
  completed,
  cancelled,
}

export const DocumentStatusInfo: Record<DocumentStatus, string> = {
  [DocumentStatus.pending]: "pending",
  [DocumentStatus.accepted]: "accepted",
  [DocumentStatus.completed]: "completed",
  [DocumentStatus.cancelled]: "cancelled",
};

export interface IDocument {
  id: number;
  document_name: string;
  document: string;
}

export interface ICheckDocument {
  id: number;
  order_number: string;
  document_category: number;
  document_type: number;
  customer_full_name: string;
  customer_email: string;
  customer_phone: string;
  created_at: string;
  customer_message: string;
  status: DocumentStatus;
  ready_documents: IDocument[];
}

export interface CheckDocumentResponse {
  ok: boolean;
  response: ICheckDocument;
}
