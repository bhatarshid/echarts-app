import React, { useState } from 'react'
import ReactEcharts from 'echarts-for-react';

 export default function RunningBarChart() {
     const data = [];
     for (let i = 0; i < 5; ++i) {
         data.push(Math.round(Math.random() * 200));
     }

     const [DEFAULT_OPTION, set_DEFAULT_OPTION] = useState({
     xAxis: {
         max: 'dataMax'
     },
     yAxis: {
         type: 'category',
         data: ['A', 'B', 'C', 'D', 'E'],
         inverse: true,
         animationDuration: 300,
         animationDurationUpdate: 300,
         max: 4 // only the largest 3 bars will be displayed
     },
     series: [
         {
             realtimeSort: true,
             name: 'X',
             type: 'bar',
             data: data,
             label: {
                 show: true,
                 position: 'right',
                 valueAnimation: true
             }
         }
     ],
     legend: {
    show: true
     },
     animationDuration: 0,
     animationDurationUpdate: 3000,
     animationEasing: 'linear',
     animationEasingUpdate: 'linear'
     });

     function run() {
         for (var i = 0; i < data.length; ++i) {
           if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
           } else {
             data[i] += Math.round(Math.random() * 200);
           }
         }
         set_DEFAULT_OPTION({
            xAxis: {
                max: 'dataMax'
            },
            yAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                max: 4 // only the largest 3 bars will be displayed
            },
            series: [
                {
                    realtimeSort: true,
                    name: 'X',
                    type: 'bar',
                    data: data,
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }
            ],
            legend: {
           show: true
            },
            animationDuration: 0,
            animationDurationUpdate: 3000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
         })
       }
       setTimeout(function () {
         run();
       }, 0);
       setInterval(function () {
         run();
       },3000); 
    
     return (
         <div>
           <ReactEcharts option={DEFAULT_OPTION}/>
         </div>
    )
 }
