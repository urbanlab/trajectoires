/// <reference types="vite/client" />
import { EmployeesData } from './type';

interface EmployeeProps {
    mail: string,
    postalAddress: string
}


export async function getEmployeesFromGrist (companyId: number) {
    const filter = {"ref_companies_id":[companyId]}
    const encryptedFilter = encodeURIComponent(JSON.stringify(filter));
    const response = await fetch(`/api/grist/tables/Employees/records?filter=${encryptedFilter}`)
    const data = await response.json()
    
    return data.records
}

export async function CancelEmployeesFromGrist ( ids:number[]) {
    try {
        const response = await fetch('/api/grist/tables/Employees/records/delete', {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids)
        })
    } catch (error) {
        throw new Error(`Erreur de connexion`);
    }
}

export async function SendEmployeesToGrist({rows, companyId}: {rows:string[][], companyId:number}) {
    

    for (const [index, row] of rows.entries()) {
        const employee: EmployeeProps = 
        {
            mail: row[1],
            postalAddress: `${row[2] ?? ""} ${row[3] ?? ""}, ${row[4] ?? ""} ${row[5] ?? ""} `
        }

        try {
    
            const response = await fetch('/api/grist/tables/Employees/records', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "records":[
                        {
                            "fields": {
                                "email": employee.mail,
                                "postal_address": employee.postalAddress,
                                "ref_companies_id": companyId
                            }
                        }
                    ]
                }) 
            })
    
            if (!response.ok){
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Erreur lors de l'écriture sur Grist à la ligne ${index + 1 }.`);
            }
    
        } catch (error) {
            if (error instanceof Error) throw error;
            throw new Error(`Erreur de connexion au serveur de Grist à la ligne ${index + 1 }.`);
        }


    }

    

    
}
