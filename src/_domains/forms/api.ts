import { FormData } from './type';

export async function getForms(companyId: number) {

  const filter = {"ref_company_ID":[companyId]}
  const encryptedFilter = encodeURIComponent(JSON.stringify(filter));
  try {
      const res: Response = await fetch(`/api/grist/tables/Forms/records?filter=${encryptedFilter}`);
    
      if (!res.ok) {
        throw new Error(`Erreur API : ${res.status}`);
      }
      const data: {
        records: FormData[];
      } = await res.json();
    
      return data.records;

  } catch (error){
    throw error
  }
}

