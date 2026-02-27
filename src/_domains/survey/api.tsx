
export async function getSurvey(companyId: number) {

    const filter = {"ref_company_id":[companyId]}
    const encryptedFilter = encodeURIComponent(JSON.stringify(filter));
    try {
        const res: Response = await fetch(`/api/grist/tables/Surveys/records?filter=${encryptedFilter}`);
        
        if (!res.ok) {
            throw new Error(`Erreur API : ${res.status}`);
        }
        
        const data = await res.json()
        return data.records[0]
        } catch (error){
        throw error
    }
}


export async function UpdateSurvey(surveyId: number) {

    const now = new Date()
    const dateFin = now.getTime() / 1000

    const data = {
        "Date_de_fin": dateFin,
        "Statut": "Terminée"
    }
    try {
        const res: Response = await fetch(`/api/grist/tables/Surveys/records`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "records":[
                { "id": surveyId,
                "fields": data
                }
            ],
            "onMany": "all", 
            "require": ["id"]
        }) 
        })
        if (!res.ok){
            console.log("erreur grist")
            throw new Error
        };
        console.log('data envoyée')
    } catch (error){    
            console.log('error')
    }
}
