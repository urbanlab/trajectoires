import { DashboardMobilityData } from '@Domains/dashboardMobility/type';
import { chartDefMobility } from '@Domains/dashboardMobility/utils';

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

export type MobilityBarChartPreviewProps = {
  data: DashboardMobilityData[];
  className?: string;
};

export function MobilityBarChartPreview({ data, className }: MobilityBarChartPreviewProps) {
  const chartData = useMemo(() => {
    const total = data.length;

    const counts = data.reduce<Record<string, number>>((acc, item) => {
      acc[item.fields.Mode_de_deplacement] = (acc[item.fields.Mode_de_deplacement] ?? 0) + 1;
      return acc;
    }, {});

    const top3 = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    return top3.map(([mode, count]) => ({
      mode,
      percentage: Number(((count / total) * 100).toFixed(2)),
    }));
  }, [data]);

  return (
    <div className={`${styles.component} ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mode" />
          <YAxis hide domain={[0, (max) => max + 5]} />

          <Bar dataKey="percentage" radius={10}>
            <LabelList
              dataKey="percentage"
              content={(props: any) => {
                const { x, y, width, value, index } = props;

                if (!value || value === 0) return null;

                const entry = chartData[index];
                const def = chartDefMobility[entry.mode];

                const centerX = x + width / 2;

                const iconSize = 50;
                const iconY = y - iconSize - 10;
                const textY = y + 30;

                return (
                  <g>
                    {/* SVG */}
                    <image
                      href={def.svg}
                      x={centerX - iconSize / 2}
                      y={iconY}
                      width={iconSize}
                      height={iconSize}
                    />

                    {/* Pourcentage */}
                    <text
                      x={centerX}
                      y={textY}
                      textAnchor="middle"
                      style={{ fill: '#fff', fontWeight: 600, fontSize: '2rem' }}
                    >
                      {`${value}%`}
                    </text>
                  </g>
                );
              }}
            />

            {chartData.map((entry, index) => (
              <Cell key={index} fill={chartDefMobility[entry.mode].color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
