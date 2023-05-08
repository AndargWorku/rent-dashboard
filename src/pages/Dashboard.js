import React from 'react'
import '../styles/dashboard.css'
import SingleCard from "../components/reusable/SingleCard"
import MileCharts from "../charts/MileCharts"
import CarStatsChart from "../charts/CarStatsChart"

import RecommendCarCard from "../components/UI/RecommendCarCard"
import recommendCarsData from "../assets/dummy-data/recommendCars"

const carObj={
    title:'Total Cars',
    totalNumber:750,
    icon:'ri-police-car-line',
};
const tripObj={
    title:'Daily trips',
    totalNumber:1697,
    icon:'ri-steering-2-line',
};
const clientObj={
    title:'Clients Annually',
    totalNumber:'85K',
    icon:'ri-user-line',
};
const distanceObj={
    title:'Kilometers',
    totalNumber:2167,
    icon:'ri-timer-flash-line',
};
const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="dashboard_wrapper">
            <div className="dashboard_cards">
                
            <SingleCard item={carObj}/>
            <SingleCard item={tripObj}/>
            <SingleCard item={clientObj}/>
            <SingleCard item={distanceObj}/>

            </div>
            <div className="statics">
                <div className="stats">
                    <h3 className="stats_title">Miles statics</h3>
                   <MileCharts/>
                </div>
                <div className="stats">
                    <h3 className="stats_title">Cars statics</h3>
                   <CarStatsChart/>
                </div>
                

            </div>
            <div className="recommend_cars-wrapper">
            {
                recommendCarsData.map((item)=>(
                    <RecommendCarCard item={item} key={item.id}/>
                ))
            }              

            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
