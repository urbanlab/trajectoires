import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function BarChart2 ({donnees, label, type, typeLabel}: {donnees: any, label: any[], type?:string, typeLabel?:string}) {



    const data = {
        labels: label, 
        datasets: [
        { 
            data: donnees,
            backgroundColor: [
            'rgba(230, 0, 39, 0.7)' ,    // #E60027 (Rouge)
            'rgba(4, 139, 168, 0.7)',   // #048BA8 (Bleu canard)
            'rgba(241, 143, 1, 0.7)',   // #F18F01 (Orange)
            'rgba(119, 116, 116, 0.7)', // #777474 (Gris)
            'rgba(153, 194, 77, 0.7)',  // #99C24D (Vert)
            'rgba(242, 226, 57, 0.7)',  // #F2E239 (Jaune)
            ],
        },
        ],
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
            display: typeLabel === undefined ? false : true ,
            anchor: 'end' as const, 
            align: 'top' as const,
            formatter: (val: string) => `${val} ${typeLabel}`,
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
                    color: '#000000',
                    font: { size: 13, family: "Jost", },
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
                grid: { display: true },
                ticks: {
                    color: '#000000',
                    font: { size: 13, family: "Jost", },
                    callback: function(value: any) {
                        return value + ( type != undefined ? type : "");
                    }
    }
                
            }
        },
    
    }


    return (
        <Bar data={data} options={options}/>
    )
}
