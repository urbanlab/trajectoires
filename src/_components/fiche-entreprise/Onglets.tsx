
import Icon from '@mdi/react';
import { mdiCheckCircleOutline} from '@mdi/js';

interface OngletProps {
    title: string,
    index: number,
    setIndex: (index: number) => void,
    activeTab: number,
    percentage?: number
}

export default function Onglet ({title, index, setIndex, activeTab, percentage}: OngletProps) {
    const isActive = index === activeTab
    const rateColor = percentage !== undefined && percentage < 1 ? "text-(--orange)" : "text-(--blue)"
    return (
        <button onClick={() => setIndex(index)} className={`${isActive ? "bg-(--select-grey) border-l-2 border-(--red)" : "bg-(--light-grey)"} flex justify-between gap-3 p-5`}>
            <p className={`${isActive ? "font-medium" : "font-normal"} text-[1.2em] `}>{title}</p>
            {percentage === 100 ? 
            <Icon path={mdiCheckCircleOutline} color="var(--green)" size={1}/>
            :
            <p className={`${rateColor} font-bold`}>{percentage !== undefined ? `${percentage} %` : ""}</p>}
        </button>
    )
}