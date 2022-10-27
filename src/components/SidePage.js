import React from 'react'
import { Routes, Route } from "react-router-dom";
import BarChart from "../graphs/BarChart";
import LineChart from "../graphs/LineChart";
import PieChart from "../graphs/PieChart";
import ScatterChart from "../graphs/ScatterChart";
import StackedLineChart from "../graphs/StackedLineChart";
import DrilldownGraph from "../drilldowngraphs/DrilldownGraph";
import MultiDrilldown from "../drilldowngraphs/MultiDrilldown"
import PopDrillv2 from "../drilldowngraphs/PopDrillv2"
import PopDrillv3 from "../drilldowngraphs/PopDrillv3"
import RunningBarChart from "../graphs/RunningBarChart";
function SidePage() {
  return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/BarChart" element={<BarChart/>}/>
                    <Route path="/LineChart" element={<LineChart/>}/>
                    <Route path="/PieChart" element={<PieChart/>}/>
                    <Route path="/RunningBarChart" element={<RunningBarChart/>}/>
                    <Route path="/ScatterChart" element={<ScatterChart/>}/>
                    <Route path="/StackedLineChart" element={<StackedLineChart/>}/>
                    <Route path="/DrilldownGraph" element={<DrilldownGraph/>}/>
                    <Route path="/MultiDrilldown" element={<MultiDrilldown/>}/>
                    <Route path="/PopDrillv2" element={<PopDrillv2 width={1000} height={500}/>}/>
                    <Route path="/PopDrillv3" element={<PopDrillv3 width={1000} height={500}/>}/>
                </Routes>
            </section>
        </React.Fragment>  
  )
}

export default SidePage