import {Typography, Image} from 'antd'
import Vehicules from '@Commons/img/illustrations.png'
import Indisponible from '@Commons/img/rep_genres.png'
import { mdiOfficeBuilding, mdiClockTimeEightOutline   } from '@mdi/js';
import Icon from '@mdi/react';
import { PieChart } from '@Components/Charts/pieChart'
import { useEnquete } from '@/stores/enquete_results';
import { CATEGORY_MAPPING_MIDI } from '@/constants';
import BarTimeChart from '@/_components/Charts/barTimeCharts';
import BarChart2 from '@/_components/Charts/barChart2';


export default function Organisation () {
    
    const responses = useEnquete((s) => s.enquete_results)
    const qty = responses.length

    const pauseMidi: Record<string, number> = {
    "Oui": 0,
    "Non": 0
    };

    responses.forEach((r: any,) => {
        const value = r?.fields?.Pause_midi;
        if (value === true) {
            pauseMidi["Oui"] += 1;
        } else if (value === false) {
            pauseMidi["Non"] += 1;
        }
    });

    const percent_yes = Math.round((pauseMidi["Oui"] / qty) * 100)
    const percent_no = Math.round((pauseMidi["Non"] / qty) * 100)
    const percentData = [percent_yes, percent_no]

    const labelModes = ["Transports en commun", "Marche et micromobilités", "Automobile", "Deux-roues motorisés", "Vélo", "Engins de mobilité électrique"]

    const calculateTimeStats = (rawLabels: string[]) => {
    const counts: Record<string, number> = {};
    const validLabels = rawLabels.filter(l => l !== undefined && l !== null && l !== "");
    validLabels.forEach(h => {
        counts[h] = (counts[h] || 0) + 1;
    });
    const uniqueHours = Object.keys(counts);
    const percentages = uniqueHours.map(h => 
        Math.round((counts[h] / validLabels.length) * 100)
    );
    return { uniqueHours, percentages };

};
    const rawArrivee = responses.map((r: any) => r.fields?.Heure_d_arrivee);
    const rawDepart = responses.map((r: any) => r.fields?.Heure_depart);

    const arriveeStats = calculateTimeStats(rawArrivee);
    const departStats = calculateTimeStats(rawDepart);

    console.log(arriveeStats)
    console.log(departStats)

    const MidiModes  = [...responses.map((r: any) => r.fields.Quel_mode_de_deplacement)
        .filter(mode => mode !== undefined && mode !== null && mode !== "")]
    const Simplified =  MidiModes.map((mode) => CATEGORY_MAPPING_MIDI[mode])
    const StatMode: Record<string, number> = {};
    Simplified.forEach((mode) => StatMode[mode] = ( StatMode[mode] || 0) +1  )
    const total = Object.values(StatMode).reduce((acc, curr) => acc + curr, 0);
    const percentageMode: Record<string, number> = {};
    Object.keys(StatMode).forEach((mode: string) => {
            const pourcentage = Math.round((StatMode[mode] / total) * 100);
            percentageMode[mode] = pourcentage
        });
        
    const arraypercent = labelModes.map((mode) => {
        return percentageMode[mode] || 0;
    })





    return (
        <div className="flex flex-col gap-5">
            <Typography.Title level={3}>Organisation des temps et rythme de travail</Typography.Title>
            <div className="bg-(--light-grey) flex flex-col flex-1 gap-5 flex-wrap p-5">
                <div className="flex gap-5 flex-wrap ">
                    <div className="flex flex-col flex-1 gap-2 min-w-[400px]">
                        <Typography.Title level={5}>Moyenne de jours en télétravail</Typography.Title>
                        <div className="bg-white p-5 flex gap-2 flex-1 items-center">
                            <Icon path={mdiOfficeBuilding } color='var(--blue)' size={2}/>
                            <div className="flex flex-col gap-2">
                                <Image src={Indisponible} preview={false} width='80%'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2 min-w-[400px]">
                        <Typography.Title level={5}>Type d’horaires pratiqués dans l’entreprise</Typography.Title>
                        <div className="bg-white p-5 flex gap-2 flex-1 items-center">
                            <Icon path={mdiClockTimeEightOutline  } color='var(--blue)' size={2}/>
                            <div className="flex flex-col gap-2">
                                <Image src={Indisponible} preview={false} width='80%'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Typography.Title level={4}>Horaires d’arrivée des collaborateurs</Typography.Title>
                    <div className="bg-white p-5 w-full" >
                        <BarTimeChart donnees={arriveeStats.percentages} label={arriveeStats.uniqueHours} type={"%"} depart={false} />
                    </div>
                </div>
                <div className="flex-1">
                    <Typography.Title level={4}>Horaires de départ des collaborateurs</Typography.Title>
                    <div className="bg-white p-5 w-full">
                        <BarTimeChart donnees={departStats.percentages} label={departStats.uniqueHours} type={"%"} depart={true} />
                    </div>
                </div>
            </div>
            <div className='bg-(--light-grey) flex flex-col gap-5 p-5'>
                <Typography.Title level={4}>Pause méridienne</Typography.Title>
                <div className="flex gap-10 flex-wrap">
                    <div className='flex flex-col gap-2 h-[200px] min-w-[150px]'>
                        <Typography.Title level={5}>Déplacement lors de la pause méridienne</Typography.Title>

                        <PieChart donnees={percentData}/>
                    </div>
                    <div className='flex flex-col flex-1 gap-2'>
                        <Typography.Title level={5}>Mode de déplacement privilégié lors de la pause méridienne</Typography.Title>
                        <div className=' gap-2 bg-white p-5 h-[200px] w-full '>
                            <BarChart2 donnees={arraypercent} label={labelModes} type={"%"}/></div>
                        </div>
                    </div>

            </div>
            <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                <Typography.Title level={4}>Autre</Typography.Title>
                <div className="flex flex-col gap-10 items-center">
                    <Image src={Vehicules} preview={false} width="30%"></Image>
                    <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                </div>
            </div>
        </div>
    )
}