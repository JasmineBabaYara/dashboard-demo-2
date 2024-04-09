import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
      title: {
        display: true,
        text: "Number of Visits",
      },
      legend: {
        position: 'top',
        align: 'center',
        display:false,
      }
  },
};

export const data = {
//   labels: ['Red', 'Blue', 'Yellow', ],
  datasets: [
    {
      label: '%',
      data: [25, 75],
      backgroundColor: [
        'red',
        'rgba(330, 0, 1, 0.2)',
      ],
      borderColor: [
        'red',
        'rgba(330, 0, 1, 0.2)',
      ],
      borderWidth: 1,
      cutout: '70%',
      borderRadius: 50, 
      spacing: 2
    },
  ],
};

export default function App() {
  return(<div className="h-[17rem]"><Doughnut data={data} /> </div>) ;
}
