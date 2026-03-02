import { UserData } from './type';



export async function getUserByCompany(companyId: number) {
  const filter = {"ref_company_id": [companyId]}
  const ecryptedfilter = encodeURIComponent(JSON.stringify(filter));

  try  {
    const res = await fetch(`/api/grist/tables/Users/records?filter=${ecryptedfilter}`, {
      method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!res.ok) {
      throw new Error ('une erreur est survenue')
    }
    const data = await res.json()
    return data.records
    
  } catch (error) {
    throw new Error ("une erreur est survenue")
  }
}
export async function getUser(email:string): Promise<UserData[]> {
  const filter = {"Email": [email]}
  const encryptedfilter = encodeURIComponent(JSON.stringify(filter));


  const res: Response = await fetch(`/api/grist/tables/Users/records?filter=${encryptedfilter}`);
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: UserData[];
  } = await res.json();

  return data.records;
}

export async function loginUser(email: string, password: string) {
  
  const allUsers = await getUser(email);
  const foundUser = allUsers.find(
    (u) => u.fields.Email === email && u.fields.Password === password,
  );

  if (!foundUser) {
    throw new Error('Identifiants incorrects');
  }
  if (foundUser.fields.Role === "Salarié"){
    throw new Error('Acces refusé');
  }
  console.log("user", foundUser)
  return foundUser;
}
