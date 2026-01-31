// Domain Entity: Estadísticas

export interface Statistic {
  id: string;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface CompanyStats {
  totalClients: Statistic;
  totalAssets: Statistic;
  yearsExperience: Statistic;
  satisfactionRate: Statistic;
}
