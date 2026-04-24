import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(
  ArcElement, Tooltip, Legend
)


export default function DoughnutChart () {

  const data = {
    labels: [
      'Rouge',
      'Bleu',
      'Jaune'
    ],
    datasets: [{
      label: 'Mon Dataset',
      data: [
        300,
        50,
        100
      ],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverOffset: 4, // Petit effet sympa au survol
      borderWidth: 0 // Pour un look plus moderne sans bordures entre les parts
    }]
  }

  const options = {
    cutout: '70%', // Contrôle l'épaisseur du trou central (0% = Camembert plein)
    plugins: {
      legend: { display: false } // Pour garder ton style minimaliste
    }
  }


  return (
    <Doughnut data={data} options={options}/>
  )
}