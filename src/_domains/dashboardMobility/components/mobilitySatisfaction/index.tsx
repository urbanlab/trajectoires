import { DashboardMobilityData } from '@Domains/dashboardMobility/type';
import { chartDefAverage } from '@Domains/dashboardMobility/utils';

import { useMemo } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import styles from './styles.module.css';

export type MobilitySatisfactionProps = {
  data: DashboardMobilityData[];
  className?: string;
};

export function MobilitySatisfaction({ data, className }: MobilitySatisfactionProps) {
  const chartData = useMemo(() => {
    const counts = data.reduce<Record<string, number>>((acc, item) => {
      const s = Number(item.fields.Satisfaction);
      acc[s] = (acc[s] ?? 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([satisfaction, count]) => ({
        satisfaction: `${satisfaction}/5`,
        count,
      }))
      .sort((a, b) => Number(a.satisfaction) - Number(b.satisfaction));
  }, [data]);

  return (
    <ResponsiveContainer height={400} width={600}>
      <BarChart data={chartData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis type="number" allowDecimals={false} />
        <YAxis type="category" dataKey="satisfaction" />

        <Bar dataKey="count" barSize={20} radius={[10, 10, 10, 10]}>
          {/* Couleurs dynamiques */}
          {chartData.map((entry) => {
            const key = entry.satisfaction.split('/')[0]; // "3/5" -> "3"
            return <Cell key={entry.satisfaction} fill={chartDefAverage[key]} />;
          })}

          {/* Labels */}
          <LabelList
            dataKey="count"
            position="insideRight"
            style={{ fill: '#fff', fontWeight: 600 }}
            formatter={(v) => (v === 0 ? '' : `${v} réponse${Number(v) > 1 ? 's' : ''}`)}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
