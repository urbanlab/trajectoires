
import {useState, useEffect} from 'react'
import {Typography} from 'antd'
import Button from '@Components/Button'
import ModuleCompletion from '@Components/ModuleCompletion'
import Onglet from '@Components/fiche-entreprise/Onglets'
import FormGeneraux from '@Components/fiche-entreprise/formGeneraux'
import FormInfra from '@Components/fiche-entreprise/formInfrastructures'
import FormVehicules from '@Components/fiche-entreprise/formVehicules'
import FormIncitation from '@Components/fiche-entreprise/formIncitation'
import FormContact from '@Components/fiche-entreprise/formContact'
import { useAuth } from '@Hooks/auth';
import {CompanyData} from '@Domains/companies/type'
import {getFromGrist} from '@Domains/companies/api'
import {useForm} from '@/stores/form'
import { mdiChevronLeft,  mdiChevronRight} from '@mdi/js';
import { useNavigate } from 'react-router-dom';

export default function FicheEntreprise () {
    const StoreForm = useForm((s) => s)
    const completion = useForm((s)=> s.getCompletion)
    const EntrepriseCompletion = useForm((s) =>s.getEntrepriseCompletion )
    const navigate = useNavigate()
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState(1)
    if (!user) {
        return null
    }
    const companyId = user.fields.ref_company_id
    
    const loadData = async () => {
    const data = await getFromGrist(companyId)
    const formatedData = data.records[0]
    StoreForm.setForm(formatedData)
    }
    useEffect(() => {
        loadData()
    }, [])

    const onSave = () => {
        loadData()
    }

    const formatedData = StoreForm.form

    return(
        <div className="flex flex-col gap-10">
            <div className="flex justify-between  w-full">
                <div className="flex flex-col gap-8">
                    <Typography.Title className=''>Etapes 1 : Fiche entreprise</Typography.Title>
                    <div className =" flex gap-5">
                        <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                        <Button iconPath={mdiChevronRight} iconRight={true} title ="Étape 2 : Informations salariés" bgColor="white" onPress={()=> navigate('/informations-salaries')}/>
                    </div>
                </div>
                <div className=' min-w-[40%]'>
                    <ModuleCompletion percentage={EntrepriseCompletion()}></ModuleCompletion>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col gap-1 w-[350px] sticky top-20 h-fit">
                    <Onglet title="Renseignements généraux" index={1} percentage={completion("generaux")} setIndex={setActiveTab} activeTab={activeTab}/>
                    <Onglet title= "Contacts associés" index={5}  setIndex={setActiveTab} activeTab={activeTab}/>
                    <Onglet title="Infrastructure" index={2} percentage={completion('infra')} setIndex={setActiveTab} activeTab={activeTab}/>
                    <Onglet title="Véhicules" index={3} percentage={completion('vehicules')} setIndex={setActiveTab} activeTab={activeTab}/>
                    <Onglet title="Incitation et accompagnement" index={4} percentage={completion("incitation")} setIndex={setActiveTab} activeTab={activeTab}/>
                </div>
                <div className="flex-1">
                    {activeTab === 1 ?
                    <FormGeneraux companyId={companyId} data={formatedData} onSave={onSave}/>
                    :
                    activeTab === 2 ? 
                    <FormInfra companyId={companyId} data={formatedData} onSave={onSave}/>
                    : activeTab === 3 ?
                    <FormVehicules companyId={companyId} data={formatedData} onSave={onSave}/>
                    :
                    activeTab === 4 ?
                    <FormIncitation companyId={companyId} data={formatedData} onSave={onSave}/>
                    :
                    activeTab === 5 ?
                    <FormContact companyId={companyId} data={formatedData} />
                    : null}

                </div>
            </div>
            
        </div>
    )
}