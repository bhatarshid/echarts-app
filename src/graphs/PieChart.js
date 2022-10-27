import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function PieChart() {
    const pie_chart= {
        series: [
            {
                type: 'pie',
                data: [
                    { value: 335, name: 'English' },
                    { value: 500, name: 'Physics' },
                    { value: 265, name: 'Biology' }
                ],
                radius: '90%'
            }
        ]
        
    };

    const doughnut_chart= {
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['A', 'B', 'C']
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                labelLine: {
                    show: false
                },
                avoidLabelOverlap: false,   //avoids label overlap
                label: {
                    show: false,    //hides label until we hover
                    position: 'center',
                    emphasis: {
                      show: true
                    }
                },
                emphasis: {
                    label: {
                      show: true,
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                },                
                data: [
                    { value: 335, name: 'A' },
                    { value: 234, name: 'B' },
                    { value: 1548, name: 'C' }
                ]
            }
        ]
    };
    const rosetype_piechart = {
        
        series: [
          {
            type: 'pie',
            roseType: 'area',
            data: [
                { value: 335, name: 'A' },
                { value: 234, name: 'B' },
                { value: 1548, name: 'C' }
            ]            
          }
        ]
      };
    return (
        <div>
            <center><strong>5. Examples of Pie Chart</strong></center>
            <ReactEcharts option= {pie_chart}/> <br/>
            <center>Doughnut Chart</center>
            <ReactEcharts option= {doughnut_chart}/>
            <center>Rose Type Chart</center>
            <ReactEcharts option= {rosetype_piechart}/>
        </div>
    )
}
