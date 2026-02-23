import {Typography, Image} from 'antd'
import Icon from '@mdi/react';
import { mdiAccountMultipleOutline } from '@mdi/js';
import Vehicules from '@Commons/img/illustrations.png'


export default function Deplacement () {
    return (
        <div className="">
            <div className=" flex flex-col gap-5">
                <Typography.Title level={3}>Pratiques de mobilité actuelle et indicateurs de trajets</Typography.Title>
                <div className=" flex gap-5 flex-wrap">
                    <div className=" flex flex-col gap-5 bg-(--light-grey) p-5 flex-1">
                        <Typography.Title level={4}>Temps</Typography.Title>
                        <div>////COMPOSANT GRAPHIQUE</div>
                    </div>
                    <div className=" flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                        <Typography.Title level={4}>Distance</Typography.Title>
                        <div>////COMPOSANT GRAPHIQUE</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                    <Typography.Title level={4}>Public et modes de déplacement</Typography.Title>
                    <div className=" flex gap-2 flex-wrap justify-between">
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Mode de déplacement principal</Typography.Title>
                            <div>///COMPOSANT</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Âge moyen</Typography.Title>
                            <div className="bg-white flex gap-2">
                                <Icon path={mdiAccountMultipleOutline} color={"var(--blue)"} size={3}/>
                                <div>///COMPOSANT</div>
                            </div>
                        </div>
                        < div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Répartition des genres</Typography.Title>
                            <div>///COMPOSANT</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 bg-(--light-grey) p-5 flex-1">
                    <div className="flex flex-col gap-2 flex-1">
                        <Typography.Title level={5}>Détail des modes de déplacement principaux utilisés</Typography.Title>
                        <div>////COMPOSANT GRAPHIQUE</div>    
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Temps de trajet moyen par mode utilisé</Typography.Title>
                            <div>////COMPOSANT GRAPHIQUE</div>    
                        </div>
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Variation médiane du temps de trajet en fonction du mode utilisé</Typography.Title>
                            <div>////COMPOSANT GRAPHIQUE</div>    
                        </div>
                    </div>

                </div>
                    <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                        <Typography.Title level={5}>Autre</Typography.Title>
                        <div className="flex flex-col gap-10 items-center">
                            <Image src={Vehicules} preview={false} width="30%"></Image>
                            <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}