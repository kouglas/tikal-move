//@ts-nocheck
import Image from 'next/image'
import TikalLogo from '../app/utils/TikalLogo'



export default function Navbar(){

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <Image 
              width={150}
              height={150}
              alt='Logo for Tikal Industries'
              src={TikalLogo}
              className='block h-8 w-auto lg:hidden'
              />
              
              <Image 
              width={150}
              height={150}
              alt='Logo for Tikal Industries'
              src={TikalLogo}
              className='hidden h-8 w-auto lg:block'
              />  
            </div>
            
          </div>
          
        </div>
      </div>

    </nav>
  )
}