import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

interface Module {
    percentage: number
}

const TEXT: Record<number, string> = {
    0:"C’est un bon démarrage !",
    20: "C’est un bon démarrage !",
    40: "Bientôt à la moitié !",
    60: "Vous avez fait le plus dur !",
    80:"Dernière ligne droite !",
    100: "Tout est bon, Bravo !"
}


export default function ModuleCompletion({percentage}: Module) {
    console.log('percentage', percentage)
    const IconColor =percentage < 30 ? "var(--red)" : percentage < 60 ? "var(--orange)" : percentage < 100 ? "var(--blue)" : "var(--green)"
    const bgColor = percentage < 30 ? "bg-(--red)" : percentage < 60 ? "bg-(--orange)" : percentage < 100 ? "bg-(--blue)" : "bg-(--green)"
    const fontColor = percentage < 30 ? "text-(--red)" : percentage < 60 ? "text-(--orange)" : percentage < 100 ? "text-(--blue)" : "text-white"
    const position = percentage === 100 ? "right-1" : "-right-10"
    


    return(
        <div className="bg-white rounded-2xl w-full flex flex-col gap-5 p-5">
            <span className="text-[1.2em] font-bold">Avancement du module</span>
            <div className="flex flex-col gap-2">
                <span className=' bg-(--select-grey) w-full h-4 rounded-full p-[0.1em]'>
                    < span style={{width: `${percentage}%`}} className={` relative flex items-center ${bgColor} h-full rounded-full` }>
                        <span className={`absolute ${position} top-0 ${fontColor} font-bold text-[0.9em]`}>{percentage}%</span>
                    </span>
                </span>
                <div className="flex">
                    <Icon path={mdiChevronRight} color={IconColor} size={1}></Icon>
                    <span  className="text-[1.2em] italic">{TEXT[percentage]}</span>
                </div>
            </div>
        </div>
    )
}