import {Image, Typography} from 'antd'
import bus from '@Commons/img/bus.png'
import velo from '@Commons/img/velo.png'
import voiture from '@Commons/img/voiture.png'

interface Freins {
    mode: string
    freins : any[]
}

export default function FreinsMode ({mode, freins}: Freins) {
    const img = mode === 'bus' ? bus : mode === 'velo' ? velo : mode === 'voiture' ? voiture : ""
    return (
        <div className = "bg-white p-5 flex flex-col gap-2 items-center ">
            <div className="w-[30%]">
                <Image src={img}  preview={false}/>
            </div>
            <div className = "flex-1 flex flex-col gap-3 w-full">
            {freins.map((frein, index) => {
                return (
                    <p key={index}>{`${index + 1}. ${frein.raison}`}</p>
                )
            })}
            </div>
        </div>
    )
}