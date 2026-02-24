import { CompanyData } from './type';

export  async function getFormGenerauxFromGrist (companyId: number) {
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
    console.log('data', data)

  } catch (error) {

  }

}

export  async function sendFormGenerauxToGrist (values: any, companyId: number) {

  const address = `${values.streetNumero} ${values.streetName}, ${values.ZipCode} ${values.District} `
  const {streetNumero, streetName, ZipCode, District, ...trimmedData} = values 
  trimmedData.Adresse_site = address


  try {
      const response = await fetch('/api/grist/tables/Companies/records', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "records":[
                { "id": companyId,
                  "fields": trimmedData
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

