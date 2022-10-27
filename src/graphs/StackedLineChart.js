import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function StackedLineChart() {
    const option= {
        title: {
            text: 'Gradient Stacked Area Chart',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            boundaryGap: false,
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                name: 'Line1',
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                data: [140, 232, 101, 264, 90, 340, 250],
                type: 'line',
                stack: 'x',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: 'Line2',
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                data: [120, 282, 111, 234, 220, 340, 310],
                type: 'line',
                stack: 'x',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: 'Line3',
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                data: [320, 132, 201, 334, 190, 130, 220],
                type: 'line',
                stack: 'x',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: 'Line4',
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                data: [220, 402, 231, 134, 190, 230, 120],
                type: 'line',
                stack: 'x',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    opacity: 0.8,
                }
            },
            {
                name: 'Line5',
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                data: [220, 302, 181, 234, 210, 290, 150],
                type: 'line',
                stack: 'x',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                areaStyle: {
                    opacity: 0.8,
                }
            },
        ]
    };

    return (
        <div>
            <center><strong>Stacked Line Chart</strong></center>
            <ReactEcharts option= {option}/>
        </div>
    )
}
