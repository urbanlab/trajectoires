import {Typography, Image} from 'antd'
import Vehicules from '@Commons/img/illustrations.png'
import { CATEGORY_MAPPING } from '@/constants'
import SyntheseMode from '@/_components/Enquete-onglets/Satisfaction/Synthese-mode'
import { useEnquete } from '@/stores/enquete_results'
import BarChartSmiley from '@/_components/Charts/barChart2'




export default function Satsifaction () {
  const responses = useEnquete((s) => s.enquete_results)

  const labelModes = [
    'Transports en commun',
    'Marche',
    'Automobile',
    'Deux-roues motorisés',
    'Vélo',
    'Micromobilités'
  ]

  const StatMode: Record<string, { statifactionTotal: number, qty: number }> = {}
  labelModes.forEach(mode => {
    StatMode[mode] = { statifactionTotal: 0, qty: 0 }
  })


  const countsByMode: Record<string, { good: Record<string, number>, bad: Record<string, number> }> = {}
  labelModes.forEach(mode => {
    countsByMode[mode] = { good: {}, bad: {} }
  })

  responses.forEach((r: any) => {
    const fields = r.fields
    const rawGood = fields?.Criteres_satisfaction || []
    const rawBad = fields?.Criteres_insatisfaction || []
    const rawMode = fields?.Moyens_transport_unique_ || fields?.Moyens_transport_multiples_ || []
    const modes = (Array.isArray(rawMode) ? rawMode : [rawMode])
      .filter(m => m !== 'L' && m !== '')
      .map(m => CATEGORY_MAPPING[m.startsWith('L') ? m.slice(1) : m])
      .filter(cat => cat && countsByMode[cat])
    modes.forEach(category => {
      const listGood = Array.isArray(rawGood) ? rawGood : [rawGood]
      listGood.forEach(reason => {
        const res = String(reason).trim()
        if (res !== 'L' && res !== '') {
          countsByMode[category].good[res] = (countsByMode[category].good[res] || 0) + 1
        }
      })
      const listBad = Array.isArray(rawBad) ? rawBad : [rawBad]
      listBad.forEach(reason => {
        const res = String(reason).trim()
        if (res !== 'L' && res !== '') {
          countsByMode[category].bad[res] = (countsByMode[category].bad[res] || 0) + 1
        }
      })
    })
  })

  const extractTop3 = (reasonCounter: Record<string, number>): string[] => {
    return Object.entries(reasonCounter)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([reason]) => reason)
  }
  const finalStatsByMode = labelModes.map(mode => ({
    mode: mode,
    topSatisfaction: extractTop3(countsByMode[mode].good),
    topInsatisfaction: extractTop3(countsByMode[mode].bad)
  }))



  responses.forEach((r: any) => {
    const fields = r.fields
    const satisfaction = fields?.Satisfait_de_vos_habitudes || 0
    const rawMode = fields?.Moyens_transport_unique_ || fields?.Moyens_transport_multiples_
    const modeEmployee = Array.isArray(rawMode) ? rawMode : (rawMode ? [rawMode] : [])
    modeEmployee.forEach(m => {
      const cleanMode = m.startsWith('L') ? m.slice(1) : m

      const category = CATEGORY_MAPPING[cleanMode]
      if (category && StatMode[category]) {
        StatMode[category].statifactionTotal += satisfaction
        StatMode[category].qty += 1
      }
    })
  })

  const dataMoyennes = labelModes.map((mode) => {
    const s = StatMode[mode]
    return s && s.qty > 0 ? Math.round(s.statifactionTotal / s.qty) : 0
  })





  return (
    <div className="flex flex-col gap-5">
      <Typography.Title level={3}>Expérience usager et perception des modes</Typography.Title>
      <div className="bg-(--light-grey) p-5 flex flex-col gap-5 flex-1">
        <Typography.Title level={4}>Niveau de satisfaction du déplacement (mode actuel)</Typography.Title>
        <div className="bg-white p-5 h-[300px]">
          <BarChartSmiley donnees={dataMoyennes} label={labelModes} />
        </div>
      </div>
      <div className="bg-(--light-grey) p-5 flex flex-col gap-5">
        <Typography.Title level={4}>Synthèse par mode</Typography.Title>
        {finalStatsByMode.map((mode, index) => {
          return (
            <div key={index}>
              <SyntheseMode mode={mode.mode} satis={mode.topSatisfaction} insatis={mode.topInsatisfaction}/>
            </div>
          )
        })}

      </div>
      <div className="flex flex-col gap-2 bg-(--light-grey) p-5 flex-1">
        <Typography.Title level={5}>Autre</Typography.Title>
        <div className="flex flex-col gap-10 items-center">
          <Image src={Vehicules} preview={false} width="30%"></Image>
          <p className="font-bold text-[1.2em]">De futurs indicateurs seront disponibles dans une prochaine version du logiciel.</p>
        </div>
      </div>
    </div>
  )
}