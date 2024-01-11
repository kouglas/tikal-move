"use client"
//@ts-nocheck
import TikalLogo from '@/app/utils/TikalLogo'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import {PiEnvelopeSimple} from 'react-icons/pi'
import {TbLockSquareRounded} from 'react-icons/tb'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import {useState} from 'react'
import googleIcon from '../utils/GoogleIcon'
import TikalCircle from '../utils/TikalCircleLogo'
import Navbar from '@/components/Navbar'
import {FaUnity} from 'react-icons/fa6'
import {FcOrgUnit} from 'react-icons/fc' 
import {GiSattelite} from 'react-icons/gi'
import {GiDefenseSatellite} from 'react-icons/gi'

export default function DeviceSetup() {

  const [passwordVisible, setPasswordVisible] = useState(false)

  // maybe make the cards more square add space between, center the icons, 
  // make ring on hover, make them link to the dashboard route or whatever the 
  // next step is. maybe add a link to purchasing or contacting to get a device
  // the current sign up can be changed into a buy device link
  // center the header and make it larger 3xl
  // put a gradient on the h1's
  // still need like a focus ring or border when the cards are clicked 
  // reduce the size of the button. 


  return (
    <main className="flex h-screen flex-col justify-center px-6 py-24 lg:px-8 border-2 border-red-500 bg-[url('/assets/wave1.svg')] ">

      {/* <header className=' border-2 border-yellow-300'>
        <div className=''>
        <Navbar />
        </div>
      </header> */}
      <div>
        <h1 className='text-3xl font-bold text-center mb-4'>Choose a device to setup</h1>
      </div>
    
    <section className="sm:mx-auto sm:w-full sm:max-w-3xl border rounded-xl shadow-2xl flex flex-col sm:flex-row border-pink-400 gap-36 " >    
    
    <div className='w-2/5 p-6 rounded-xl border-2 border-black bg-white hover:bg-tikal-blues-200 active:bg-gray-100  focus:border-tikal-blues-700 focus-within:shadow-lg'>
        {/* this div on the left */}
      <div className='text-center'>
        <h1 className='font-bold pt-4 text-2xl text-gray-900 my-auto'>Satellite</h1>
          <br />

          {/* <GiSattelite
            size={200}
          /> */}
          <Link
            href='set-location'          
          >
            <div className='flex items-center justify-center border border-tikal-cyan mx-auto'>
              <GiDefenseSatellite
                size={200}
                color = 'teal'
                className='object-center'
              />
            </div>    
          </Link>
          <br />
      </div>
    </div>
    <div className='w-2/5 p-6 rounded-xl bg-white hover:bg-tikal-blues-200 active:bg-gray-100  focus:border-tikal-blues-700 focus-within:shadow-lg'>
        {/* this div on right */}
      <div className="text-center">
        <h1 className="pt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Base Unit</h1>
          <br />
          {/* <FaUnity /> */}
          <Link
            href={''}
          >
            <div className='flex items-center justify-center border border-lime-700'>
              <FcOrgUnit
                size={200}
                className='object-center'
              />
          </div>
          </Link>
          <br />
      </div>
    </div>
    </section>
    <div className=' flex justify-center items-center '>
              <Link 
                type="submit" 
                href='/set-location'
                className="flex w-9/12 justify-center rounded-full bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-6 ">Sign up</Link>
            </div>
  </main>
  )


}