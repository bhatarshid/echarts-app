import React from 'react'
import ReactEcharts from "echarts-for-react"; 

export default function ScatterChart() {
    const scatter_chart = {
        xAxis: {
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
          {
            type: 'scatter',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
    };
    const coordinate_scatterchart= {
        xAxis: {},
        yAxis: {},
        series: [
            {
                type: 'scatter',
                data: [
                    [10, 5],
                    [0, 8],
                    [6, 10],
                    [2, 12],
                    [8, 9]
                ]
            }
        ]
    };  
    return (
        <div>
            <center><strong>6. Scatter Chart</strong></center>
            <ReactEcharts option= {scatter_chart}/>
            <ReactEcharts option= {coordinate_scatterchart}/>
        </div>
    )
}
