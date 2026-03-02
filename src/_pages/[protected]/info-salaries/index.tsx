import {useState, useEffect} from 'react'
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
import {useForm} from '@/stores/form'
import { getEmployeesFromGrist } from '@Domains/employees/api';
import { CancelEmployeesFromGrist } from '@Domains/employees/api';
import { useAuth } from '@Hooks/auth';

interface GristEmployee {
    id: number;
    fields: {
        email: string;
        postal_address: string;
        [key: string]: any;
    };
}


export function InfoSalaries(){
    const {user} = useAuth()
    if (!user) {
        return null
    }
    const companyId = user.fields.ref_company_id
    const content = Content.Salaries.download
    const navigate = useNavigate();
    const [loading, isLoading] = useState(false)
    const [headers, setHeaders] = useState<any[]>([])
    const [rows, setRows] = useState<any[][]>([])
    const [error, setError] = useState<string | null>(null)
    const [saved, setSaved] = useState(false)
    const [ids, setIds] = useState<number[]>([])
    const getForm = useForm((s) => s)
    const setEmployees = useForm((s) => s.setEmployees)
    const Employees = getForm.employees
    const getEmployeesCompletion = useForm((s) => s.getEmployeesCompletion)
    
    const percentage = getEmployeesCompletion() 

    const loadData = async () => {
        isLoading(true)

    try {
        const data = await getEmployeesFromGrist(companyId)
        setEmployees(data)
        const formattedData = (data ?? []).map((employee: GristEmployee) => [
            employee.fields.email, 
            employee.fields.postal_address
        ])
        const employeesIds = (data ?? []).map((employee: GristEmployee) => employee.id)
        setRows(formattedData)
        setIds(employeesIds)
        
        if (formattedData.length !== 0) {
            setHeaders(["Email", "Adresse"])
            setSaved(true)
        } else {
            setSaved(false)
            setHeaders([])
        }
        isLoading(false)
    } catch (e) {
        setError("Erreur lors du chargement")
        isLoading(false)
    }
}

    useEffect (() => {
        loadData()
    }, [])


    const settingArray = (parsedXlsx: any[]) => {
        const [firstRow, ...otherRows] = parsedXlsx
        setHeaders(firstRow)
        setRows(otherRows)
        
    }
    
    const handleCancel = async () => {
        try {
                await CancelEmployeesFromGrist(ids)
                setHeaders([])
                setRows([])
                setSaved(false)
                setEmployees([])

            } catch(error) {
                setError('une erreur est survenue')
            }
        
    }

    const handleSave = async () => {
        setSaved(false)
        try{
            await SendEmployeesToGrist({rows, companyId})
            setSaved(true)
            loadData()
        } catch (error) {
            if (error instanceof Error){
                setError(error.message)
            } else {
                setError("une erreur s'est produite.")
                setHeaders([])
                setRows([])
            }
        }
    }

    return(
        <div className="flex flex-col gap-10">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-8">
                    <Typography.Title className=''>Etapes 2 : Informations salariés</Typography.Title>
                    <div>
                        <Button iconPath={mdiChevronLeft} title="Retour à l'acceuil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                    </div>
                </div>
                <div className=' min-w-[40%]'>
                    <ModuleCompletion percentage={percentage} isLoading={loading}></ModuleCompletion>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex lg:flex-row md:flex-row flex-col bg-(--light-grey) p-8 rounded-2xl items-center justify-between gap-10">
                    <div className="gap-10 flex items-center">
                        <Icon path={mdiFileExcel} color="var(--green)" size={4} className="min-w-[50px]"/>
                        <div className ="flex flex-col gap-3">
                            <Typography.Title level={4}>Télécharger le gabarit</Typography.Title>
                            <p className="text-[1.3em] text-wrap">{content}</p>
                        </div>

                    </div>
                    <div>
                        <Button title="Télécharger" bgColor="red"></Button>
                    </div>
                </div>
                {headers.length === 0  ?
                    <DropZone settingArray={settingArray}></DropZone>
                    : 
                    saved === true ? 
                    <BoardSuccess qty={rows.length} cancel={handleCancel}>
                        <Board headers={headers} rows={rows}/>
                    </BoardSuccess>
                    :
                    <BoardInfos qty={rows.length} cancel={handleCancel} save={handleSave} >
                        <Board headers={headers} rows={rows}/>
                    </BoardInfos>

                }
            </div>
        </div>
    )
}