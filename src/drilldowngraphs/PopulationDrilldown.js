import React, {useState} from 'react'
import ReactEcharts from 'echarts-for-react'
import continentPopulation, {countryPopulation} from '../data/Data.mjs';
import cloneDeep from 'lodash.clonedeep'

export default function PopulationDrilldown() {
    const [option,setOption]= useState({
        xAxis: {
            data: [continentPopulation[0][0], continentPopulation[1][0], continentPopulation[2][0],
            continentPopulation[3][0], continentPopulation[4][0], continentPopulation[5][0],]
        },
        yAxis: {},
        dataGroupId: '',
        animationDurationUpdate: 500,
        series:
        {
            type: 'bar',
            id: 'Population',
            data: [
                { value: continentPopulation[0][1], groupId: continentPopulation[0][0], itemStyle: { color: 'red' }, },
                { value: continentPopulation[1][1], groupId: continentPopulation[1][0], itemStyle: { color: 'orange' }, },
                { value: continentPopulation[2][1], groupId: continentPopulation[2][0], itemStyle: { color: 'red' }, },
                { value: continentPopulation[3][1], groupId: continentPopulation[3][0], itemStyle: { color: 'green' }, },
                { value: continentPopulation[4][1], groupId: continentPopulation[4][0], itemStyle: { color: 'blue' }, },
                { value: continentPopulation[5][1], groupId: continentPopulation[5][0], itemStyle: { color: 'indigo' }, }
            ],
            universalTransition: {
                enable: true,
                divideShape: 'clone'
            }
        },
    });
    
    const onChartClick= (events) => {
        var newOption = cloneDeep(option)
        console.log(events.data)
        if(events.data){
            var subData = countryPopulation.find(function (data){
                return data.dataGroupId === events.data.groupId;
            });
            if (!subData) {
                return;
            }
            
            newOption.xAxis = {
                data: subData.data.map(function (item){
                    return item[0];
                })
            }
            newOption.series = {
                type: 'bar',
                id: 'Population',
                dataGroupId: subData.dataGroupId,
                data: subData.data.map(function (item) {
                    console.log("item; ",item[0],item[1])
                    return { value: item[1] , 
                        groupId: item[2]  
                   };
                }),
                universalTransition: {
                    enabled: true,
                    divideShape: 'clone'
                }
            }
            newOption.graphic= [
                {
                    type: 'text',
                    left: 50,
                    top: 20,
                    style: {
                        text: 'Back',
                        fontSize: 18,
                    },
                    onclick: function () {
                        setOption(option)
                    }
                }
            ]
            setOption(newOption)
        }
    };

    

    const onEvents = {
        click: onChartClick,
    };
    return (
        <>
            <div>
                <center><strong>Population</strong></center>
                <ReactEcharts option= {option}
                    onEvents= {onEvents}    
                />
            </div>
            
        </>
    )
}
