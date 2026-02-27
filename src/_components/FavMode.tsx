import  Bus from '@Commons/img/bus.png'
import Velo from  '@Commons/img/velo.png'
import Voiture from '@Commons/img/voiture.png'
import Scooter from '@Commons/img/scooter.png'
import  {Image} from 'antd'

const IMAGES: Record<string, string> = {
"Automobile" : Voiture,
"Transports en commun": Bus,
"Vélo": Velo,
"Engins de mobilité électrique": Scooter,
"Marche et micromobilités": Scooter,
"Deux-roues motorisés": Scooter



}

export default function FavMode({mode}: {mode:string}) {


    return (
        <Image src={IMAGES[mode]} width='100%' preview={false}/>
    )
}