import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function LineChart() {
    
    //generates data
    const get_data = () => {
        var data = [];
        for (let i = 0; i < 3; ++i) {
            data.push(Math.round(Math.random() * 200));
        }
        return data;
    }

    const line_chart = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: get_data(),
                type: 'line'
            }
        ]
        
    };

     const stacked_linechart={
        tooltip: {
            trigger: 'axis'
        },
         xAxis: {
             type: 'category',
             data: ['A', 'B', 'C']
         },
         yAxis: {
             type: 'value'
         },
         series: [
             {
                 data: get_data(),
                 type: 'line',
                 stack: 'x',
                 areaStyle: {}
             },
             {
                 data: get_data(),
                 type: 'line',
                 stack: 'x',
                 areaStyle: {}
             }
         ]
     };

     const area_chart= {
        tooltip: {
            trigger: 'axis'
        },
        xAxis:{
            data: ['A', 'B', 'C']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: get_data(),
                type: 'line',
                areaStyle: {}
            },
            {
                data: get_data(),
                type: 'line',
                areaStyle: {
                    color: 'red',
                    opacity: 0.50
                }
            }
        ]

     }
    return (
        <div>
            <center><strong>4. Example of Line Chart</strong></center>
            <ReactEcharts option= {line_chart}/>
            <center>Stacked Line Chart</center>
            <ReactEcharts option= {stacked_linechart}/>
            <center>Area Line Chart</center>
            <ReactEcharts option= {area_chart}/>
        </div>
    )
}
