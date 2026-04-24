import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'


ChartJS.register(
  CategoryScale, LinearScale, BarElement, Tooltip, Legend
)


export default function BarChartHorizontal ({donnees, label}: {donnees: any, label: any[]}) {

  const data = {
    labels: label,
    datasets: [{
      label: 'Mode de déplacement souhaité',
      data: donnees[0],
      backgroundColor: ['rgba(153, 194, 77, 0.7)'],
      barPercentage: 0.6,
      categoryPercentage: 0.9
    }, {
      label: 'Dont mode de déplacement actuel est l\'automobile',
      data: donnees[1],
      backgroundColor: ['rgba(241, 143, 1, 0.7)'],
      barPercentage: 0.6,
      categoryPercentage: 0.9
    }]
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: true,
        anchor: 'end' as const,
        align: 'end' as const,
        offset: 0,
        color: '#000000',
        font: { weight: 'bold' as const, family: 'Jost' }
      },
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          font: { family: 'Jost', size: 14 },
          color: '#000000'
        }
      }
    },
    scales: {
      x: {
        min: 0,
        max: (Math.max(...donnees[0], ...donnees[1]) + 1),
        stepSize: 1,
        beginAtZero: true,
        grid: { display: true },
        ticks: {
          precision: 0,
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
          color: '#000000',
          font: { size: 13, family: 'Jost' }
        },
        border: { display: true }
      },
      y: {
        display: true,
        grid: { display: false },
        ticks: {
          color: '#000000',
          font: { size: 13, family: 'Jost' }
        }
      }
    }
  }


  return (
    <Bar data={data} options={options}/>
  )
}
