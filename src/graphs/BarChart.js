import React from 'react'
import ReactEcharts from 'echarts-for-react'
//import * as echarts from 'echarts'


export default function BarChart() {
    
    const bar_chart= {
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: [23, 24, 18, 25, 27, 28, 25],
                showBackground: true,
                backgroundStyle: {
                color: 'rgba(109, 225, 225, 225)'}
            },
            {
                type: 'bar',
                data: [26, 24, 18, 22, 23, 20, 27]
            }
        ],
        
    };

    const stacked_bar= {
        xAxis:{
            data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
            {
                data: [10, 22, 28, 43, 49],
                type: 'bar',
                stack: 'x'
            },
            {
                data: [5, 4, 3, 5, 10],
                type: 'bar',
                stack: 'x'
            } 
        ]
    };

    
    return (
        <>
            <div>
                <center><strong>3. Example of Bar Chart</strong></center>
                <ReactEcharts option={bar_chart}/>
                <center>Stacked Bar</center>
                <ReactEcharts option={stacked_bar}/>
            </div>
        </>
    )
}
