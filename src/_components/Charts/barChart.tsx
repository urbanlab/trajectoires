import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function BarChart () {
    const data = {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu'], // Tes étiquettes en bas
        datasets: [
        { label: 'Ventes',
          data: [12, 19, 3, 5], // Tes valeurs
          backgroundColor: ['#99C24D', '#F18F01', '#F18F01', '#E60027'], // Une couleur par barre !
        },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
        },
        scales:{
        x: {
            grid: {
            display: false 
            }
        },
        y: {
            grid: {
            display: false 
            }
        }
        }
    
    }


    return (
        <Bar data={data} options={options}/>
    )
}

