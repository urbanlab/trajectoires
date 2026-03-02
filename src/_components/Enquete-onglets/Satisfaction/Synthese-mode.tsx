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
    satis: any[]
    insatis :any[]
}

export default function SyntheseMode ({mode, satis, insatis}: SyntheseProps) {

    const title = mode === "Transports en commun" ?  "les transports en communs" : mode === "Marche et micromobilités" ? "la marche et les micromobilités"
    : mode === "Vélo" ? "le vélo" : mode === "Automobile" ? "l'automobile" : mode === "Deux-roues motorisés" ? "les deux-roues motorisés"
    : mode === "Engins de mobilité électrique" ? "les engins de mobilité électrique" : ""

    const img = mode === "Transports en commun" ?  Bus : mode === "Marche et micromobilités" ? Scooter
    : mode === "Vélo" ? Velo : mode ===  "Automobile"? Voiture : mode ==="Deux-roues motorisés" ? Scooter
    : mode === "Engins de mobilité électrique" ? Scooter : ""

    return (
        <div className="flex flex-col gap-2">
            <Typography.Title level={5}>Point de vue pour {title}</Typography.Title>
            <div className="bg-white flex justify-between gap-5 items-top  h-[200px] pr-10 py-5">
                <div className='w-[25%] aspect-square h-full flex items-center justify-center flex-1'>
                    <Image src={img}  preview={false} object-cover="object-contain "/>
                </div>
                <div className="flex flex-col gap-2 flex-1  ">
                    <div className='flex gap-2 items-center '>
                        <Icon path={mdiThumbUpOutline} color="var(--green)" size={1}/>
                        <p className= 'text-(--green) font-medium text-[1.2em]'>Raisons de satisfaction</p>
                    </div>
                    {satis?.map((s, index) => {
                        return(
                        <p key={index} className= "text-[1.2em]">{s}</p>

                        )

                    })}
                    
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <div className='flex gap-2 items-center'>
                        <Icon path={mdiThumbDownOutline} color="var(--orange)" size={1}/>
                        <p className= 'text-(--orange) font-medium text-[1.2em]'>Raisons d’insatisfaction</p>
                    </div>
                    {insatis?.map((s, index) => {
                        return(
                        <p key={index} className= "text-[1.2em]">{s}</p>

                        )

                    })}
                    
                </div>
            </div>
        </div>
    )
}