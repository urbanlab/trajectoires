import {Typography, Image} from 'antd'
import Vehicules from '@Commons/img/illustrations.png'
import { mdiThumbUpOutline, mdiThumbDownOutline  } from '@mdi/js';
import Icon from '@mdi/react';
import SyntheseMode from "@Components/Enquete-onglets/Synthese-mode"



export default function Satsifaction () {
    return (
        <div className="flex flex-col gap-5">
            <Typography.Title level={3}>Expérience usager et perception des modes</Typography.Title>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5 flex-1">
                <Typography.Title level={4}>Niveau de satisfaction du déplacement (mode actuel)</Typography.Title>
                <div>///GRAPHIQUE</div>
            </div>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
                <Typography.Title level={4}>Synthèse par mode</Typography.Title>
                <SyntheseMode mode={"community"}/>
                <SyntheseMode mode={"micromobility"}/>
                <SyntheseMode mode={"velo"}/>
                <SyntheseMode mode={"car"}/>
                <SyntheseMode mode={"two-wheels"}/>
                <SyntheseMode mode={"electric"}/>
            </div>
            <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                <Typography.Title level={5}>Autre</Typography.Title>
                <div className="flex flex-col gap-10 items-center">
                    <Image src={Vehicules} preview={false} width="30%"></Image>
                    <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                </div>
            </div>
        </div>
    )
}