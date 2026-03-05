import Button from "@/_components/Button";
import {Typography, message} from 'antd'
import Icon from '@mdi/react';
import { mdiFileDocumentEditOutline , mdiChevronLeft, mdiPlayCircle , mdiLockOutline,  mdiInformationVariantCircleOutline, mdiAlert, mdiMessageOutline, mdiThumbDownOutline, mdiThumbUpOutline  } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import ResponsesPercentage from "./ResponsesPercentage";

interface EnqueteProps {
    updateData: () => void
    uuid : string
    survey: {[key:string]: string | number }
    nbr_of_employees: number
    nbr_of_responses : number
}


export default function EnqueteDemaree({updateData, uuid, survey, nbr_of_responses, nbr_of_employees}: EnqueteProps) {
    const navigate = useNavigate()
    const Url = `https://form.typeform.com/to/LpHZ9JDv#uuid=${uuid}`

    const handleCopy = async () => {
    const urlToCopy = Url;
    
    try {
        await navigator.clipboard.writeText(urlToCopy);
        message.success("Lien copié dans le presse-papier !");
    } catch (err) {
        message.error("Impossible de copier le lien");
    }
    };

    const dateConvert = (timeStamp : number) => {
        const rawDate = new Date(timeStamp * 1000)
        const date = rawDate.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
            });
        return date
    }

    const handleClose = async () => {
        updateData()
    }

    const date_debut = dateConvert(survey.Date_debut as number)
    const date_fin = dateConvert(survey.Date_de_fin as number)
    const today = new Date()
    const time_restant = (survey.Date_de_fin as number * 1000)  - today.getTime()
    const jours_restants = Math.max(0, Math.ceil(time_restant / (1000 * 60 * 60 * 24)));

    let percentage = Math.round((nbr_of_responses / nbr_of_employees) * 100)
    if (percentage > 100) { 
        percentage = 100 
    }

    return (
        <div className="flex flex-col gap-5">

        <div className="flex justify-between w-full max-h-[120px] "> 
            <div className="flex flex-col gap-2">
                <Typography.Title className=''>Étape 3 : Enquête</Typography.Title>
                <div className="flex">
                    <Button iconPath={mdiChevronLeft} title="Retour à l'accueil" bgColor="red" onPress={()=> navigate('/menu') }></Button>
                </div>
            </div>
            <div className='flex  gap-1 py-5 '>
                <button className="flex flex-col justify-center bg-(--red) p-4 gap-2 items-center rounded-sm w-[50%]"><Icon path={mdiPlayCircle} color={"white"} size={1.5}/><p className="text-[1.3em] text-white font-medium">Participation</p></button>
                <button className="flex flex-col justify-center bg-(--dark-grey) p-4 gap-2 items-center rounded-sm  w-[50%]"><Icon path={mdiLockOutline} color={"black"} size={1.5}/><p className="text-[1.3em] font-medium">Résultats</p></button>
            </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col bg-(--light-grey) p-8 rounded-2xl items-center justify-between gap-10">
            <div className="flex ">
                    <div className="gap-10 flex items-center">
                        <Icon path={mdiFileDocumentEditOutline} color="var(--blue)" size={3} className="min-w-[50px]"/>
                        <div className ="flex flex-col gap-3">
                            <Typography.Title level={4}>Informez vos salariés</Typography.Title>
                            <div className="flex flex-col gap-2">
                                <p className="text-[1.3em] text-wrap">Transmettez le lien ci-dessous à vos salariés pour les inviter à répondre à l’enquête :</p>
                                <p className="text-[1.5em] text-(--blue)" >{Url}</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="">
                <Button title="Copier le lien" bgColor="red" onPress={() => handleCopy()}></Button>
            </div>
        </div>
        <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-5 w-[500px] ">
                <Typography.Title level={4}>Actions</Typography.Title>
                < div className='bg-(--light-grey) p-6 flex flex-col gap-5'>
                    <div className="flex gap-3">
                        <p className="italic text-[1.3em]">Statut de l'enquête :</p>
                        <p className="italic text-[1.3em] rounded-full bg-(--light-orange) px-2 ">Démarée</p>
                    </div>
                    <div className="flex gap-4 border-(--blue) border-l-3 bg-white p-5 items-center">
                        <Icon path={mdiInformationVariantCircleOutline} color="var(--blue)" size={1.5}/>
                        <p className="italic text-[1.3em] flex-1">Le nombre de réponse n’est pas encore suffisant pour clôturer l’enquête, attendez une semaine pour relancer vos salariés</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-4">
                            <Button onPress={handleClose} disabled={percentage < 20} title="Clôturer l'enquête" bgColor="red"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <Typography.Title level={3}>Informations générales</Typography.Title>
                <div className="flex gap-2">
                    <div className=" bg-(--light-grey) p-6 flex flex-col gap-5 flex-1 justify-between">
                        <Typography.Title level={4}>Dates</Typography.Title>
                        <div className="bg-white p-6 flex flex-col gap-5">
                            <div>
                                <p className="text-[1.3em] ">Date de début</p>
                                <p className="text-[1.5em] font-bold">{date_debut}</p>
                            </div>
                            <div>
                                <p className="text-[1.3em] ">Date de fin</p>
                                <p className="text-[1.5em] font-bold">{date_fin}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Icon path={mdiAlert} color="var(--blue)" size={1}/>
                            <p className=" font-bold text-[1.5em] text-(--blue)">{jours_restants} jours restants</p>
                        </div>
                    </div>
                    <div className=" bg-(--light-grey) p-6 flex flex-col justify-between gap-5 flex-1">
                        <Typography.Title level={4}>Réponses reçues</Typography.Title>
                        <div className="bg-white p-6 flex gap-5">
                            <Icon path={mdiMessageOutline} color="var(--blue)" size={3}/>
                            <div className= "flex flex-col gap-5">
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>{nbr_of_responses}/{nbr_of_employees}</p>
                                    <p className="text-[1.3em] ">Réponses</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <p className='font-bold text-[1.5em]'>{percentage} %</p>
                                    <p className="text-[1.3em] ">Répondants</p>
                                </div>
                            </div>
                        </div>
                        <ResponsesPercentage percentage={percentage}/>
                    </div>
                </div>
                {/* <div className="bg-(--light-grey) p-6 flex flex-col gap-5">
                    <Typography.Title level={4}>Détails des Réponses</Typography.Title>
                    <div className="flex gap-5 items-center">
                        <p className=" italic text-[1.3em]">Date de dernière réponse :</p>
                        <p className= "font-bold text-[1.2em]">20/01/2026</p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className=" italic text-[1.3em]">Nombre de réponses sur les 7 derniers jours :</p>
                        <p className= "font-bold text-[1.2em]">1</p>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    )
}