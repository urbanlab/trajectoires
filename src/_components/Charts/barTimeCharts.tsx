import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, TimeScale, TimeSeriesScale } from 'chart.js'
import 'chartjs-adapter-date-fns'
import { callback } from 'chart.js/dist/helpers/helpers.core'


ChartJS.register(
  CategoryScale, LinearScale, BarElement, Tooltip, Legend, TimeScale, TimeSeriesScale
)


export default function BarTimeChart ({donnees, label, type, typeLabel, depart}: {donnees: any, label: any[], type?:string, typeLabel?:string, depart:boolean}) {

  const color = depart ? 'rgba(241, 143, 1, 0.7)' : 'rgba(4, 139, 168, 0.7)'

  const chartDataPoints = label.map((heureStr, index) => {
    const parts = heureStr.split('h')
    const h = parseInt(parts[0], 10)
    const m = (parts[1] && parts[1].trim() !== '') ? parseInt(parts[1], 10) : 0
    const date = new Date()
    date.setHours(
      h, m, 0, 0
    )
    return {
      x: date.getTime(),
      y: donnees[index]
    }
  })

  const data = {

    datasets: [{
      data: chartDataPoints,
      backgroundColor: [  color ],
      barThickness: 15
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true, // On le garde activé
        callbacks: {
          // Cette fonction modifie le titre du tooltip (qui affiche la date par défaut)
          title: function(context: any) {
            const date = new Date(context[0].parsed.x)
            return `${date.getHours()}h` // N'affiche que l'heure
          },
          // Optionnel : tu peux aussi personnaliser le libellé de la donnée
          label: function(context: any) {
            return `Valeur : ${context.parsed.y}${type !== undefined ? type : '%'}`
          }
        }
      },
      datalabels: {

        display: typeLabel === undefined ? false : true,
        anchor: 'end' as const,
        align: 'top' as const,
        formatter: (val: string) => `${val} ${typeLabel}`,
        color: '#000000',
        font: { weight: 'normal' as const, family: 'Jost' }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: 'time' as const,
        time: {
          unit: 'hour' as const,
          stepSize: 1,
          displayFormats: {
            hour: 'H'
          }
        },
        min: new Date().setHours(
          0, 0, 0, 0
        ),
        max: new Date().setHours(
          23, 59, 59, 999
        ),

        grid: { display: false },
        ticks: {

          source: 'auto' as const,
          autoSkip: true as const,
          maxRotation: 0,
          minRotation: 0,
          color: '#000000',
          font: { size: 13, family: 'Jost'},
          callback: function(value: any ) {
            const date = new Date(value)
            const heure = date.getHours()
            return `${heure}h`
          }
        },
        border: { display: true }
      },
      y: {
        type: 'linear' as const,
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: { display: true },
        ticks: {
          stepSize: 25,
          color: '#000000',
          font: { size: 13, family: 'Jost' },
          callback: function(value: any) {
            return value + (type !== undefined ? type : '%')
          }
        }

      }
    }

  }


  return (
    <Bar data={data} options={options}/>
  )
}
