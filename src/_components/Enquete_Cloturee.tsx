import {useState, useEffect} from 'react'
import Button from "@/_components/Button";
import Participation from "@/_components/Enquete-onglets/Participation";
import Deplacement from "@/_components/Enquete-onglets/Deplacement";
import Satisfaction from "@/_components/Enquete-onglets/Satisfaction";
import Organisation from "@/_components/Enquete-onglets/Organisation";
import Onglet from "@/_components/Enquete-onglets/Onglet";
import {Typography} from 'antd'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlayCircle ,  mdiInformationVariantCircleOutline, mdiWalk , mdiMessageOutline, mdiHeartOutline  , mdiTimerOutline, mdiArrowDecision , mdiMapMarkerOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

interface EnqueteProps {
    updateState: () => void

}

export default function EnqueteCloturee({updateState}: EnqueteProps) {
    const [Active, setActive] = useState(1)

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
            <Participation updateState={updateState}/>
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
            null
            }
            
        </div>
    )
}