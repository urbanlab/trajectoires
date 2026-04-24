import { PolarArea } from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale} from 'chart.js'

ChartJS.register(
  ArcElement, Tooltip, Legend, RadialLinearScale
)

export default function PolarChart ({label, donnees, total}: {label: any[], donnees:any, total: number}) {


  const arrayPercent = [
    Math.max((donnees['Transports en commun'] / total) * 100, 0.1),
    Math.max((donnees['Marche'] / total) * 100, 0.1),
    Math.max((donnees['Automobile'] / total) * 100, 0.1),
    Math.max((donnees['Deux-roues motorisés'] / total) * 100, 0.1),
    Math.max((donnees['Vélo'] / total) * 100, 0.1),
    Math.max((donnees['Micromobilités'] / total) * 100, 0.1)
  ]

  const data = {
    labels: label
    ,
    datasets: [{

      data: arrayPercent,
      backgroundColor: [
        'rgba(230, 0, 39, 0.7)',    // #E60027 (Rouge)
        'rgba(4, 139, 168, 0.7)',   // #048BA8 (Bleu canard)
        'rgba(241, 143, 1, 0.7)',   // #F18F01 (Orange)
        'rgba(119, 116, 116, 0.7)', // #777474 (Gris)
        'rgba(153, 194, 77, 0.7)',  // #99C24D (Vert)
        'rgba(242, 226, 57, 0.7)'  // #F2E239 (Jaune)
      ]
    }]
  }

  const options ={
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const raw = context.raw as number
            const value = raw <= 0.1 ? 0 : Math.round(raw)
            return ` ${value}%`
          }
        }
      },
      datalabels: { display: false },
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
          }

        }
      }

    },
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          color: '#000000',
          font: { family: 'Jost', size: 13 }
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.12)',
          lineWidth: 1
        }
      }
    }
  }
  return (
    <PolarArea data={data} options={options}/>
  )
}