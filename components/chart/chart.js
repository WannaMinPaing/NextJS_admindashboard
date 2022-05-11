import styles from "./chart.module.css"
import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const chart = (props) => {
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: props.chartLabel,
        fill: true,
        lineTension:0.2,
        backgroundColor: 'rgba(46, 172, 231, 0.8)',
        borderColor: 'rgba(79, 157, 226, 0.8)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 70]
      }
    ] 
  };
  
  return (
    <div className={styles.chart}><div>
    <div className={styles.title}>{props.title}</div>
    <Line data={data} height={"100%"} options={{ maintainAspectRatio: true }} />
    
  </div></div>
  )
}






export default chart;
// https://itnext.io/chartjs-tutorial-with-react-nextjs-with-examples-2f514fdc130