//@ts-nocheck
'use client'
import ActionBanner from "@/components/ActionBanner"
import InfoBanner from "@/components/InfoBanner"
import DashboardNav from "@/components/DashboardNav"
import DeployedDevices from "@/components/DeployedDevices"
import FacilityImage from "@/components/FacilityImage"
import SidebarNav from "@/components/SidebarNav"
// import BarChart from "@/graphs/BarChart"
// import GradientGauge from "@/graphs/GradientGauge"
// import LineGraph from "@/graphs/LineGraph"
import WaterLineGraph from "@/graphs/WaterGraph"
import ChlorellaLineGraph from "@/graphs/ChlorellaGraph"
import CustomLineGraph from "@/graphs/CustomLineGraph"
import TestButton from "../test-button/page"
import React, { useState, useEffect } from "react"


export default function Dashboard(){


  const [clickCount, setClickCount] = useState(0);
  const handleGetSampleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };


  return (
    <main className="">
      <section>
        <div className="fixed top-0 left-0 w-full h-4 z-10">
        <DashboardNav />
        </div>
        <div className="fixed top-16 left-0 h-screen w-16 z-10">
        <SidebarNav />
        </div>
      </section>
      <section className="">
        <div className="">
          <div className="flex">
            <div className="w-2/3">
            <div className="space-y-4">
              <div className="ml-24 mt-20">
                <h1 className="text-2xl font-semibold">inti results</h1>
              </div>
            <InfoBanner/>
            <ActionBanner />
            </div>
          </div>
          <div className="">
        <FacilityImage />
        </div>
            </div>
        
        </div>
      {/* <DeployedDevices /> */}
      </section>
      
      {/* <section className="flex w-11/12 m-auto  mt-6">
        
      </section> */}

      {/* two wide graphs */}

      <section className="w-11/12 m-auto flex border">
      <div className="ml-16 w-5/12 h-72 border ">
        {/* Data display for collected temperature at multiple locations */}
        {/* <GradientGauge /> */}
        {/* lets put Deployed Devices component here */}
        {/* <DeployedDevices /> */}
        <TestButton />
      </div>
      <div className="ml-16 w-6/12 h-80">
        {/* Collected data CO2 respiration measurement for soil */}
        {/* i would consider just putting text in this one */}
        {/* <LineGraph /> */}
        {/* <WaterLineGraph />
        <ChlorellaLineGraph /> */}
        {/* <AnabaenaLineGraph /> */}
        <DeployedDevices />
      </div>
      </section>

      
        <div>
          <button
            onClick={handleGetSampleClick}
            className="flex w-1/2 mx-auto justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-10"
          >
            Get Sample
          </button>
        </div>

        <section className="mt-2 ml-20">
        <CustomLineGraph csvFileName={`data${clickCount}.csv`} title={`Data ${clickCount}`} />
        </section>
      

      
    </main>
  )
}
