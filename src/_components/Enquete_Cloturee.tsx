import {useState} from 'react'
import Button from "@/_components/Button";
import Participation from "@/_components/Enquete-onglets/Participation";
import Deplacement from "@/_components/Enquete-onglets/Deplacement";
import Satisfaction from "@/_components/Enquete-onglets/Satisfaction";
import Organisation from "@/_components/Enquete-onglets/Organisation";
import ReportModal from './Enquete-onglets/ReportModal';
import Onglet from "@/_components/Enquete-onglets/Onglet";
import {Typography} from 'antd'

import { mdiChevronLeft, mdiInformationVariantCircleOutline, mdiWalk ,  mdiHeartOutline  , mdiTimerOutline, mdiArrowDecision , mdiMapMarkerOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { useEnquete } from '@/stores/enquete_results';

interface EnqueteProps {
    survey: {[key:string]: string | number }
    nbr_of_employees: number
    nbr_of_responses : number
}


export default function EnqueteCloturee({ survey, nbr_of_employees, nbr_of_responses}: EnqueteProps) {
    const [Active, setActive] = useState(1)
    

    const dateConvert = (timeStamp : number) => {
        const rawDate = new Date(timeStamp * 1000)
        const date = rawDate.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
            });
        return date
    }

    const date_debut = dateConvert(survey?.Date_debut as number)
    const date_fin = dateConvert(survey?.Date_de_fin as number)

    const navigate = useNavigate()


    return (
        <div className="flex flex-col gap-5">

            <div className="flex justify-between w-full lg:max-h-[120px] "> 
                <div className="flex flex-col gap-2">
                    <Typography.Title className=''>Etapes 3 : Enquête</Typography.Title>
                    <div>
                        <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                    </div>
                </div>
                <div className='flex  gap-1 py-5 '>
                    <Onglet title={"Participation"} iconPath={mdiInformationVariantCircleOutline}  index={1} onSelect={setActive} ActiveTab={Active}/>
                    <Onglet title={"Déplacement"} iconPath={mdiWalk}  index={2} onSelect={setActive} ActiveTab={Active}/>
                    <Onglet title={"Satisfaction"} iconPath={mdiHeartOutline } index={3} onSelect={setActive} ActiveTab={Active}/>
                    <Onglet title={"Organisation"} iconPath={mdiTimerOutline} index={4} onSelect={setActive} ActiveTab={Active}/>
                    <Onglet title={"Report modal"} iconPath={mdiArrowDecision} index={5} onSelect={setActive} ActiveTab={Active} />
                    <Onglet title={"Carte"} iconPath={mdiMapMarkerOutline} index={6} onSelect={setActive} ActiveTab={Active} disabled={true}/>

                </div>
            </div>
            {Active === 1 ? 
            <Participation date_debut={date_debut} date_fin={date_fin} nbr_of_employees={nbr_of_employees} nbr_of_responses={nbr_of_responses} />
            :
            Active === 2 ?
            <Deplacement></Deplacement>
            :
            Active === 3 ?
            <Satisfaction></Satisfaction>
            :
            Active === 4 ?
            <Organisation></Organisation>
            :
            Active === 5 ? 
            <ReportModal/>
            :
            null
            }
            
        </div>
    )
}