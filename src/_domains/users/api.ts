import { UserData } from './type';
import { encryptPassword, decryptPassword} from '@Providers/auth/crypto-utils'

const AES_KEY = import.meta.env.VITE_AES_KEY

export async function getUserByCompany(companyId: number) {
  const filter = {"ref_company_id": [companyId]}
  const encryptedfilter = encodeURIComponent(JSON.stringify(filter));

  try  {
    const res = await fetch(`/api/grist/tables/Users/records?filter=${encryptedfilter}`, {
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
  const fetchedUsers = await getUser(email)
  const foundUser = fetchedUsers.find((u) => u.fields.Email === email)

  if (!AES_KEY) {
    console.error("Missing VITE_AES_KEY")
    throw new Error("Missing VITE_AES_KEY");
  }
  
  if (!foundUser) {
    console.error("Identifiants incorrects")
    throw new Error('Identifiants incorrects')
  } else {
    // Check Role != Salarié
    if (foundUser.fields.Role === "Salarié"){
      console.error("Acces refusé")
      throw new Error('Acces refusé')
    }

    // Decrypt password and compare
    const decryptedPwd = decryptPassword(foundUser.fields.Password, AES_KEY)
    if (password !== decryptedPwd) {
      console.error("Identifiants incorrects (decrypt)")
      throw new Error('Identifiants incorrects (decrypt)')
    }

    // Remove password field from item return and stored
    foundUser.fields.Password = ""
  }
  return foundUser
}
