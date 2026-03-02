

export type UserData = {
  id: number;
  fields: {
    Prenom: string;
    Nom: string;
    Email: string;
    Role: string;
    Password: string;
    ref_company_id: number;
    ref_company_Nom : string
    ref_company_UUID: string
  };
};
