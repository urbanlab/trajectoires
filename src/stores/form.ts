import {create} from "zustand"

interface Form {
    id : number
    fields : {
        [key:string] : string | boolean | number | null | undefined
    }
}

interface Employee {
    id: number,
    fields: {
        email: string,
        postal_address: string,
    }

}

interface FormStore {
    companyId: number | null
    employees: Employee[] 
    form: Form | undefined
    setCompanyId: (companyId: number) => void
    setEmployees: (data: Employee[] | null) => void
    setForm: (data: Form | null) => void
    getCompletion: (categorie: string) => number
    getEntrepriseCompletion: () => number
    getEmployeesCompletion: () => number
}


const FIELDS_BY_CATEGORY = {
    generaux: ['Nom', 'Prenom', 'Siret', 'Code_APE', 'Secteur_activite', 'Numero_voie', 'Nom_voie', 'Code_Postal', 'Commune', 'Nb_salaries', 'Nb_Interim', 'Nb_jours_travailles', 'Horaires_Travail'],
    vehicules: ['Nb_poids_lourds_critair0', 'Nb_poids_lourds_critair1', 'Nb_poids_lourds_critair2', 'Nb_poids_lourds_critair3_', 'Nb_voiture_fonction_critair0', 'Nb_voiture_fonction_critair1', 'Nb_voiture_fonction_critair2', 'Nb_voiture_fonction_critair3_', 'Nb_voiture_service_critair0', 'Nb_voiture_service_critair1', 'Nb_voiture_service_critair2', 'Nb_voiture_service_critair3_', 'Nb_velo_service', 'Nb_velo_fonction'],
    infra: ['Nb_Places_covoit', 'Nb_Places_borne', 'Nb_Places_normales', 'Nb_Velo_abritees', 'Nb_Velo_securisees', 'Nb_Velo_normales', 'Places_velo_recharge', 'Nb_Velo_recharge', 'Nb_Douches', 'Nb_vestiaires', 'Nb_espaces_reparation'],
    incitation: ['FMD', 'Pourc_remb_transport', 'Nb_pers_FMD', 'Nb_abo_remb', 'Montant_total_remb', 'Outil_MER_covoit', 'Deja_fait_enquete_mob']
};


export const useForm = create<FormStore>((set, get:any) => ({
    companyId: null,
    employees: [],
    form: undefined,

    setCompanyId: (companyId: number) => set({companyId: companyId}),
    setEmployees: (data: any) => set({employees: data}),
    setForm: (data: any) => set({form: data}),


    getCompletion: (category) => {
        const data = get().form?.fields || undefined
        if (data){
            const requiered_fields = (FIELDS_BY_CATEGORY as any)[category]
            const isComplete = requiered_fields.every((fieldName: string) => 
                data[fieldName] !== null 
            )
            return isComplete ? 100 : 0

        } else {
            return 0
        }
    },
    getEntrepriseCompletion: () => {
        const categories = Object.keys(FIELDS_BY_CATEGORY)
        const total = categories.length + 1
        let completed = 1
        for (const key of categories) {
            const result = get().getCompletion(key)
            if (result === 100){
                completed += 1
            }
            console.log("total", total)
        }
        const percentage = (completed / total) * 100

        return percentage
    }, 

    getEmployeesCompletion: () => {
        const employees = get().employees 
        if (employees.length !== 0){
            return 100
        } else {
            return 0
        }
    }
    
}))

