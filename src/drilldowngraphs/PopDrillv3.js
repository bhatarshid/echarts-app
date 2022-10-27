import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import {asiaPopulation, africaPopulation, europePopulation, indiaPopulation, chinaPopulation, pakistanPopulation,
    nigeriaPopulation, ethiopiaPopulation, russiaPopulation, turkeyPopulation, germanyPopulation} from '../data/Data.mjs'

    //problem in going back
const MultiDrilldown = (props) => {
  const { width, height } = props;

  const divEL = useRef(null);
  
  useEffect(() => {
    
    const continentPopulation = {
        chartType: "pie",
        dataGroupId: "1", // In root level, this field dosen't matter
        data: [
          // x,                 y,      groupId
          ["Asia",          3261050390, "asia"], 
          ["Africa",        1340598147, "africa"],
          ["Europe",        747636026 , 'europe'],
          ['North America', 592072212,  'northamerica' ],
          ['South America', 430759766,  'southamerica'],
          ['Australia',     43111704,   'australia' ]
        ],
      };
  
      const allDataGroups = [
        //1st level
        continentPopulation,
        //2nd level
        asiaPopulation,
        africaPopulation,
        europePopulation,
        //3rd level
        indiaPopulation,
        chinaPopulation,
        pakistanPopulation,
        nigeriaPopulation,
        ethiopiaPopulation,
        russiaPopulation,
        turkeyPopulation,
        germanyPopulation
      ];

    const allOptions = {};
    
    allDataGroups.forEach((dataGroup, index) => {
      
      const { chartType, dataGroupId, data } = dataGroup;
      if(chartType === "pie"){
        const option = {
            dataGroupId: dataGroupId,
            animationDurationUpdate: 500,
            series: {
              type: "pie",
              
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                 borderRadius: 8
              },

              data: [
                { value: data[0][1], name: data[0][0], id: data[0][2]},
                { value: data[1][1], name: data[1][0], id: data[1][2]},
                { value: data[2][1], name: data[2][0], id: data[2][2]},
                { value: data[3][1], name: data[3][0], id: data[3][2]},
                { value: data[4][1], name: data[4][0], id: data[4][2]},
                { value: data[5][1], name: data[5][0], id: data[5][2]},
                
              ],
              universalTransition: {
                enabled: true,
                divideShape: "clone",
              },
            },
            graphic: [
              {
                type: "text",
                left: 50,
                top: 20,
                style: {
                  text: "Back",
                  fontSize: 18,
                },
                onclick: function () {
                  goBack();
                },
              },
            ],
          };
          allOptions[dataGroupId] = option;
      }
      else{
        const option = {
            xAxis: {
              type: "category",
            },
            yAxis: {},
            dataGroupId: dataGroupId,
            animationDurationUpdate: 500,
            series: {
              type: "bar",
              // id: "sales",
              encode: {
                x: 0,
                y: 1,
                itemGroupId: 2,
              },
              data: data,
              universalTransition: {
                enabled: true,
                divideShape: "clone",
              },
            },
            graphic: [
              {
                type: "text",
                left: 50,
                top: 20,
                style: {
                  text: "Back",
                  fontSize: 18,
                },
                onclick: function () {
                  goBack();
                },
              },
            ],
          };
          allOptions[dataGroupId] = option;
      }
      
    });
    // A stack to remember previous dataGroups
    const dataGroupIdStack = [];

    const goForward = (dataGroupId) => {
      let chartDOM = divEL.current;
      let instance = echarts.getInstanceByDom(chartDOM)
      // push current dataGroupId into stack. i,e; clicking first time would push
      //1 into stack, 2nd time would push continent name in stack
      dataGroupIdStack.push(instance.getOption().dataGroupId); 
      instance.setOption(allOptions[dataGroupId]);
    };

    const goBack = () => {
      if (dataGroupIdStack.length === 0) {
        console.log("Already in root dataGroup!");
      } else {
        console.log("Go back to previous level");
        let chartDOM = divEL.current;
        let instance = echarts.getInstanceByDom(chartDOM);
        instance.setOption(allOptions[dataGroupIdStack.pop()]);
      }
    };

    
    let chartDOM = divEL.current;
    let instance = echarts.getInstanceByDom(chartDOM);
    if (!instance) {
      instance = echarts.init(chartDOM);    //forms instance of echarts
      instance.on("click", (params) => {
        console.log(dataGroupIdStack.length)
        console.log(1)
        if(dataGroupIdStack.length === 0){
            console.log(2)
            const dataGroupId = params.data.id;
            goForward(dataGroupId);
            console.log(3)
        }else{
            console.log(4)
            if (params.data[2]) {
                const dataGroupId = params.data[2];
                goForward(dataGroupId);
                console.log(5)
              }
        }
      });
    }
    instance.setOption(allOptions["1"]); // show root group (dataGroupId = 1) when init.

    //below segment destroys the chart instance 
    return () => {
      instance.dispose();
    };
  }, []);

  return <div ref={divEL} style={{ width, height }}></div>;
};

export default MultiDrilldown;
