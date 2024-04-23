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
import {useSelector} from 'react-redux'
import { selectChekout, selectIsStarted, selectPrevChekout } from '../../../redux/training/selectors'


export function Chart() {
//   export const selectChekout = state => state.training.checkout;
// export const selectIsStarted = state => state.traning.isStarted;
// export const selectPrevChekout = state => state.traning.prevChekout;
  const isStarted = useSelector(selectIsStarted)
  const checkout = useSelector(isStarted ? selectChekout : selectPrevChekout)
  const arrayForSort = [...checkout]

  arrayForSort.sort(function(a, b) {
      // Преобразуем в число для сравнения
      return Number.parseInt(a.unix) - Number.parseInt(b.unix);
    });

    console.log(checkout)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

      
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
    // const fakeData = [3, 5, 4, 6, 8, 10, 9];
      
 const data = {
        labels: arrayForSort.map(()=> ''),
        datasets: [
          {
            // label: 'Dataset 1',
            data: arrayForSort.map((chek)=> chek.pages),
            // .map((num) => num ),
            borderColor: ' #FF6B08',
            backgroundColor: '#FF6B08',
          },
        ],
      };
  return <Line options={options} data={data} />;
}