//@ts-nocheck
"use client"
import React, { useState, useEffect } from "react"
import Map from '../../components/Map'
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Link from "next/link";

// you will want this to SK TO GET USER'S LOCATION
// as well as using the address infrom registration page to
// set location, if location request is denied. sumn
// sounds redundant here. also see about changing some of this to typescript
// add a next button that goes to the time interval route


export default function TestButton(){

  // lat /long for new mhub

  const DEFAULT_CENTER = [41.886870, -87.668060]

  const RIVER_MARKER = [41.88937319493569, -87.62329752508901]

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = ()=> {
    setIsLoading(true)

    setTimeout(()=> {
    console.log('processing'), 
    setIsLoading(false)
  }, 5000)

  }
  

  return(
    <main>
      {/* <button
        onClick={handleClick} disabled={isLoading}
        className="flex w-1/2 mx-auto mt-6 justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
        >
      {isLoading ? "Processing" : "Run Test"}
      </button> */}
      <h1 className="text-center font-bold text-xl ">Device Map</h1>

<Layout>
      <Section>
        <Container>
          <Map className='-mt-20' width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    MHUB @ Fulton Market
                  </Popup>
                </Marker>
                <Marker position={RIVER_MARKER}>
                  <Popup>
                    Chicago River
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </Container>
      </Section>
      {/* <Section className=' mt-0 flex items-center justify-center'>
      <Link 
                type="submit" 
                href='/dashboard-view'
                className="flex w-9/12 justify-center rounded-full bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-6 ">Sign up</Link>
      </Section> */}
      
    </Layout>
    
    </main>
  )
            }