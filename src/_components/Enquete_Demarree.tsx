import Button from "@/_components/Button";
import {Typography} from 'antd'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlayCircle , mdiLockOutline,  mdiInformationVariantCircleOutline, mdiAlert, mdiMessageOutline, mdiThumbDownOutline  } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

interface EnqueteProps {
    updateState: () => void
}

export default function EnqueteDemaree({updateState}: EnqueteProps) {

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
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiLockOutline} color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Résultats</p></button>
            </div>
        </div>
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-5 w-[500px] ">
                <Typography.Title level={4}>Actions</Typography.Title>
                < div className='bg-(--light-grey) p-6 flex flex-col gap-5'>
                    <div className="flex gap-3">
                        <p className="italic text-[1.3em]">Statut de l'enquête:</p>
                        <button onClick={updateState}>
                            <p className="italic text-[1.3em] rounded-full bg-(--light-orange) px-2 ">Démarée</p>
                        </button>
                    </div>
                    <div className="flex gap-4 border-(--blue) border-l-3 bg-white p-5 items-center">
                        <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1.5}/>
                        <p className="italic text-[1.3em] max-w-[500px]">Le nombre de réponse n’est pas encore suffisant pour clôturer l’enquête, attendez une semaine pour relancer vos salariés</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-4">
                            <Button title="Clôturer l'enquête" bgColor="red"/>
                            <Button title="Relancer les salariés" bgColor="red"/>
                        </div>
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
                        <div className="flex items-center gap-3">
                            <Icon path={mdiAlert} color="var(--blue)" size={1}/>
                            <p className=" font-bold text-[1.5em] text-(--blue)">30 jours restants</p>
                        </div>
                    </div>
                    <div className=" bg-(--light-grey) p-6 flex flex-col justify-between gap-5 flex-1">
                        <Typography.Title level={4}>Réponses reçues</Typography.Title>
                        <div className="bg-white p-6 flex gap-5">
                            <Icon path={mdiMessageOutline} color="var(--blue)" size={3}/>
                            <div className= "flex flex-col gap-5">
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>1/25</p>
                                    <p className="text-[1.3em] ">Réponses</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>4%</p>
                                    <p className="text-[1.3em] ">Répondant</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon path={mdiThumbDownOutline } color="var(--red)" size={1}/>
                            <p className=" font-bold text-[1.5em] text-(--red)">Ce n'est que le début</p>
                        </div>
                    </div>
                </div>
                <div className="bg-(--light-grey) p-6 flex flex-col gap-5">
                    <Typography.Title level={4}>Détails des Réponses</Typography.Title>
                    <div className="flex gap-5 items-center">
                        <p className=" italic text-[1.3em]">Date de dernière réponse :</p>
                        <p className= "font-bold text-[1.2em]">20/01/2026</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className=" italic text-[1.3em]">Nombre de réponses sur les 7 derniers jours :</p>
                        <p className= "font-bold text-[1.2em]">1</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}