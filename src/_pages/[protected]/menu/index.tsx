import {useState, useEffect} from 'react'
import {CardStep} from '@Components/cardStep'
import content from '@/content.json'
import { mdiLockOutline } from '@mdi/js';
import ModuleCompletion from '@Components/ModuleCompletion'
import Modale from '@Components/modale'
import { useNavigate } from 'react-router-dom';






export function PageMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }
  useEffect(() => {
    setOpen(true)
  }, [])

  const onClick = (url: string) => {
    navigate(`/${url}`)
  }
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15 ">
        <CardStep title="Étape 1" subtitle="Fiche entreprise" text={content.Step1.text} buttonConfig={{onPress:() => onClick('url'), bgColor: "red", title:"Compléter"}} >
          <ModuleCompletion></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 2" subtitle="Informations salariés" text={content.Step2.text } buttonConfig={{onPress:() => onClick('informations-salaries'), bgColor: "red",  title:"Compléter"}} >
          <ModuleCompletion></ModuleCompletion>
        </CardStep>
        <CardStep title="Étape 3" subtitle="Enquête" text={content.Step3.text} buttonConfig={{onPress:()=> onClick('url'), bgColor: "red", disabled: true, title:"Lancer l'enquête", iconPath: mdiLockOutline}}>
          <ModuleCompletion blocked={true}/>
        </CardStep>
      
      </div>
      <Modale isOpen={open} onClose={onClose}/>
    </div>
  );
}
