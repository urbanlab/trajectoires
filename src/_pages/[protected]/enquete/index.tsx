import Button from "@/_components/Button";
import {Typography} from 'antd'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiCrosshairsGps, mdiChartTimelineVariantShimmer, mdiInformationVariantCircleOutline} from '@mdi/js';
import { useNavigate } from 'react-router-dom';

export function Enquete() {
    const navigate = useNavigate()
    return (
        <div>

                <div className="flex justify-between w-full "> 
                    <div className="flex flex-col gap-8">
                        <Typography.Title className=''>Etapes 3 : Enquête</Typography.Title>
                        <div>
                            <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                        </div>
                    </div>
                    <div className='flex  gap-1 py-4 max-w-[30em] '>
                        <button className="flex bg-(--red) p-3 gap-2 items-center rounded-l-lg w-[50%]"><Icon path={mdiCrosshairsGps} color={"white"} size={2}/><p className="text-[1.8em] text-white font-medium">Avancement de l'enquête</p></button>
                        <button className="flex bg-(--dark-grey) p-8 gap-2 items-center rounded-r-lg w-[50%]"><Icon path={mdiChartTimelineVariantShimmer} color={"black"} size={2}/><p className="text-[1.8em] font-medium">Résultats</p></button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-5">
                        <Typography.Title level={3}>Actions</Typography.Title>
                        <div className='bg-(--light-grey) p-6 flex flex-col gap-5'>
                            <div className="flex gap-3">
                                <p className="italic text-[1.5em]">Statut de l'enquête:</p>
                                <p className="italic text-[1.5em] rounded-full bg-(--light-orange) px-2 ">Démarée</p>
                            </div>
                            <div className="flex gap-4 border-(--blue) border-l-3 bg-white p-5 items-center">
                                <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1.5}/>
                                <p className="italic text-[1.5em] max-w-[500px]">Le nombre de réponse n’est pas encore suffisant pour clôturer l’enquête, attendez une semaine pour relancer vos salariés</p>
                            </div>
                            <div className='self-center'>
                                <Button title="Clôturer l'enquête" bgColor="red"/>
                            </div>
                            <div className='self-center'>
                                <Button title="Relancer els salariés" bgColor="red"/>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                        <Typography.Title level={3}>Informations générales</Typography.Title>
                        <div className=" bg-(--light-grey) p-6 flex flex-col gap-5">
                            <Typography.Title level={3}>Dates</Typography.Title>
                            <div className="bg-white p-6 flex flex-col gap-5">
                                <div>
                                    <p className="text-[1.6em] ">Date de début</p>
                                    <p className="text-[3em] font-bold">22/01/2026</p>
                                </div>
                                <div>
                                    <p className="text-[1.6em] ">Date de fin</p>
                                    <p className="text-[3em] font-bold">22/02/2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}