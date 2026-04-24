import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Tooltip, Legend
)


export default function BarChart ({donnees, label, type}: {donnees: any[], label: any[], type:string}) {

  const unite = type === 'km' ? 'km' : type === 'min' ? 'Minutes' : ''

  const Moyenne = []

  const data = {
    labels: label, // Tes étiquettes en bas
    datasets: [{
      data: donnees,
      backgroundColor: [
        '#99C24D',
        '#F18F01',
        '#F18F01',
        '#E60027'
      ] // Une couleur par barre !
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 35, left: 20, right: 20 }
    },
    plugins: {
      datalabels: {
        anchor: 'end' as const,
        align: 'end' as const,
        formatter: (val: string) => `${val} ${unite}`,
        color: '#000000',
        font: { family: 'Jost' }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false }
      },
      y: {
        display: true,
        grid: { display: true },
        ticks: {
          color: '#000000',
          font: { family: 'Jost', size: 12 }
        },
        border: { display: false }
      }
    }
  }


  return (
    <Bar data={data} options={options}/>
  )
}

