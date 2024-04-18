// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';



export function Chart() {
    // const now = new Date();
    // const revers = new Date(now);
    // console.log(revers)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

    //   {
    //     date: "date",
    //     time: "time"
    //     pages: "pages"
    //   }
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
             display: false,
            position: 'left',
          },
          title: {
            display: true,
            text: 'Кількість сторінок/день',
            position: 'top',
            align: 'start',
            padding: 20
          },
        }}
      
    //   const labels = ['', '', '', '', '', '', ''];
    const fakeData = [3, 5, 4, 6, 8, 10, 9];
      
 const data = {
        labels: fakeData.map(()=> ''),
        datasets: [
          {
            // label: 'Dataset 1',
            data: fakeData,
            // .map((num) => num ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
  return <Line options={options} data={data} />;
}