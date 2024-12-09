import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gear() {
    return (
        <div className='mb-14'>
            <div className='mt-20 mb-6'>
                <span className='text-xl font-semibold px-10 lg:px-16'>Gear Up</span>
            </div>
            <div className='flex justify-evenly flex-wrap px-4 md:px-0'>
                <div className='flex gap-x-4 items-center'>
                    <div>
                        <div className='flex items-center mb-2 opacity-0'>
                            <span>shop</span>
                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                                <ChevronLeft />
                            </div>
                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                                <ChevronRight />
                            </div>
                        </div>
                        <Image
                            src={'/assets/gearmen.png'}
                            alt='man dress'
                            width={280}
                            height={250}
                        />
                        <div className='flex justify-between items-center px-2 pt-2  flex-wrap'>

                            <div className='text-xs font-bold pr-2'>Nike Dri-FIT ADV TechKnit Ultra</div>
                            <div className='text-sm'>₹ 3 895</div>
                        </div>
                        <div>
                            <span className='text-sm text-gray-700 px-2 '>{`Men's`} Short-Sleeve </span> <br />
                            <span className='text-sm text-gray-700 px-2 '>Running Top</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-end pr-10 mb-2'>
                            <span className='text-xs sm:text-sm w-20'>Shop {`Men's`}</span>
                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1 md:mx-3 '>
                                <ChevronLeft />
                            </div>

                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 '>
                                <ChevronRight />
                            </div>
                        </div>
                        <Image
                            src={'/assets/Short.png'}
                            alt='man dress'
                            width={280}
                            height={250}
                        />
                        <div className='flex flex-col med:flex-row justify-between items-center flex-wrap px-2 pt-2'>
                            <div className='text-xs font-bold pr-2'>Nike Dri-FIT Challenger</div>
                            <div className='text-sm'>₹ 3 895</div>
                        </div>
                        <div>
                            <span className='text-sm text-gray-700 px-2 '>{`Men's`} 18cm (approx.) 2</span> <br />
                            <span className='text-sm text-gray-700 px-2 '>-in-1 Versatile Shorts </span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-4'>
                    <div>
                        <div className='flex items-center mb-2 opacity-0'>

                            <span>shop</span>

                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                                <ChevronLeft />
                            </div>

                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                                <ChevronRight />
                            </div>

                        </div>

                        <Image
                            src={'/assets/gear.png'}
                            alt='man dress'
                            width={280}
                            height={250}
                        />

                        <div className='flex justify-between items-center flex-wrap px-2 pt-2'>
                            <div className='text-xs font-bold pr-2'>Nike Dri-FIT ADV Run Division</div>
                            <div className='text-sm'>₹ 2 495</div>
                        </div>
                        <div>
                            <span className='text-sm text-gray-700 px-2 '>{`Women's`} Long-Sleeve </span> <br />
                            <span className='text-sm text-gray-700 px-2 '>Running Top</span>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center justify-end  pr-10 mb-2 '>
                            <span className='text-xs sm:text-sm w-28'>Shop {`Women's`}</span>
                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-1 md:mx-3'>
                                <ChevronLeft />
                            </div>
                            <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                                <ChevronRight />
                            </div>
                        </div>
                        <Image
                        className='pr-5 md:pr-0'
                            src={'/assets/gear2.png'}
                            alt='man dress'
                            width={280}
                            height={250}
                        />
                        <div className='flex flex-col med:flex-row  justify-between flex-wrap items-center pr-16 pt-2'>
                            <div className='text-sm font-bold pr-2'>Nike Fast</div>
                            <div className='text-sm'>₹ 3 795</div>
                        </div>
                        <div>
                            <span className='text-sm text-gray-700 px-2 '>{`Women's`} Mid-Rise 7/8 Running </span> <br />
                            <span className='text-sm text-gray-700 px-2 '>Leggings with Pockets</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
