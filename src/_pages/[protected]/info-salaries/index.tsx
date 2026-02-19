import {useState} from 'react'
import {Typography} from 'antd'
import Button from '@Components/Button'
import ModuleCompletion from '@Components/ModuleCompletion'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiFileExcel } from '@mdi/js';
import Content from '@/content.json'
import DropZone from '@Components/DropZone'
import BoardInfos from '@Components/BoardInfos'
import {Board} from '@Components/board'

import { useNavigate } from 'react-router-dom';


export function InfoSalaries(){
    const content = Content.Salaries.download
    const navigate = useNavigate();
    const [headers, setHeaders] = useState<any[]>([])
    const [rows, setRows] = useState<any[][]>([])
    console.log('headers', headers)

    const settingArray = (parsedXlsx: any[]) => {
        const [firstRow, ...otherRows] = parsedXlsx
        setHeaders(firstRow)
        setRows(otherRows)
        console.log('otherrows', otherRows)
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
                    <div className="gap-10 flex ">
                        <Icon path={mdiFileExcel} color="var(--green)" size={4} className="min-w-[30px]"/>
                        <div className ="flex flex-col gap-3">
                            <Typography.Title level={3}>Télécharger le gabarit</Typography.Title>
                            <p className="text-[1.5em] text-wrap">{content}</p>
                        </div>

                    </div>
                    <div>
                        <Button title="Télécharger" bgColor="red"></Button>
                    </div>
                </div>
                {headers.length === 0 ?
                    <DropZone settingArray={settingArray}></DropZone>
                    : 
                    <BoardInfos qty={rows.length}>
                        <Board headers={headers} rows={rows}/>
                    </BoardInfos>
                }
                
            </div>
        </div>
    )
}