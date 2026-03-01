import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ donnees }: {donnees: number[]}) {

    const data = {
    labels: ["oui", "non"],
    datasets: [
        {
        data: donnees,
        backgroundColor: [
            '#E60027',
            '#F18F01',
        ],

        },
    ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom' as const,
                align: 'center' as const, // Place la légende en bas
                labels: {
                    // Modification de la police et de la couleur des labels de légende
                    color: '#000000', // Couleur du texte
                    font: {
                        size: 14,
                        family: 'Jost', // Mets ta police personnalisée ici
                        weight: 'normal' as const,
                    },
                    padding: 20, // Espace entre la légende et le graphique
                    usePointStyle: false, 
                // Tu peux aussi ajuster la taille du carré ici :
                    boxWidth: 20, 
                    boxHeight: 20, // Transforme le carré de couleur en cercle
                }
            },
            datalabels: {
                color: '#000000', // <-- TA COULEUR ICI (Blanc par exemple)
                font: {
                    weight: 'normal' as const,
                    size: 12,
                    family:"Jost"
                },
                formatter: (value: number) => {
                    return value + "%"; 
                },
            }
        },
        
        

    }

    return <Pie data={data} options={options}/>;
}