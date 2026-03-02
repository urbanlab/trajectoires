import {Typography, Image, Spin} from 'antd'
import { CATEGORY_MAPPING } from '@/constants'
import Vehicules from '@Commons/img/illustrations.png'
import AgeMoyen from '@Commons/img/age_moyen.png'
import Genres from '@Commons/img/rep_genres.png'
import Mediane from '@Commons/img/mediane_trajets.png'
import BarChart from '@/_components/Charts/barChart'
import FavMode from '@/_components/FavMode';
import PolarChart from '@/_components/Charts/PolarChart'
import { useEnquete } from '@/stores/enquete_results';
import BarChart2 from '@/_components/Charts/barChart2';

export default function Deplacement () {

    const responses = useEnquete((s) => s.enquete_results)
   
    
    if (!responses || responses.length === 0) {
        return <div><Spin/></div>
    }

    const moyenne = (array: any[], qty: any) => {
        const sum = array.reduce((acc, curr) => acc + curr, 0)
        return Math.round(sum / qty)
    }
    
    const median = (array: any[]) => {
        const sorted = [...array].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
    }
    
    const shortest = (data:any, attribut:string) => {
        const littleValue = Math.min(...data.map((r:any )=> r.fields?.[attribut] ))
        return littleValue
    }
    
    const largest = (data:any, attribut:string) => {
        const bigValue = Math.max(...data.map((r:any )=> r.fields?.[attribut] ))
        return bigValue
    }
    const nbr_responses = responses.length
    const arrayKm = [...responses.map((r: any) => r.fields?.Distance_lieu_travail)]
    const shortestKm = shortest(responses, "Distance_lieu_travail" )
    const largestKm = largest(responses, "Distance_lieu_travail")
    const valeurMoyenne = moyenne(arrayKm, nbr_responses)
    const valeurMediane = median(arrayKm)
    
    const arrayMn = [...responses.map((r: any) => r.fields?.Temps_trajet)]
    const shortestMn = shortest(responses, "Temps_trajet")
    const largestMn = largest(responses, "Temps_trajet")
    const valeurMoyenneMn = moyenne(arrayMn, nbr_responses)
    const valeurMedianeMn = median(arrayMn)
    
    
    const dataKm = [shortestKm, valeurMoyenne, valeurMediane, largestKm]
    const dataMn =  [shortestMn, valeurMoyenneMn, valeurMedianeMn, largestMn]
    
    const labelSize = ["Trajet le plus court", "Trajet moyen", "Trajet médian", "Trajet le plus long"]
    const labelModes = ["Transports en commun", "Marche et micromobilités", "Automobile", "Deux-roues motorisés", "Vélo", "Engins de mobilité électrique"]
    
    const FavoritesModes = [...responses.map((r: any) => r.fields?.Moyens_transport_unique_ || r.fields?.Moyens_transport_multiples_)]
    .flatMap(mode => {
        if (Array.isArray(mode)) {
            return mode[0] === "L" ? mode.slice(1) : mode; 
        }
        return mode ? [mode] : [];
    })
    .filter(mode => mode !== undefined && mode !== null && mode !== "");
    
    const simplifiedFav = FavoritesModes.map((mode) => CATEGORY_MAPPING[mode])
    const total = simplifiedFav.length
    const count:Record<string, number> = {}
    simplifiedFav.forEach((mode) => count[mode] = (count[mode] || 0) +1)
    const topMode = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b)
    
    
    const StatMode: Record<string, { totalMinutes: number, qty: number }> = {};
    labelModes.forEach(mode => {
    StatMode[mode] = { totalMinutes: 0, qty: 0 };
    });


    responses.forEach((r: any) => {
    const fields = r.fields;
    const temps = fields?.Temps_trajet || 0;
    const rawMode = fields?.Moyens_transport_unique_ || fields?.Moyens_transport_multiples_;
    const modeEmployee = Array.isArray(rawMode) ? rawMode : (rawMode ? [rawMode] : []);
    const validModes = modeEmployee.filter(m => {
        const val = String(m).trim();
        return val !== "L" && val !== "l" && val !== "";
    });
    
    const nbModes = validModes.length;
    const tempsPartage = nbModes > 0 ? temps / nbModes : 0;
    validModes.forEach(m => {
        const category = CATEGORY_MAPPING[m];
        if (category && StatMode[category]) {
            StatMode[category].totalMinutes += tempsPartage;
            StatMode[category].qty += 1;
        }
    });
    
});

const dataMoyennes = labelModes.map((mode) => {
    const s = StatMode[mode];
    return s && s.qty > 0 ? Math.round(s.totalMinutes / s.qty) : 0;
});



    return (
        <div className="">
            <div className="flex flex-col gap-5">
                <Typography.Title level={3}>Pratiques de mobilité actuelle et indicateurs de trajets</Typography.Title>
                <div className="flex gap-5">
                    <div className=" flex flex-col gap-5 bg-(--light-grey) p-5 w-1/2">
                        <Typography.Title level={4}>Temps</Typography.Title>
                        <div className="bg-white h-[200px] "><BarChart donnees={dataKm} label={labelSize} type="km" /></div>
                    </div>
                    <div className=" flex flex-col gap-5 bg-(--light-grey) p-5 w-1/2">
                        <Typography.Title level={4}>Distance</Typography.Title>
                        <div className="bg-white h-[200px]"><BarChart donnees={dataMn} label={labelSize} type="min"/></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                    <Typography.Title level={4}>Public et modes de déplacement</Typography.Title>
                    <div className=" flex gap-5 flex-wrap justify-between">
                        <div className="flex flex-col gap-2 flex-1 ">
                            <Typography.Title level={5}>Mode de déplacement principal</Typography.Title>
                            <div className="bg-white flex flex-col items-center p-5 h-full ">
                            <div className="w-[50%]">
                                <FavMode mode={topMode}/>
                            </div>
                            <p className="text-[1.2em]" >{topMode}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <Typography.Title level={5}>Âge moyen</Typography.Title>
                            <div className="bg-white h-full flex flex-col gap-2" >
                                <div><Image src={AgeMoyen} preview={false} height="100%"/></div>
                                
                            </div>
                        </div>
                        < div className="flex flex-col gap-2 flex-1 ">
                            <Typography.Title level={5}>Répartition des genres</Typography.Title>
                            <div className="bg-white h-full">
                                <Image src={Genres} preview={false} height='100%' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 bg-(--light-grey) p-5 flex-1 flex-wrap">
                    <div className="flex flex-col gap-2 flex-1">
                        <Typography.Title level={5}>Détail des modes de déplacement principaux utilisés</Typography.Title>
                        <div className="bg-white w-full  flex-1 p-5">
                            <PolarChart label={labelModes} donnees={count} total={total}/></div>    
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Temps de trajet moyen par mode utilisé</Typography.Title>
                            <div className="bg-white h-[300px] p-5  flex items-end ">
                                <div className="h-[60%] w-full">
                                    <BarChart2 donnees={dataMoyennes} label={labelModes} typeLabel="min"/>
                                </div>
                            </div>    
                        </div>
                        <div className="flex flex-col gap-2">
                            <Typography.Title level={5}>Variation médiane du temps de trajet en fonction du mode utilisé</Typography.Title>
                            <div className="bg-white">
                                <Image src={Mediane} preview={false}/>
                            </div>    
                        </div>
                    </div>

                </div>
                    <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                        <Typography.Title level={5}>Autre</Typography.Title>
                        <div className="flex flex-col gap-10 items-center">
                            <Image src={Vehicules} preview={false} width="30%"></Image>
                            <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}