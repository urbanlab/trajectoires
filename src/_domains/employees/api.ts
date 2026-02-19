/// <reference types="vite/client" />
import { EmployeesData } from './type';

interface EmployeesDataProps {

}

export async function SendEmployeesToGrist() {


    
    const response = await fetch('/api/grist/tables/Employees/records', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "records":[
                {
                    "fields": {
                        "email": "bonjour",
                        "postal_address": ""
                    }
                }
            ]
        }) 
    })
    
}
