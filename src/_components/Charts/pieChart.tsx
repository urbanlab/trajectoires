import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement, Tooltip, Legend
)

const DEFAULT_COLORS = [
  'rgba(153, 194, 77, 0.7)',
  'rgba(241, 143, 1, 0.7)',
  'rgba(74, 144, 226, 0.7)',
  'rgba(208, 2, 27, 0.7)',
  'rgba(126, 211, 33, 0.7)',
]

export function PieChart({ donnees, labels }: { donnees: number[], labels?: string[] }) {

  const resolvedLabels = labels ?? ['oui', 'non']

  const data = {
    labels: resolvedLabels,
    datasets: [{
      data: donnees,
      backgroundColor: resolvedLabels.map((_, i) => DEFAULT_COLORS[i % DEFAULT_COLORS.length]),
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        align: 'center' as const, // Place la légende en bas
        labels: {
          // Modification de la police et de la couleur des labels de légende
          color: '#000000', // Couleur du texte
          font: {
            size: 14,
            family: 'Jost', // Mets ta police personnalisée ici
            weight: 'normal' as const
          },
          padding: 20, // Espace entre la légende et le graphique
          usePointStyle: false,
          // Tu peux aussi ajuster la taille du carré ici :
          boxWidth: 20,
          boxHeight: 20 // Transforme le carré de couleur en cercle
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const raw = context.raw as number
            const value = raw <= 0.1 ? 0 : Math.round(raw)
            return ` ${value}%`
          }
        }
      },
      datalabels: {
        color: '#000000', // <-- TA COULEUR ICI (Blanc par exemple)
        font: {
          weight: 'normal' as const,
          size: 12,
          family:'Jost'
        },
        formatter: (value: number) => {
          return value + '%'
        }
      }
    }



  }

  return <Pie data={data} options={options}/>
}