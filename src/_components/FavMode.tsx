import Velo from '@Commons/img/velo.png'
import Marche from '@Commons/img/marche.png'
import Moto from '@Commons/img/moto.png'
import Bus from '@Commons/img/bus.png'
import Voiture from '@Commons/img/voiture.png'
import Trotinette from '@Commons/img/trotinette.png'
import {Image} from 'antd'

const IMAGES: Record<string, string> = {
  'Automobile' : Voiture,
  'Transports en commun': Bus,
  'Vélo': Velo,
  'Micromobilités': Trotinette,
  'Marche': Marche,
  'Deux-roues motorisés': Moto
}

export default function FavMode({mode}: {mode:string}) {
  return (
    <Image src={IMAGES[mode]} width="100%" preview={false}/>
  )
}