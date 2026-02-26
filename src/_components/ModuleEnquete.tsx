import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';


interface Module {
    unlocked?: boolean
}

export default function ModuleEnquete ({unlocked}: Module) {
    
        if (!unlocked){
        return (
            <div className="bg-white rounded-2xl w-full flex gap-2 p-5 items-center ">
                <Icon path={mdiChevronRight} color="var(--blue)" size={2}></Icon>
                <p className="text-[1.2em] ">Finalisez la complétion de la fiche entreprise et des informations salariés pour lancer l’enquête</p>
            </div>
        )
    } else {
        return null
    }
    
}