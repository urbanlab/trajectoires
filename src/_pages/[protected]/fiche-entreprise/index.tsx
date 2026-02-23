
import {useState} from 'react'
import {Typography} from 'antd'
import Button from '@Components/Button'
import ModuleCompletion from '@Components/ModuleCompletion'
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiFileExcel } from '@mdi/js';
import Content from '@/content.json'
import DropZone from '@/_components/Infos-Salaries/DropZone'
import BoardInfos from '@/_components/Infos-Salaries/BoardInfos'
import BoardSuccess from '@/_components/Infos-Salaries/BoardSuccess'

import {Board} from '@/_components/Infos-Salaries/board'
import {SendEmployeesToGrist} from '@Domains/employees/api'

import { useNavigate } from 'react-router-dom';

export default function FicheEntreprise () {
    const navigate = useNavigate()

    return(
        <div className="flex flex-col gap-10">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-8">
                    <Typography.Title className=''>Etapes 1 : Fiche entreprise</Typography.Title>
                    <div className =" flex gap-5">
                        <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                        <Button iconPath={mdiChevronLeft} title ="Étape 2 : Informations salariés" bgColor="white" onPress={()=> navigate('/informations-salaries')}/>
                    </div>
                </div>
                <div className=' min-w-[40%]'>
                    <ModuleCompletion></ModuleCompletion>
                </div>
            </div>
            <div className="flex gap-5">
                <div></div>
                <div className="flex-1"></div>
            </div>
        </div>
    )
}