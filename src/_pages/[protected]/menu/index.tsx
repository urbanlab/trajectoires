import {useState, useEffect} from 'react'
import {CardStep} from '@Components/cardStep'
import content from '@/content.json'
import ModuleCompletion from '@Components/ModuleCompletion'
import ModuleEnquete from '@Components/ModuleEnquete'
import Modale from '@Components/modale'
import { useNavigate } from 'react-router-dom';
import {useForm} from '@/stores/form'
import { useSurvey } from '@/stores/survey'
import { getFromGrist } from '@/_domains/companies/api';
import { useAuth } from '@Hooks/auth';
import {getEmployeesFromGrist} from '@Domains/employees/api'
import { createSurvey } from '@/_domains/survey/api'
import { getSurvey } from '@/_domains/survey/api';



export function PageMenu() {
  const setForm = useForm((s) => s.setForm)
  const setEmployees = useForm((s) => s.setEmployees)
  const setSurvey = useSurvey((s) => s.setSurvey)
  const [open, setOpen] = useState(false)
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const {user} = useAuth()
  if (!user) {
    return 
  }
  const companyId = user.fields.ref_company_id
  const Survey = useSurvey((s)=> s.survey)
  const getEmployeesCompletion = useForm((s) => s.getEmployeesCompletion)
  const getEntrepriseCompletion = useForm((s) => s.getEntrepriseCompletion)
  const StepOneFinished = (getEntrepriseCompletion() === 100)
  const StepTwoFinished = (getEmployeesCompletion() === 100)
  const isEnqueteReady = StepOneFinished && StepTwoFinished
  const surveyExist = Survey?.id

  
  const loadData = async () => {
    isLoading(true)
    try{
      const data = await getFromGrist(companyId)
      const formattedData = data.records[0]
      const employees = await getEmployeesFromGrist(companyId)
      const survey = await getSurvey(companyId)
      setForm(formattedData)
      setEmployees(employees)
      setSurvey(survey)
      isLoading(false)
    } catch (error) {
        isLoading(false)
        setError("Un Erreur s'est produite lors du chargement des données.")
        
      }
    }
  
  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal')
    if (!hasSeenModal){
      setOpen(true)
      localStorage.setItem('hasSeenModal', 'true')
    }
      loadData()
    }, [])
    
    
    const onClose = () => {
      setOpen(false)
    }
    
    
    const navigateTo = (url: string) => {
      navigate(`/${url}`)
    }
    
    const sendSurvey = async() => {
      isLoading(true)
      try {
        await createSurvey(companyId)
        isLoading(false)
        loadData()
      } catch (error) {
        setError("erreur lors de la creation de l'enquete")
        isLoading(false)
      }
    }
    
    const functionButton = surveyExist ? () => navigateTo("enquete") : sendSurvey

    const titleButton = surveyExist ? "Suivre l'avancement de l'enquête" : "lancer l'enquête"
    
    
    return (
      <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15 ">
        <CardStep title="Étape 1" subtitle="Fiche entreprise" text={content.Step1.text} buttonConfig={{onPress:() => navigateTo('fiche-entreprise'), bgColor: "red", title:"Compléter"}} >
          <ModuleCompletion percentage={getEntrepriseCompletion()} isLoading={loading}></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 2" subtitle="Informations salariés" text={content.Step2.text } buttonConfig={{onPress:() => navigateTo('informations-salaries'), bgColor: "red",  title:"Compléter"}} >
          <ModuleCompletion percentage={getEmployeesCompletion()} isLoading={loading}></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 3" subtitle="Enquête" text={content.Step3.text} buttonConfig={{onPress:()=> functionButton(), bgColor: "red", disabled: !isEnqueteReady, title: titleButton}}>
          <ModuleEnquete unlocked={isEnqueteReady} isLoading={loading}/>
        </CardStep>
      
      </div>
      <Modale isOpen={open} onClose={onClose}/>
    </div>
  );
}
