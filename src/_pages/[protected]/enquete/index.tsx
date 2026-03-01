
import {useState, useEffect} from 'react'
import {Spin} from 'antd'
import { useAuth } from '@Hooks/auth';
import { useNavigate } from 'react-router-dom';
import EnqueteDemarree from '@Components/Enquete_Demarree'
import EnqueteCloturee from '@Components/Enquete_Cloturee'
//API:
import { getEmployeesFromGrist } from '@/_domains/employees/api';
import { UpdateSurvey } from '@/_domains/survey/api';
import { getForms } from '@/_domains/forms/api';
import { getSurvey } from '@/_domains/survey/api';
//STORE
import { useSurvey } from '@/stores/survey';
import { useForm } from '@/stores/form';
import { useEnquete } from '@/stores/enquete_results';

export function Enquete() {
    const {user} = useAuth()
    const setEmployees = useForm((s) => s.setEmployees)
    const getEmployees = useForm((s) => s.employees)
    const setResults = useEnquete((s) => s.setResults)
    const Results = useEnquete((s) => s.enquete_results)
    const setSurvey = useSurvey((s) => s.setSurvey)
    const Survey = useSurvey((s) => s.survey)
    const [finished, isFinished] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [surveyId, setsurveyId] = useState<number>()
    const navigate = useNavigate()
    const updateState = () => {
        isFinished(!finished)
    }
    const companyUuid = user?.fields.ref_company_UUID
    const companyId = user?.fields.ref_company_id
    const responses = Results?.length
    const employees = getEmployees?.length

    const loadData = async () => {
        if (!companyId) {
            return
        }
        setIsLoading(true)
        try{
            const employees = await getEmployeesFromGrist(companyId)
            const data = await getForms(companyId)
            const data_survey = await getSurvey(companyId)
            setResults(data)
            setEmployees(employees)
            setSurvey(data_survey.fields)
            setsurveyId(data_survey.id)
            if (data_survey.fields.Statut === 'Démarrée'){
                isFinished(false)
            } else if (data_survey.fields.Statut ==='Terminée') {
                isFinished(true)
            }
            setIsLoading(false)
        } catch (error){
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [companyId])

    
    const UpdateData = async () => {
        try {
            await UpdateSurvey(surveyId!)
            await loadData()


        } catch (error) {
            console.error(error)
        }
    }
    if (!user) {
        return <div>Chargement de l'utilisateur...</div>;
    }
    if (isLoading) {
        return <div className=" h-screen flex items-center justify-center"><Spin/></div>
    }
    
    return (
        <>

        { finished ? 
            <EnqueteCloturee survey={Survey} nbr_of_responses={responses} nbr_of_employees={employees} />
            : 
            <EnqueteDemarree updateData={UpdateData} uuid={companyUuid!} survey={Survey} nbr_of_responses={responses} nbr_of_employees={employees}/>
        }
        </>
    )
}