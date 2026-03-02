import { PolarArea } from 'react-chartjs-2';
import {Chart as ChartJS,ArcElement,Tooltip,Legend, RadialLinearScale,} from 'chart.js';
import { cpSync } from 'fs';
import { Rectangle } from 'recharts';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

export default function PolarChart ({label, donnees, total}: {label: any[], donnees:any, total: number}) {

  
  const arrayPercent = [(donnees["Transport en commun"] / total) * 100, (donnees["Marche et micromobilités"] / total) * 100, (donnees["Automobile"] / total) * 100, (donnees["Deux-roues motorisés"] / total) * 100, (donnees["Vélo"] / total) * 100 , (donnees["Engins de mobilité électrique"] / total) * 100]

    const data = {
  labels: label
  ,
  datasets: [{
    
    data: arrayPercent,
    backgroundColor: [
  'rgba(230, 0, 39, 0.7)' ,    // #E60027 (Rouge)
  'rgba(4, 139, 168, 0.7)',   // #048BA8 (Bleu canard)
  'rgba(241, 143, 1, 0.7)',   // #F18F01 (Orange)
  'rgba(119, 116, 116, 0.7)', // #777474 (Gris)
  'rgba(153, 194, 77, 0.7)',  // #99C24D (Vert)
  'rgba(242, 226, 57, 0.7)',  // #F2E239 (Jaune)
],
  }]
};

const options ={
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: true,
      formatter: (value: string, context: any) => {
        
        return context.chart.data.labels[context.dataIndex];
      },
      anchor: 'end' as const, 
      align: 'end' as const,   
      offset: 10,
    },
    legend: {
              display: true,
              position: 'bottom' as const,
              labels: {
                  padding: 20,
                  color: '#000000',
                  font: {
                    family: 'Jost',
                    size: 14,           
                    weight: 'normal' as const
                  },
                  
              }
          },
          
  },
  scales: {
  r: {
    grid: {
      display: true,
      color: 'rgba(0, 0, 0, 0.5)', // Un peu plus sombre
      lineWidth: 1,               // 👈 Épaisseur des cercles (par défaut c'est 1)
    },

  }
}
}
    return(
        <PolarArea data={data} options={options}/>
    )
}