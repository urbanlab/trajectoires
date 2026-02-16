import { FormData } from './type';

export async function getForms(): Promise<FormData[]> {
  const res: Response = await fetch('/api/grist/tables/Forms/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: FormData[];
  } = await res.json();

  return data.records;
}

export async function getFormsByCompanyId(companyId: number): Promise<FormData[]> {
  const res: Response = await fetch('/api/grist/tables/Forms/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: FormData[];
  } = await res.json();

  return data.records.filter((form) => form.fields.ref_company === companyId);
}
