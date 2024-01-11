'use client'
//@ts-nocheck
// need 'use client' on a parent component of whatever
// component that uses useState
import Navbar from "@/components/Navbar";
import Link from 'next/link'

export default function Registration(){


    {/* format the registration page to one similar to 
            this one https://tikalfilters.slack.com/files/U030RSXFUSE/F05P70L6PMX/image.png
            so you should have 3 cards that hold like 3 questions
            */}

  return(
    <main>
    <Navbar />
      <form action="" className=" space-y-8 max-w-xl mx-auto my-8">
        <div className=" pb-12">
          {/* add a navbar with -tikal */}
          {/* center the content */}
          <h1 className="text-3xl my-4 text-center font-semibold">Register your account</h1>
          <div className="mt-2">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Account information</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name: </label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name:</label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Company-name" className="block text-sm font-medium leading-6 text-gray-900">Company name:</label>
              <div className="mt-2">
                <input type="text" name="Company-name" id="Company-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Organization-Affiliation" className="block text-sm font-medium leading-6 text-gray-900">Organization-Affiliation:</label>
              <div className="mt-2">
                <select name="Organization-Affiliation" id="Organization-Affiliation" autoComplete="Organization Affiliation-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option value=""></option>
                  <option value="">Agriculture </option>
                  <option value="">Energy</option>
                  <option value="">Municipal</option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
              <div className="mt-2">
              <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">Password:</label>
              <div className="mt-2">
              <input type="Password" name="Password" id="Password" autoComplete="Password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country:</label>
              <div className="mt-2">
                <select name="country" id="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option value="">Estados Unidos </option>
                  <option value="">Espana</option>
                  <option value="">China</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-span-full max-w-sm">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address:</label>
            <div className="mt-2">
              <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City:</label>
              <div className="mt-2">
                <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province:</label>
              <div className="mt-2">
                <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code </label>
              <div className="mt-2">
                <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* this div isn't controlling the breakline */}
          <Link 
            type="submit" 
            href='/device-setup'
            className="flex justify-center rounded-md bg-tikal-cyan px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-60 mx-auto -mt-10 h-14 pt-4">Sign up</Link>
        </div>
      </form>
      
    </main>
    
  )

}