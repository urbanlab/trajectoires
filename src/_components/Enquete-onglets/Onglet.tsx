import Icon from '@mdi/react';
import { mdiChevronLeft, mdiPlayCircle ,  mdiInformationVariantCircleOutline, mdiWalk , mdiMessageOutline, mdiHeart , mdiTimerOutline, mdiArrowDecision , mdiMapMarkerOutline } from '@mdi/js';

interface OngletProps{
    iconPath : string
    title: string
    index: number
    onSelect : (index: number )=> void
    ActiveTab : number
    disabled?: boolean
    
}

export default function Onglet ({title, onSelect, iconPath, index, ActiveTab, disabled}: OngletProps) {

    const isActive = ActiveTab === index

    return(
        <div className="flex">
            <button disabled={disabled} onClick={() => onSelect(index)} className={`${disabled ? "bg-(--select-grey) " : isActive ? "bg-(--red)": "bg-(--dark-grey) text-white"} flex flex-col justify-center p-4 gap-2 items-center rounded-sm lg:min-w-[140px]`}>
                <Icon path={iconPath} color={disabled ? "var(--disabled-grey)" : isActive ? "white" : "black"} size={1.5}/><span className={`${disabled ? "text-(--disabled-grey)" : isActive ? "text-white" :"text-black" } text-[1.3em] font-medium lg:flex hidden`}>
                    {title}
                </span>
            </button>
        </div>
    )
}