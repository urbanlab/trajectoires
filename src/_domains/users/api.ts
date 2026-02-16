import { UserData } from './type';

export async function getUsers(): Promise<UserData[]> {
  const res: Response = await fetch('/api/grist/tables/Users/records');
  if (!res.ok) {
    throw new Error(`Erreur API : ${res.status}`);
  }
  const data: {
    records: UserData[];
  } = await res.json();
  
  return data.records;
}

export async function loginUser(email: string, password: string) {
  const allUsers = await getUsers();
  const foundUser = allUsers.find(
    (u) => u.fields.Email === email && u.fields.Password === password,
  );

  if (!foundUser) {
    throw new Error('Identifiants incorrects');
  }

  return foundUser;
}
