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
            <section>
                <Image className=""
                src={"/assets/Image.png"}
                width={1000}
                height={1000}
                alt=""
                />
            </section>
        </>
    )
}