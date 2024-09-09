export interface ApiPagination<T> {
  ok: boolean;
  response: {
    content: T[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    totalElements: number;
    size: number;
    totalPages: number;
  };
}
