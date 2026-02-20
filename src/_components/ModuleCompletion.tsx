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
                <span className=' bg-(--select-grey) w-full h-3 rounded-full '>
                    <span className='w-[90%] flex gap-2  h-full'>

                        <span className=" relative block bg-(--red) h-full w-[11%]  rounded-full ">
                            <span className=" absolute -right-10 -top-1 text-(--red) font-bold">11%</span>
                        </span>
                    </span>
                </span>
                <div className="flex">
                    <Icon path={mdiChevronRight} color="var(--red)" size={1}></Icon>
                    <span  className="text-[1.2em] italic">Ca avance vite, on lâche rien !</span>
                </div>
            </div>
        </div>
    )
}