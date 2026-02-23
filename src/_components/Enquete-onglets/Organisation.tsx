import {Typography, Image} from 'antd'
import Vehicules from '@Commons/img/illustrations.png'
import { mdiOfficeBuilding, mdiClockTimeEightOutline   } from '@mdi/js';
import Icon from '@mdi/react';
import SyntheseMode from "@Components/Enquete-onglets/Synthese-mode"

export default function Organisation () {
    return (
        <div className="flex flex-col gap-5">
            <Typography.Title level={3}>Organisation des temps et rythme de travail</Typography.Title>
            <div className="bg-(--light-grey) flex flex-col flex-1 gap-5 flex-wrap p-5">
                <div className="flex gap-5">
                    <div className="flex flex-col flex-1 gap-2">
                        <Typography.Title level={5}>Moyenne de jours en télétravail</Typography.Title>
                        <div className="bg-white p-5 flex gap-2 flex-1 items-center">
                            <Icon path={mdiOfficeBuilding } color='var(--blue)' size={2}/>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-[1.5em]">3 jours</p>
                                <p>Soit 2 jours sur site</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                        <Typography.Title level={5}>Type d’horaires pratiqués dans l’entreprise</Typography.Title>
                        <div className="bg-white p-5 flex gap-2 flex-1 items-center">
                            <Icon path={mdiClockTimeEightOutline  } color='var(--blue)' size={2}/>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-[1.5em]">Horaires décalés</p>
                                <p>pour 100% des réponses</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Typography.Title level={4}>Horaires d’arrivée des collaborateurs</Typography.Title>
                    <div>///GRAPHIQUE</div>
                </div>
                <div className="flex-1">
                    <Typography.Title level={4}>Horaires de départ des collaborateurs</Typography.Title>
                    <div>///GRAPHIQUE</div>
                </div>
            </div>
            <div className='bg-(--light-grey) flex flex-col gap-5 p-5'>
                <Typography.Title level={4}>Autre</Typography.Title>
                <div>
                    ///GRAPHIQUE
                </div>

            </div>
            <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                <Typography.Title level={4}>Autre</Typography.Title>
                <div className="flex flex-col gap-10 items-center">
                    <Image src={Vehicules} preview={false} width="30%"></Image>
                    <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                </div>
            </div>
        </div>
    )
}