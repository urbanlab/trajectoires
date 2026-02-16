export enum UserRole {
  Référent = 'Référent',
  Collectivité = 'Collectivité',
}

export type UserData = {
  id: number;
  fields: {
    Firstname: string;
    Lastname: string;
    Email: string;
    Role: UserRole;
    Password: string;
    ref_company: number;
    ref_company_Name : string
  };
};
