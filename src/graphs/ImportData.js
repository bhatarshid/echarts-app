import ReactEcharts from "echarts-for-react";
import React from 'react'

export default function ImportData() {
    var option1 = {
        xAxis: {
          type: 'category',
          data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            name: '2015',
            data: [89.3, 92.1, 94.4, 85.4]
          },
          {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
          }
        ]
      };
     
      const option2 = {
        legend: {
            orient: 'horizontal',
            top: 'top'
        },
        tooltip: {},
        dataset: {
          // Provide a set of data.
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        // Declare an x-axis (category axis).
        // The category map the first column in the dataset by default.
        xAxis: { 
            type: 'category', 
            
        },
        // Declare a y-axis (value axis).
        yAxis: {},
        // Declare several 'bar' series,
        // every series will auto-map to each column by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar'}]
      };
    return (
        <>
            <div >
                <strong>1. Define data under series</strong>
                <ReactEcharts option={option1}/>
            </div>
            <div>
                <strong>2. Define data in database</strong>
                <ReactEcharts option={option2}/>
            </div>
        </>    
    )
}
