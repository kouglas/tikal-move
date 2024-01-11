//@ts-nocheck
'use client'
import TikalLogo from '@/app/utils/TikalLogo'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import {PiEnvelopeSimple} from 'react-icons/pi'
import {TbLockSquareRounded} from 'react-icons/tb'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import {useState} from 'react'
import googleIcon from './utils/GoogleIcon'
import TikalCircle from './utils/TikalCircleLogo'
// import {HidePassword} from './utils/showPassword'

export default function Login() {
  // you need an input called "code" and it's a code that the user needs to input
  // you still need a confidence interval box on the dashboard page
  // THIS APP NEEDS TO STACK IN MOBILE VIEW

// MAKE IT MORE LIKE THIS: 
// https://tikalfilters.slack.com/files/U030RSXFUSE/F05NDQTRPFH/image.png

  // probably make this it's own function / hook /utility 

  // as of 9.12.2023
  //  THIS APP NEEDS TO STACK IN MOBILE VIEW and fit inside the view 
  // you need to switch branches when working on registration page
  // you could put random blobs on registration page
  // here is the source you usee last time:
  //  https://shuffle.dev/tools/blob-generator
  // or try stripe frosted gradient 
  // example here: 
  // https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/
  // PROBABLY BEST TOOL FOR HANDLING THIS:
  //  https://whatamesh.vercel.app/

  // click a button and a chart pops up
  // aka take input csv, then chart the data


  const [passwordVisible, setPasswordVisible] = useState(false)


    

  return (
    <main className="flex h-screen flex-col justify-center px-6 py-24 lg:px-8 border-2 border-red-500 bg-[url('/assets/wave1.svg')] ">
      {/* the section needs a shadow around it */}
      <section className="sm:mx-auto sm:w-full sm:max-w-6xl border  rounded-xl shadow-2xl flex flex-col sm:flex-row bg-white " >
        {/* need to increase box height here but it's not working */}
        {/* ALSO BEFORE CONTINUING MAKE SURE TO CHANGE BRANCH TO LOGIN TO MAKE NEXT COMMITS */}
        <div className=' w-full sm:w-4/6 p-6 rounded-xl bg-tikal-blues-200 '>
          {/* this div on the left */}
          <div className="pt-4 ml-4">
            <Image
              src={TikalLogo}
              alt='skyblue logo for tikal industries'
              width={100}
              height={100}
            />
          </div>

          <div className='text-center '>
            {/* put just the tikal logo here not the name */}
            <div className=''>
              <Image
              src={TikalCircle}
              alt='skyblue logo for tikal industries'
              width={200}
              height={200}
              className='mx-auto my-3'
              />

            </div>
          <h1 className='font-bold pt-4 text-3xl'>Welcome</h1>
          <br />
          <p>Create an account for your organization. </p>
          <br />
          <div className=' flex justify-center items-center '>
                <Link 
                  type="submit" 
                  href='/registration'
                  className="flex w-9/12 justify-center rounded-full bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase ">Sign up</Link>
              </div>
          </div>

        </div>
        <div className=' w-full sm:w-3/6 p-6'>
          {/* this div on right */}
          <div className="">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className='space-y-6 ' action="#" method='POST' >
              <div className=' justify-center space-y-2 my-8'>
                {/* add envelope icon */}
                <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                <PiEnvelopeSimple className='absolute ml-3' color='black' />
                  <input
                    required 
                    id='email' 
                    name='email' 
                    autoComplete='email' 
                    type="email" 
                    placeholder='Email' 
                    className='pr-3 pl-8 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
                  <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
                    <TbLockSquareRounded className='absolute ml-3' color='black'/> 
                  <input
                    required 
                    id="password" 
                    name="password" 
                    autoComplete="current-password"
                    placeholder='Password' 
                    type={passwordVisible ? "text" : "password"}
                    className="pr-3 pl-8 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    <div className='absolute right-0 mr-2' onClick={() => setPasswordVisible(!passwordVisible)} >
                    {passwordVisible ? (
                      <BsEyeSlash color='black' />) : (<BsEye color='black' />)}

                    </div>
                  </div>
                  <div className='mt-6'>
                      <a href="#" className='font-semibold text-tikal-cyan hover:text-indigo-500 float-right text-xs '>Forgot your password?</a>
                    </div>
              </div>
              <div>
                  {/* put lock here */}
                  <div className='text-sm'>
                    {/* change the text color to match the logo */}
                  </div>
                
              </div>
              <div>
                <Link 
                  type="submit" 
                  // onClick={handleClick}
                  href='/dashboard-view'
                  className="flex w-full justify-center rounded-full bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Sign in</Link>
              </div>
              <div className='flex justify-center'>
              <div className='h-1 bg-tikal-cyan  w-5/12'></div> 
              <p className='-mt-3 mx-1 text-gray-800'> Or </p>
              <div className='h-1 bg-tikal-cyan  w-5/12' ></div>
              </div>
              <div>
                {/* make the following link functional  */}
              <Link 
                  type="submit" 
                  // onClick={handleClick}
                  href='/dashboard-view'
                  className="flex w-full justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"> 
                  <Image
                    src={googleIcon}
                    alt='google icon'
                    width={25}
                    height={25}
                    className='pr-2'
                  />
                  
                  Google
              </Link>

                
              </div>

            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="/registration" className="font-semibold leading-6 text-black hover:text-indigo-500"> Sign up for an account</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
