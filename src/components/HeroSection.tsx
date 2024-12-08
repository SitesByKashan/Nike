import Image from "next/image"

export default function HeroSection() {
    return (
        <>
            <section className=" w-full h-[44px] bg-[#F5F5F5] ">
                <div className="flex flex-col  justify-between items-center">
                    <div className="text-[15px] text-[#111111] ">
                    <h5>Hello Nike App</h5>
                    </div>
                    <div className="text-[11px] text-[#111111] ">
                    <p>Download the app to access everything Nike. Get Your Great</p>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white">
      {/* Image Section */}
      {/* <div className="absolute w-full h-[977px] md:h-[70vh]">
        <Image className="w-[1344px] h-[700]"
          src="/assets/Image.png" // Replace with your image path
          alt="Nike Air Max Pulse"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}

      {/* Text Section */}
      <div className="px-4 py-8 text-center w-[1008px] h-[229px]">
        <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          First Look
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-2 text-sm md:text-base rounded-full hover:bg-gray-800">
            Notify Me
          </button>
          <button className="bg-white text-black border border-black px-6 py-2 text-sm md:text-base rounded-full hover:bg-gray-100">
            Shop Air Max
          </button>
        </div>
      </div>
    </section>
        </>
    )
}