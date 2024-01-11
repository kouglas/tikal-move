//@ts-nocheck
import Image from 'next/image'
import FirstDeployedDevice from './FirstDeployedDevice'

export default function DeployedDevices() {

  return (
    <section className='ml-0 max-w-3xl'>
      <div className=''>
        <p className='  text-xl font-bold'>Deployed Devices</p>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {/* <li className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <Image
              alt='image for device 1'
              src={FirstDeployedDevice}
              width= {50}
              height={50}
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>Inti Device 1</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>Basement pipe</p>
            </div>
          </div>
          <div className='hidden sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>Recent Alerts (0)</p>
            <div class="mt-1 flex items-center gap-x-1.5">
              <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
              <p class="text-xs leading-5 text-gray-500">Online</p>
            </div>
            
          </div>
        </li> */}
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <Image
              alt='image for device 1'
              src='/assets/soccer.jpg'
              width= {50}
              height={50}
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>Inti Device 1</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>Event Space (Mhub)</p>
            </div>
          </div>
          <div className='hidden sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>Recent Alerts (3)</p>
            <div class="mt-1 flex items-center gap-x-1.5">
              <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
              <p class="text-xs leading-5 text-gray-500">Online</p>
            </div>
            
          </div>
        </li>
        {/* <li className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <Image
              alt='image for device 1'
              src='/assets/baseball.jpg'
              width= {50}
              height={50}
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>Inti Device 3</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>Kitchen Garbage Disposal (3rd floor)</p>
            </div>
          </div>
          <div className='hidden sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>Recent Alerts (1)</p>
            <div class="mt-1 flex items-center gap-x-1.5">
              <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
            </div>
              <p class="text-xs leading-5 text-gray-500">Online</p>
            </div>
            
          </div>
        </li> */}
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <Image
              alt='image for device 1'
              src='/assets/spaceperson.jpg'
              width= {50}
              height={50}
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>Inti Device 2</p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>Chicago River</p>
            </div>
          </div>
          <div className='hidden sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>Recent Alerts(0)</p>
            <div class="mt-1 flex items-center gap-x-1.5">
              <div class="flex-none rounded-full bg-red-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-red-500"></div>
            </div>
              <p class="text-xs leading-5 text-gray-500">Offline</p>
            </div>
            
          </div>
        </li>

      </ul>
    </section>
  )
}