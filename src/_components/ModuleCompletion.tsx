import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

interface Module {
    blocked?: boolean
}

export default function ModuleCompletion({blocked}: Module) {
    if (blocked === true){
        return (
            <div className="bg-white rounded-2xl w-full flex gap-2 p-5 items-center ">
                <Icon path={mdiChevronRight} color="var(--blue)" size={2}></Icon>
                <p className="text-[1.2em] ">Finalisez la complétion de la fiche entreprise et des informations salariés pour lancer l’enquête</p>
            </div>
        )
    }
    return(
        <div className="bg-white rounded-2xl w-full flex flex-col gap-5 p-5">
            <span className="text-[1.2em] font-bold">Avancement du module</span>
            <div className="flex flex-col gap-2">
                <span className=' bg-(--select-grey) w-full h-5 rounded-full flex gap-2'>
                    <span className="block bg-(--blue) w-[70%] h-full rounded-full"></span>
                    <span className="text-(--blue) font-bold">80%</span>
                </span>
                <div className="flex">
                    <Icon path={mdiChevronRight} color="var(--blue)" size={1}></Icon>
                    <span  className="text-[1.2em] italic">Vous y êtes presque !</span>
                </div>
            </div>
        </div>
    )
}