export interface IStatistics {
  id: number;
  customers_number: number;
  services_number: number;
  service_indicator: number;
}

export interface StatisticsResponse {
  response: IStatistics;
  ok: boolean;
}
