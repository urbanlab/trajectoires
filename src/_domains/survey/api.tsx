


export async function createSurvey(companyId: number){

    const now = new Date()
    const formatted_now = now.getTime()/1000
    const threeMonthLater = now.setMonth(now.getMonth() + 3)
    const formatted_threeMonth = Math.floor(now.getTime() / 1000);

    const records = [{
            fields: {
                "Date_debut": formatted_now,
                "Date_de_fin": formatted_threeMonth, 
                "Statut": "Démarrée",
                "ref_company_id": companyId
            }
        }];

    try{

        const res: Response = await fetch(`/api/grist/tables/Surveys/records`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ records }) 
        });
        if (!res.ok) {
            throw new Error
        }


    } catch(error) {
        throw new Error ('erreur lors de la creation de survey')
    }
    
}


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
            
            throw new Error
        };
        
    } catch (error){    
            console.log('error')
    }
}
