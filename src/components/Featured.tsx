import Image from 'next/image'
import React from 'react'

export default function Featured () {
  return (
    <div>
   <span className='text-[23px] font-medium px-10 lg:px-16 mb-8'>Featured</span>
   <div className='flex justify-center px-10'>
    <Image
    className=''
    src={'/assets/Running.png'}
    alt='shoes banner'
    width={1200}
    height={600}
    />
    </div>

    <div className="flex justify-center ">
  <div className="px-4 py-8 text-center items-center w-[1008px] h-[229px]">
    <h1 className="text-2xl md:text-5xl font-medium mt-2 mb-4">
    STEP INTO WHAT FEELS GOOD
    </h1>
    <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
    Cause everyone should know the feeling of running in that perfect pair.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex justify-center space-x-4">
      <button className="bg-black text-white px-6 py-2 text-sm md:text-base rounded-full hover:bg-gray-800">
        Find Your Shoes
      </button>
    </div>
  </div>
</div>
    </div>
  )
}
