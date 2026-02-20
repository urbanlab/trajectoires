import Button from "@/_components/Button";
import {Typography} from 'antd'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlayCircle , mdiLockOutline,  mdiInformationVariantCircleOutline, mdiWalk , mdiMessageOutline, mdiHeart , mdiTimerOutline, mdiArrowDecision , mdiMapMarkerOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

interface EnqueteProps {
    updateState: () => void
}

export default function EnqueteCloturee({updateState}: EnqueteProps) {

    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-5">

        <div className="flex justify-between w-full max-h-[120px] "> 
            <div className="flex flex-col gap-2">
                <Typography.Title className=''>Etapes 3 : Enquête</Typography.Title>
                <div>
                    <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                </div>
            </div>
            <div className='flex  gap-1 py-5 '>
                <button className="flex flex-col justify-center bg-(--red) p-4 gap-2 items-center rounded-sm w-[50%]"><Icon path={mdiPlayCircle} color={"white"} size={1.5}/><p className="text-[1.3em] text-white font-medium">Participation</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiWalk} color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Déplacement</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiHeart } color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Satisfaction</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiTimerOutline } color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Organisation</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-1 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiArrowDecision } color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Report modal</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiMapMarkerOutline } color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Carte</p></button>
            </div>
        </div>
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-5 w-[500px] ">
                <Typography.Title level={4}>Actions</Typography.Title>
                < div className='bg-(--light-grey) p-6 flex flex-col gap-5'>
                    <div className="flex gap-3">
                        <p className="italic text-[1.3em]">Statut de l'enquête:</p>
                        <button onClick={updateState}>
                            <p className="italic text-[1.3em] rounded-full bg-(--green) px-2 ">Cloturée</p>
                        </button>
                    </div>
                    <div className="flex gap-4 border-(--blue) border-l-3 bg-white p-5 items-center">
                        <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1.5}/>
                        <p className="italic text-[1.3em] max-w-[500px]">L’enquête est désormais clôturée. Cet onglet présente une synthèse complète de la participation, incluant le nombre de réponses reçues, le taux de répondants et les principaux indicateurs liés à la collecte.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <Typography.Title level={3}>Informations générales</Typography.Title>
                <div className="flex gap-2">
                    <div className=" bg-(--light-grey) p-6 flex flex-col gap-5 flex-1 justify-between">
                        <Typography.Title level={4}>Dates</Typography.Title>
                        <div className="bg-white p-6 flex flex-col gap-5">
                            <div>
                                <p className="text-[1.3em] ">Date de début</p>
                                <p className="text-[1.5em] font-bold">22/01/2026</p>
                            </div>
                            <div>
                                <p className="text-[1.3em] ">Date de fin</p>
                                <p className="text-[1.5em] font-bold">22/02/2026</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-(--light-grey) p-6 flex flex-col justify-between gap-5 flex-1">
                        <Typography.Title level={4}>Réponses reçues</Typography.Title>
                        <div className="bg-white p-6 flex gap-5">
                            <Icon path={mdiMessageOutline} color="var(--blue)" size={3}/>
                            <div className= "flex flex-col gap-5">
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>18/25</p>
                                    <p className="text-[1.3em] ">Réponses</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>4%</p>
                                    <p className="text-[1.3em] ">Répondant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-(--light-grey) p-6 flex flex-col gap-5">
                    <Typography.Title level={4}>Détails des Réponses</Typography.Title>
                    <div className="flex gap-5 items-center">
                        <p className=" italic text-[1.3em]">Date de dernière réponse :</p>
                        <p className= "font-bold text-[1.2em]">20/01/2026</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}