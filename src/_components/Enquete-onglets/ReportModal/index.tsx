import {Typography, Image} from 'antd'
import Carte from '@Commons/img/carte.png'
import { useEnquete } from '@/stores/enquete_results';
import FreinsMode from '@/_components/freinsMode';


export default function ReportModal () {
    const responses = useEnquete((s) => s.enquete_results)
    const freins: Record<string, Record<string, number>> = {
        covoiturage: {},
        velo: {},
        transports_communs: {},
    }
    const mapping = [
    { field: 'Freins_au_covoiturage', cat: 'covoiturage' },
    { field: 'Freins_au_velo', cat: 'velo' },
    { field: 'Freins_transports_en_commun', cat: 'transports_communs' }
    ];

    responses.forEach((r: any) => {
        mapping.forEach(({ field, cat }) => {
            const raw = [r.fields?.[field]].flat();
            
            const clean = raw.filter(val => typeof val === 'string' && val !== "L" && val !== "");
            
            clean.forEach((raison) => {
                freins[cat][raison] = (freins[cat][raison] || 0) + 1;
            });
        });
    });
    const topFreins: Record<string, { raison: string, qty: number }[]> = {};
    Object.keys(freins).forEach((category) => {
        topFreins[category] = Object.entries(freins[category])
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([raison, qty]) => ({ raison, qty }));
    });



    return(
        <div className= "flex flex-col gap-5">
            <Typography.Title level={3}>Évolutions souhaitées et report modal</Typography.Title>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
                <Typography.Title level={4}>Freins à l’usage d’un mode de transport</Typography.Title>
                <div className='flex lg:flex-row  flex-col gap-5 justify-between'>
                    <div className=" flex flex-col gap-5 flex-1">
                        <Typography.Title level={5} className="whitespace-nowrap">Freins pour les transports en communs</Typography.Title>
                        <FreinsMode mode="bus" freins={topFreins.transports_communs}/>
                    </div>
                    <div className=" flex flex-col gap-5  flex-1">
                        <Typography.Title level={5} className="whitespace-nowrap">Freins pour le vélo</Typography.Title>
                        <FreinsMode mode="velo" freins={topFreins.velo}/>
                    </div>
                    <div className=" flex flex-col gap-5  flex-1 ">
                        <Typography.Title level={5} className="whitespace-nowrap">Freins pour le covoiturage</Typography.Title>
                        <FreinsMode mode='voiture' freins={topFreins.covoiturage}/>
                    </div>

                </div>
            </div>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
                <Typography.Title level={4}>Mode de déplacement souhaité</Typography.Title>
                <div>

                </div>
            </div>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
                <Typography.Title level={4}>Carte isochrone en vélo à partir du lieu de travail </Typography.Title>
                <div>
                    <Image src={Carte} width='100%' preview ={false}/>
                </div>
            </div>
        </div>
    )
}