import React from 'react';
import { RadialChart } from 'react-vis';

export default function ProgressBar({ data }) {
  const { percentageINSS, percentageIRPF, percentageNetSalary } = data;

  return (
    <div>
      <RadialChart
        className="container"
        colorType="literal"
        showLabels
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          stroke: 'rgb(255, 255, 255)',
          height: 40,
          fontSize: 12,
        }}
        data={[
          {
            angle: Number(percentageNetSalary),
            radius: 10,
            label: 'Salário Líquido',
            subLabel: `${percentageNetSalary}%`,
            stroke: '#000',
            color: 'rgb(22,160,133)',
          },
          {
            angle: Number(percentageIRPF),
            radius: 10,
            label: 'Desconto IRPF',
            subLabel: `${percentageIRPF}%`,
            stroke: '#000',
            color: 'rgb(192,57,43)',
          },
          {
            angle: Number(percentageINSS),
            radius: 10,
            label: 'Desconto INSS',
            subLabel: `${percentageINSS}%`,
            stroke: '#000',
            color: 'rgb(230,126,34)',
          },
        ]}
        width={300}
        height={315}
      />
    </div>
  );
}
