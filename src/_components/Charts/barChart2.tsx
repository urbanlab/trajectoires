import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function BarChart2 ({donnees, label, type}: {donnees: any, label: any[], type:string}) {

    const dataMoyennes = label.map((mode) => {
        const s = donnees[mode];
        return s && s.qty > 0 ? Math.round(s.totalMinutes / s.qty) : 0;
    });

    const unite = type === "km" ? "km" : type === "min" ? "Minutes" : ""

    const data = {
        labels: label, // Tes étiquettes en bas
        datasets: [
        { 
            data: dataMoyennes,
            backgroundColor: ['#99C24D', '#F18F01', '#F18F01', '#E60027'],
        },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
            anchor: 'end' as const, 
            align: 'top' as const,
            formatter: (val: string) => `${val} ${unite}`,
            color: '#000000',
            font: { weight: 'normal' as const, family: "Jost" }
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: { 
                grid: { display: false },
                ticks: {
                    autoSkip: false, 
                    maxRotation: 0, 
                    minRotation: 0,
                    font: { size: 13, family: "Jost" },
                    callback: function(value: any, index: number) {
                        const labelText = label[index];
                        if (labelText.length > 15) {
                            return labelText.split(' ');
                            }
                        return labelText;
                    }
                },
                border: { display: true } 
            },
            y: { 
                display: true, 
                grid: { display: true }
            }
        },
    
    }


    return (
        <Bar data={data} options={options}/>
    )
}
