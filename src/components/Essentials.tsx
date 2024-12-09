import Image from 'next/image'
import React from 'react'

export default function Essentials () {
  return (
    <>
<div className='mt-28 mb-0'>
        <span className='text-xl font-semibold px-10 lg:px-16'>The Essentials</span>
        </div>
        <div className='flex justify-evenly items-center mb-16 md:mb-28 flex-wrap'>
        <div className='w-96 h-[400px] overflow-hidden'>
            <Image
            className='hover:scale-105 duration-300'
               src={'/assets/Essen1.png'}
               alt=''
               width={350}
               height={550}/>
            </div>
      <div className='w-96 h-[400px] overflow-hidden my-7 md:my0 '>
            <Image
            className='hover:scale-105 duration-300'
               src={'/assets/Essen2.png'}
               alt=''
               width={350}
               height={550}/>
            </div>


<div className='w-96 h-[400px] overflow-hidden mb-14 md:mb-0'>
            <Image
            className='hover:scale-105 duration-300'
               src={'/assets/Essen3.png'}
               alt=''
               width={350}
               height={550}/>
            </div>
        </div>
        <div className='flex justify-evenly flex-wrap px-24 md:px-36 pb-20 items-center '>
            <div className='w-full md:w-auto'>
                <span className='font-semibold pl-3'>Icons</span> <br /> <br />
                <ul className='ess-ul'>
                    <li>Air Force 1</li>
                    <li>Huarache</li>
                    <li>Air Max 90</li>
                    <li>Air Max 95</li>
                </ul>
            </div>
            <div className='w-full md:w-auto'>
                <span className='font-semibold pl-3'>Shoes</span> <br /> <br />
                 <ul className='ess-ul '>
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordan Shoes</li>
                    <li>Running Shoes</li>
                </ul>
            </div>
            <div>
            <span className='font-semibold pl-3'>Clothing</span> <br /> <br />
                 <ul className='ess-ul'>
                    <li>All Clothing</li>
                    <li>Modest Clothing</li>
                    <li>Hoodies & Pullovers</li>
                    <li>Shirts & Tops</li>
                </ul>
            </div>


            <div>
            <span className='font-semibold pl-3'>{`Kids'`}</span> <br /> <br />
                 <ul className='ess-ul'>
                    <li>Infant & Toddler Shoes</li>
                    <li>`{`Kids'`} Shoes</li>
                    <li>`{`Kids'`} Jordan Shoes</li>
                    <li>`{`Kids'`} Basketball Shoes</li>
                </ul>
            </div>

        </div>
    </>
  )
}

