import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className='text-center bg-gray-100 py-2 '>
            <p className='text-lg'>Hello Nike App</p>
            <p className='text-gray-600 text-[11px]'>Download the app to access everything Nike. <span className='text-black underline cursor-pointer'>Get Your Great</span> </p>
        </div>

    <div className='flex justify-center px-10'>
    <Image
    className=''
    src={'/assets/Image.png'}
    alt='shoes banner'
    width={1200}
    height={600}
    />
    </div>

    <div className="flex justify-center ">
  <div className="px-4 py-8 text-center items-center w-[1008px] h-[229px]">
    <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
      First Look
    </h5>
    <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
      NIKE AIR MAX PULSE
    </h1>
    <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse — designed to push you past your limits and help you go to the max.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex justify-center space-x-4">
      <button className="bg-black text-white px-6 py-2 text-sm md:text-base rounded-full hover:bg-gray-800">
        Notify Me
      </button>
      <button className="bg-black text-white px-6 py-2 text-sm md:text-base rounded-full hover:bg-gray-800">
        Shop Air Max
      </button>
    </div>
  </div>
</div>


    </div>
  )
}

export default HeroSection