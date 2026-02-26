import {useState, useEffect} from 'react'
import {CardStep} from '@Components/cardStep'
import content from '@/content.json'
import ModuleCompletion from '@Components/ModuleCompletion'
import ModuleEnquete from '@Components/ModuleEnquete'
import Modale from '@Components/modale'
import { useNavigate } from 'react-router-dom';
import {useForm} from '@/stores/form'
import { getFromGrist } from '@/_domains/companies/api';
import { useAuth } from '@Hooks/auth';
import {getEmployeesFromGrist} from '@Domains/employees/api'


export function PageMenu() {
  const StoreForm = useForm((s) => s)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const {user} = useAuth()
  if (!user) {
    return 
  }
  const companyId = user.fields.ref_company_id
  const form = useForm((s) => s)
  console.log("form", form)
  const getEmployeesCompletion = useForm((s) => s.getEmployeesCompletion)
  const getEntrepriseCompletion = useForm((s) => s.getEntrepriseCompletion)
  const StepOneFinished = (getEntrepriseCompletion() === 100)
  const StepTwoFinished = (getEmployeesCompletion() === 100)
  const isEnqueteReady = StepOneFinished && StepTwoFinished

    useEffect(() => {
      const hasSeenModal = localStorage.getItem('hasSeenModal')
      if (!hasSeenModal){
        setOpen(true)
        localStorage.setItem('hasSeenModal', 'true')
      }
      const loadData = async () => {
      const data = await getFromGrist(companyId)
      const employees = await getEmployeesFromGrist(companyId)
      const formattedData = data.records[0]
      StoreForm.setForm(formattedData)
      StoreForm.setEmployees(employees)
      }
      loadData()
    }, [])
  

  const onClose = () => {
    setOpen(false)
  }


  const onClick = (url: string) => {
    navigate(`/${url}`)
  }
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15 ">
        <CardStep title="Étape 1" subtitle="Fiche entreprise" text={content.Step1.text} buttonConfig={{onPress:() => onClick('fiche-entreprise'), bgColor: "red", title:"Compléter"}} >
          <ModuleCompletion percentage={getEntrepriseCompletion()}></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 2" subtitle="Informations salariés" text={content.Step2.text } buttonConfig={{onPress:() => onClick('informations-salaries'), bgColor: "red",  title:"Compléter"}} >
          <ModuleCompletion percentage={getEmployeesCompletion()}></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 3" subtitle="Enquête" text={content.Step3.text} buttonConfig={{onPress:()=> onClick('url'), bgColor: "red", disabled: !isEnqueteReady, title:"Lancer l'enquête"}}>
          <ModuleEnquete unlocked={isEnqueteReady}/>
        </CardStep>
      
      </div>
      <Modale isOpen={open} onClose={onClose}/>
    </div>
  );
}
