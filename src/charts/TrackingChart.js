
import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,Tooltip,CartesianGrid} from "recharts"

import trackingData from "../assets/dummy-data/trackingData"
const TrackingChart = () => {
  return (
    <ResponsiveContainer width="100%">
        <LineChart>
    <CartesianGrid strokeDasharray='' stroke="#b7ffe913"/>
    <XAxis dataKey="name" stroke='#ddd'/>
   
    <Line type='monotone' dataKey='km' data={trackingData}
    stroke='#e1424e'
    strokeWidth={2}
    activeDot={{r:8}}/>
    <Tooltip wrapperClassName='tooltip_style'/>
        </LineChart>
      
    </ResponsiveContainer>
  )
}

export default TrackingChart
