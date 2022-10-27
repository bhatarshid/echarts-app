import React, {useState} from 'react'
import ReactEcharts from 'echarts-for-react'
import cloneDeep from 'lodash.clonedeep'

export default function DrilldownGraph() {
    
    const [DEFAULT_OPTION, set_DEFAULT_OPTION] = useState({
        xAxis: {
          data: ['Animals', 'Fruits', 'Cars']
        },
        yAxis: {},
        dataGroupId: '',
        animationDurationUpdate: 2500,
        series: {
          type: 'bar',
          id: 'sales',
          data: [
            {value: 5,groupId: 'animals'},
            {value: 2,groupId: 'fruits'},
            {value: 4,groupId: 'cars'}
          ],
          universalTransition: {
            enabled: true,
            divideShape: 'clone'
          }
        }
      }
      )
      const drilldownData = [
        {
          dataGroupId: 'animals',
          data: [
            ['Cats', 4],
            ['Dogs', 2],
            ['Cows', 1],
            ['Sheep', 2],
            ['Pigs', 1]
          ]
        },
        {
          dataGroupId: 'fruits',
          data: [
            ['Apples', 4],
            ['Oranges', 2]
          ]
        },
        {
          dataGroupId: 'cars',
          data: [
            ['Toyota', 4],
            ['Opel', 2],
            ['Volkswagen', 2]
          ]
        }
      ];

      const onChartClick = (events) => {
        var newOption = cloneDeep(DEFAULT_OPTION); 
        if (events.data) {
            var subData = drilldownData.find(function (data) {
              return data.dataGroupId === events.data.groupId;
            });
            if (!subData) {
              return;
            }
            
            newOption.xAxis =  {
                data: subData.data.map(function (item) {
                  return item[0];
                })
                
            }
            
            newOption.series = {
              
                type: 'bar',
                id: 'sales',
                dataGroupId: subData.dataGroupId,
                data: subData.data.map(function (item) {
                    return item[1];
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
                        set_DEFAULT_OPTION(DEFAULT_OPTION)
                    }
                }
            ]
            set_DEFAULT_OPTION(newOption)
            
          }
          
      };

     
      const onEvents = {
        click: onChartClick,
      };
    return (
        <div>
           <ReactEcharts option={DEFAULT_OPTION}
            onEvents={onEvents}
           />
        </div>
    )
}
