import { DashboardMobilityData } from '@Domains/dashboardMobility/type';
import { chartDefMobility } from '@Domains/dashboardMobility/utils';

import { useMemo } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import styles from './styles.module.css';

export type MobilityBarChartProps = {
  data: DashboardMobilityData[];
  className?: string;
};

export function MobilityBarChart({ data, className }: MobilityBarChartProps) {
  const chartData = useMemo(() => {
    const mapRange = (d: number) =>
      d <= 5
        ? 'Moins de 5km'
        : d <= 10
          ? 'Moins de 10km'
          : d <= 20
            ? 'Moins de 20km'
            : 'Plus de 20km';

    const mapped = data.map((item) => ({
      Mode: item.fields.Mode_de_deplacement,
      DistanceRange: mapRange(item.fields.Distance),
    }));

    const ranges = [...new Set(mapped.map((m) => m.DistanceRange))];
    const modes = [...new Set(mapped.map((m) => m.Mode))].sort();

    const pivot = ranges.map((range) => {
      const row: Record<string, number | string> = { DistanceRange: range };
      modes.forEach((mode) => {
        row[mode] = mapped.filter(
          (m) => m.DistanceRange === range && m.Mode === mode,
        ).length;
      });
      return row;
    });

    return {
      data: pivot,
      groupKeys: modes,
      xKey: 'DistanceRange',
    };
  }, [data]);

  return (
    <ResponsiveContainer height={400} width={600}>
      <BarChart data={chartData.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={chartData.xKey} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />

        {chartData.groupKeys.map((mode, i) => (
          <Bar key={mode} dataKey={mode} fill={chartDefMobility[mode].color} radius={5}>
            <LabelList
              dataKey={mode}
              position="insideTop"
              style={{ fill: '#ffffff', fontWeight: 600 }}
              formatter={(v) => (v === 0 ? '' : v)}
            />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
