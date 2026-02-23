import { mdiThumbUpOutline, mdiThumbDownOutline  } from '@mdi/js';
import Icon from '@mdi/react';
import {Typography, Image} from 'antd'
import Velo from "@Commons/img/velo.png"
import Scooter from "@Commons/img/scooter.png"
import Bus from "@Commons/img/bus.png"
import Voiture from "@Commons/img/voiture.png"


const modes = ["community", "micromobility", "velo", "car", "two-weels", "electric"]

type Mode = typeof modes[number]

interface SyntheseProps {
    mode: Mode
}

export default function SyntheseMode ({mode}: SyntheseProps) {

    const title = mode === "community" ?  "les transports en communs" : mode === "micromobility" ? "la marche et les micromobilités"
    : mode === "velo" ? "le vélo" : mode === "car" ? "l'automobile" : mode ==="two-wheels" ? "les deux-roues motorisés"
    : mode === "electric" ? "les engins de mobilité électrique" : ""

    const img = mode === "community" ?  Bus : mode === "micromobility" ? Scooter
    : mode === "velo" ? Velo : mode === "car" ? Voiture : mode ==="two-wheels" ? Scooter
    : mode === "electric" ? Scooter : ""

    return (
        <div className="flex flex-col gap-2">
            <Typography.Title level={5}>Point de vue pour {title}</Typography.Title>
            <div className="bg-white flex justify-between items-center  h-[200px] pr-10">
                <div className='w-[25%] aspect-square h-full flex items-center justify-center '>
                    <Image src={img}  preview={false} object-cover="object-contain"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className='flex gap-2 items-center'>
                        <Icon path={mdiThumbUpOutline} color="var(--green)" size={1}/>
                        <p className= 'text-(--green) font-medium text-[1.2em]'>Raisons de satisfaction</p>
                    </div>
                    <p className= "text-[1.2em]">1.Le trajet est confortable</p>
                    <p className= "text-[1.2em]">2.C'est simple de se stationner (voiture, vélo…)</p>
                    <p className= "text-[1.2em]">3.Mon mode de déplacement est pratique</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className='flex gap-2 items-center'>
                        <Icon path={mdiThumbDownOutline} color="var(--orange)" size={1}/>
                        <p className= 'text-(--orange) font-medium text-[1.2em]'>Raisons d’insatisfaction</p>
                    </div>
                    <p className= "text-[1.2em]">1.J’aimerais changer pour plus confortable</p>
                    <p className= "text-[1.2em]">2.J’aimerais changer pour plus flexible</p>
                    <p className= "text-[1.2em]">3.J’aimerais changer pour plus fiable </p>

                </div>
            </div>
        </div>
    )
}