import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function BarChart ({donnees, label, type}: {donnees: any[], label: any[], type:string}) {

    const unite = type === "km" ? "km" : type === "min" ? "Minutes" : ""
    
    const Moyenne = []

    const data = {
        labels: label, // Tes étiquettes en bas
        datasets: [
        { 
        data: donnees, 
          backgroundColor: ['#99C24D', '#F18F01', '#F18F01', '#E60027'], // Une couleur par barre !
        },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
            anchor: 'start' as const, // Positionne l'ancre en haut de la barre
            align: 'top' as const,
            formatter: (val: string) => `${val} ${unite}`, // Ton unité
            color: '#FFFFFF',
            font: { weight: 'bold' as const }
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: { 
                grid: { display: false },
                border: { display: false } // Supprime la ligne de l'axe
            },
            y: { 
                display: false, // 4. SUPPRIME L'AXE Y COMPLETEMENT
                grid: { display: false }
            }
        },
    
    }


    return (
        <Bar data={data} options={options}/>
    )
}

