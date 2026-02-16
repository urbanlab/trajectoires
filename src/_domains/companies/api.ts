import { CompanyData } from './type';

export async function getCompanies(): Promise<CompanyData[]> {
  const res: Response = await fetch('/api/grist/tables/Companies/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: CompanyData[];
  } = await res.json();

  return data.records;
}

export async function getCompanyById(
  companyId: number,
): Promise<CompanyData | undefined> {
  const res: Response = await fetch('/api/grist/tables/Companies/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: CompanyData[];
  } = await res.json();

  return data.records.find((company) => company.id === companyId);
}
