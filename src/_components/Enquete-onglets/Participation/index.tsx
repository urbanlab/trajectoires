import {Typography} from 'antd'
import Icon from '@mdi/react';
import {mdiInformationVariantCircleOutline, mdiMessageOutline } from '@mdi/js';

interface ParticipationProps {
    date_debut: string
    date_fin : string
    nbr_of_employees: number
    nbr_of_responses: number
}

export default function Participation ({date_debut, date_fin, nbr_of_employees, nbr_of_responses  }: ParticipationProps) {
    const percentage = (nbr_of_responses / nbr_of_employees) * 100
    return( 
        <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-5 w-[500px] ">
                <Typography.Title level={4}>Actions</Typography.Title>
                < div className='bg-(--light-grey) p-6 flex flex-col gap-5'>
                    <div className="flex gap-3">
                        <p className="italic text-[1.3em]">Statut de l'enquête:</p>
                        <p className="italic text-[1.3em] rounded-full bg-(--green) px-2 ">Cloturée</p>
                    </div>
                    <div className="flex gap-4 border-(--blue) border-l-3 bg-white p-5 items-center">
                        <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1}/>
                        <p className="italic text-[1.3em] max-w-[500px] flex-1">L’enquête est désormais clôturée. Cet onglet présente une synthèse complète de la participation, incluant le nombre de réponses reçues, le taux de répondants et les principaux indicateurs liés à la collecte.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <Typography.Title level={3}>Informations générales</Typography.Title>
                <div className="flex gap-5">
                    <div className=" bg-(--light-grey) p-6 flex flex-col gap-5 flex-1 justify-between">
                        <Typography.Title level={4}>Dates</Typography.Title>
                        <div className="bg-white p-6 flex flex-col gap-5">
                            <div>
                                <p className="text-[1.3em] ">Date de début</p>
                                <p className="text-[1.5em] font-bold">{date_debut}</p>
                            </div>
                            <div>
                                <p className="text-[1.3em] ">Date de fin</p>
                                <p className="text-[1.5em] font-bold">{date_fin}</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-(--light-grey) p-6 flex flex-col justify-between gap-5 flex-1">
                        <Typography.Title level={4}>Réponses reçues</Typography.Title>
                        <div className="bg-white p-6 flex gap-5">
                            <Icon path={mdiMessageOutline} color="var(--blue)" size={3}/>
                            <div className= "flex flex-col gap-5">
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>{nbr_of_responses}/{nbr_of_employees}</p>
                                    <p className="text-[1.3em] ">Réponses</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>{percentage} %</p>
                                    <p className="text-[1.3em] ">Répondants</p>
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
    
        
    )
}