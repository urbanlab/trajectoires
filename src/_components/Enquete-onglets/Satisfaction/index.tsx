import {Typography, Image} from 'antd'
import Vehicules from '@Commons/img/illustrations.png'
import { CATEGORY_MAPPING } from '@/constants'
import SyntheseMode from "@/_components/Enquete-onglets/Satisfaction/Synthese-mode"
import { useEnquete } from '@/stores/enquete_results';
import BarChart2 from '@/_components/Charts/barChart2';




export default function Satsifaction () {
    const responses = useEnquete((s) => s.enquete_results)

    const labelModes = ["Transports en commun", "Marche et micromobilités", "Automobile", "Deux-roues motorisés", "Vélo", "Engins de mobilité électrique"]

    const StatMode: Record<string, { totalMinutes: number, qty: number }> = {};
    labelModes.forEach(mode => {
    StatMode[mode] = { totalMinutes: 0, qty: 0 };
    });


    responses.forEach((r: any) => {
    const fields = r.fields;
    const temps = fields?.Temps_trajet || 0;
    const rawMode = fields?.Moyens_transport_unique_ || fields?.Moyens_transport_multiples_;
    const modeEmployee = Array.isArray(rawMode) ? rawMode : (rawMode ? [rawMode] : []);
    modeEmployee.forEach(m => {
        let cleanMode = m.startsWith("L") ? m.slice(1) : m;
        const category = CATEGORY_MAPPING[cleanMode];
        if (category && StatMode[category]) {
            StatMode[category].totalMinutes += temps;
            StatMode[category].qty += 1;
        }
    });
});

const dataMoyennes = labelModes.map((mode) => {
        const s = StatMode[mode];
        return s && s.qty > 0 ? Math.round(s.totalMinutes / s.qty) : 0;
    });


    return (
        <div className="flex flex-col gap-5">
            <Typography.Title level={3}>Expérience usager et perception des modes</Typography.Title>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5 flex-1">
                <Typography.Title level={4}>Niveau de satisfaction du déplacement (mode actuel)</Typography.Title>
                <div>///GRAPHIQUE</div>
            </div>
            <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
                <Typography.Title level={4}>Synthèse par mode</Typography.Title>
                <SyntheseMode mode={"community"}/>
                <SyntheseMode mode={"micromobility"}/>
                <SyntheseMode mode={"velo"}/>
                <SyntheseMode mode={"car"}/>
                <SyntheseMode mode={"two-wheels"}/>
                <SyntheseMode mode={"electric"}/>
            </div>
            <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
                <Typography.Title level={5}>Autre</Typography.Title>
                <div className="flex flex-col gap-10 items-center">
                    <Image src={Vehicules} preview={false} width="30%"></Image>
                    <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
                </div>
            </div>
        </div>
    )
}