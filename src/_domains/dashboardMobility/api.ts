import { DashboardMobilityData } from './type';

export async function getDashboardMobility(): Promise<DashboardMobilityData[]> {
  const res: Response = await fetch('/api/grist/tables/Dashboard_mobility/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: DashboardMobilityData[];
  } = await res.json();

  return data.records;
}
