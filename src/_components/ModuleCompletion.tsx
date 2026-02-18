import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';


export default function ModuleCompletion() {
    return(
        <div className="bg-white rounded-2xl w-full flex flex-col gap-8 p-10">
            <span className="text-[1.5em] font-bold">Avancement du module</span>
            <div className="flex flex-col gap-2">
                <span className='block bg-(--select-grey) w-full h-5 rounded-full'>
                    <span className="block bg-(--blue) w-[70%] h-full rounded-full"></span>
                </span>
                <div className="flex">
                    <Icon path={mdiChevronRight} color="var(--blue)" size={1}></Icon>
                    <span  className="text-[1.5em] italic">Vous y êtes presque !</span>
                </div>
            </div>

            
        </div>
    )
}