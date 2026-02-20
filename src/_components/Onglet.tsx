import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlayCircle ,  mdiInformationVariantCircleOutline, mdiWalk , mdiMessageOutline, mdiHeart , mdiTimerOutline, mdiArrowDecision , mdiMapMarkerOutline } from '@mdi/js';

interface OngletProps{
    iconPath : string
    title: string
    index: number
    onSelect : (index: number )=> void
    ActiveTab : number
    
}

export default function Onglet ({title, onSelect, iconPath, index, ActiveTab}: OngletProps) {

    const isActive = ActiveTab === index

    return(
        <button onClick={() => onSelect(index)} className={`${ isActive ? "bg-(--red)": "bg-(--dark-grey) text-white"} flex flex-col justify-center p-4 gap-2 items-center rounded-sm `}><Icon path={iconPath} color={isActive ? "white" : "black"} size={1.5}/><span className={`${isActive ? "text-white" :"text-black" } text-[1.3em] font-medium`}>{title}</span></button>

    )
}