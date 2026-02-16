import Text from '@Commons/text.json';
import { DashboardMobilityData } from '@Domains/dashboardMobility/type';
import { chartDefAverage } from '@Domains/dashboardMobility/utils';

import { Typography } from 'antd';

import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

import styles from './styles.module.css';

export type MobilitySatisfactionPreviewProps = {
  data: DashboardMobilityData[];
  className?: string;
};

export function MobilitySatisfactionPreview({ data, className }: MobilitySatisfactionPreviewProps) {
  const average = data.length
    ? data.reduce((sum, item) => {
        const value = Number(item.fields.Satisfaction);
        return sum + (isNaN(value) ? 0 : value);
      }, 0) / data.length
    : 0;

  const chartData = [{ name: 'avg', value: (average / 5) * 100 }];

  const color =
    average < 0.6
      ? chartDefAverage['0']
      : average < 1.6
        ? chartDefAverage['1']
        : average < 2.6
          ? chartDefAverage['2']
          : average < 3.6
            ? chartDefAverage['3']
            : average < 4.6
              ? chartDefAverage['4']
              : chartDefAverage['5'];

  return (
    <div className={`${styles.component} ${className}`}>
      <ResponsiveContainer width={'100%'} height={200} style={{ marginBottom: '-100px' }}>
        <RadialBarChart
          innerRadius="65%"
          outerRadius="100%"
          barSize={18}
          data={chartData}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={10} fill={color} />
        </RadialBarChart>
      </ResponsiveContainer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        {average.toFixed(1)}/5
      </Typography.Title>
      <Typography.Text
        style={{ display: 'block', textAlign: 'center', marginBottom: 16 }}
      >
        {Text.dashboard.mobility.satisfactionPreview.text}
      </Typography.Text>
    </div>
  );
}
