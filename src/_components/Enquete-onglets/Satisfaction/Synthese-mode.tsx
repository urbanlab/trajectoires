import { mdiThumbUpOutline, mdiThumbDownOutline  } from '@mdi/js'
import Icon from '@mdi/react'
import {Typography, Image} from 'antd'
import Velo from '@Commons/img/velo.png'
import Marche from '@Commons/img/marche.png'
import Moto from '@Commons/img/moto.png'
import Bus from '@Commons/img/bus.png'
import Voiture from '@Commons/img/voiture.png'
import Trotinette from '@Commons/img/trotinette.png'


const modes = [
  'community',
  'micromobility',
  'velo',
  'car',
  'two-weels',
  'electric'
]

type Mode = typeof modes[number]

interface SyntheseProps {
    mode: Mode
    satis: any[]
    insatis :any[]
}

export default function SyntheseMode ({mode, satis, insatis}: SyntheseProps) {

  let title: string
  let img: string

  switch (mode) {
  case 'Transports en commun':
    title = 'les transports en communs'
    img = Bus
    break
  case 'Marche':
    title = 'la marche'
    img = Marche
    break
  case 'Vélo':
    title = 'le vélo'
    img = Velo
    break
  case 'Automobile':
    title = 'l\'automobile'
    img = Voiture
    break
  case 'Deux-roues motorisés':
    title = 'les deux-roues motorisés'
    img = Moto
    break
  case 'Micromobilités':
    title = 'les micromobilités'
    img = Trotinette
    break
  default:
    title = ''
    img = ''
  }

  return (
    <div className="flex flex-col gap-2">
      <Typography.Title level={5}>Point de vue pour {title}</Typography.Title>
      <div className="bg-white flex justify-between gap-5 items-top  h-[200px] pr-10 py-5">
        <div className="w-[25%] aspect-square h-full flex items-center justify-center flex-1">
          <Image src={img}  preview={false} object-cover="object-contain "/>
        </div>
        <div className="flex flex-col gap-2 flex-1  ">
          <div className="flex gap-2 items-center ">
            <Icon path={mdiThumbUpOutline} color="var(--green)" size={1}/>
            <p className= "text-(--green) font-medium text-[1.2em]">Raisons de satisfaction</p>
          </div>
          {satis?.length
            ? satis.map((s, index) => <p key={index} className="text-[1.2em]">{s}</p>)
            : <p className="text-[1.2em] text-gray-400 italic">Non renseigné</p>
          }
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex gap-2 items-center">
            <Icon path={mdiThumbDownOutline} color="var(--orange)" size={1}/>
            <p className="text-(--orange) font-medium text-[1.2em]">Raisons d'insatisfaction</p>
          </div>
          {insatis?.length
            ? insatis.map((s, index) => <p key={index} className="text-[1.2em]">{s}</p>)
            : <p className="text-[1.2em] text-gray-400 italic">Non renseigné</p>
          }
        </div>
      </div>
    </div>
  )
}