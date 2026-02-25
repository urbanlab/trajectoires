export type CompanyData = {
  id: number;
  fields: {
    [key:string] : string | number | boolean | null |undefined
  };
};
