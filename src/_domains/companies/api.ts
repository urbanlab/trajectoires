import { CompanyData } from './type';

export  async function getFromGrist (companyId: number) {
  const filter = {"id":[companyId]}
  const encryptedFilter = encodeURIComponent(JSON.stringify(filter));


  try {
      const response = await fetch(`/api/grist/tables/Companies/records?filter=${encryptedFilter}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
      throw new Error("erreur")
    }

    const data = await response.json();
    return data
  } catch (error) {

  }

}

export  async function sendToGrist (values: any, companyId: number) {
  const data = {...values}

  if (Array.isArray(data.Horaires_Travail)) {
    data.Horaires_Travail = ["L", ...data.Horaires_Travail]
  }

  if (values.Numero_voie) {
    const address = `${values.Numero_voie} ${values.Nom_voie}, ${values.Code_Postal} ${values.Commune} `
    data.Adresse_site = address

  }
  


  try {
      const response = await fetch('/api/grist/tables/Companies/records', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "records":[
                { "id": companyId,
                  "fields": data
                }
            ],
            "onMany": "all", 
            "require": ["id"]
        }) 
    })

  } catch (error) {

  }

}











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

export async function getCompanyById(companyId: number,): Promise<CompanyData | undefined> {
  const res: Response = await fetch('/api/grist/tables/Companies/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: CompanyData[];
  } = await res.json();

  return data.records.find((company) => company.id === companyId);
}

