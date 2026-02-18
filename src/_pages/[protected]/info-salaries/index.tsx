import {useState} from 'react'
import {Typography} from 'antd'
import Button from '@Components/Button'
import ModuleCompletion from '@Components/ModuleCompletion'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiFileExcel } from '@mdi/js';
import Content from '@/content.json'
import DropZone from '@Components/DropZone'

import { useNavigate } from 'react-router-dom';
import { P } from '@antv/g2plot';


export function InfoSalaries(){
    const content = Content.Salaries.download
    const navigate = useNavigate();
    const [headers, setHeaders] = useState<any[]>([])
    console.log('array', headers)

    const settingArray = (parsedXlsx) => {
        setHeaders(parsedXlsx[0])
    }

    return(
        <div className="">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-8">
                    <Typography.Title className=''>Etapes 2 : Informations salariés</Typography.Title>
                    <div>
                        <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                    </div>
                </div>
                <div className=' min-w-[40%]'>
                    <ModuleCompletion></ModuleCompletion>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex bg-(--light-grey) p-8 rounded-2xl items-center justify-between gap-10">
                    <Icon path={mdiFileExcel} color="var(--green)" size={4}/>
                    <div className ="flex flex-col gap-3">
                        <Typography.Title level={3}>Télécharger le gabarit</Typography.Title>
                        <p className="text-[1.5em] text-wrap">{content}</p>
                    </div>
                    <div>
                        <Button title="Télécharger" bgColor="red"></Button>
                    </div>
                </div>
                {headers.length === 0 ?
                    <DropZone settingArray={settingArray}></DropZone>
                    : 
                    <div className="flex">
                        {headers.map((row, index) => (
                            <p>{row}</p>
                        ))}
                    </div>
                }
                
                
            </div>
        </div>
    )
}