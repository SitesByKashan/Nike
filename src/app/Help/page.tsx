import FAQs from "@/components/FAQs";
import Image from "next/image";
import Link from "next/link";
export default function Help() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen py-8 font-helvetica">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-center text-xl md:text-2xl font-bold mb-6">GET HELP</h1>
        <div className="text-center mb-8">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0">
            <h2 className="text-[28px] font-medium mb-4 ">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            <p className="text-sm mb-4">
              We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="text-sm mb-4">
              If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
            </p>
            <p className="text-sm mb-6">
              <strong>Nike Members</strong> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, 
              <a href="#" className="text-[#111111] hover:underline"> join us today.</a>
            </p>
            <div className="flex space-x-4 mb-6">
                <Link href={"/JoinUs"}>
              <button className="bg-black text-white px-6 py-2 text-sm rounded-3xl">JOIN US</button>
              </Link>
              <Link href={'/'}>
              <button className="bg-black text-white px-6 py-2 text-sm rounded-3xl">SHOP NIKE</button>
              </Link>
            </div>

{/* FAQs Component */}
           <FAQs/>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3 font-helvetica text-[#111111] items-center ">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-[28px] font-medium mb-4 text-center">CONTACT US</h3>
            <Image 
            className="w-[64px] h-[64px] items-center mb-4"
            src={"/assets/Phone.png"} 
            alt={""} 
            width={100} 
            height={100} />
            <p className="text-[16px] font-normal mb-4 text-center items-center">
              <span className="font-semibold">000 800 919 0566</span><br />
              Products & Orders: 24 hours a day<br/> 7 days a week<br />
              Company Info & Enquiries: 07:30 – <br/> 16:30, Monday – Friday
            </p>
            </div>
            <div className="flex flex-col items-center mb-8">
            <Image 
            className="w-[64px] h-[64px] items-center"
            src={"/assets/Contact.png"} 
            alt={""} 
            width={100} 
            height={100} />
            <span className="font-semibold text-sm">24 hours a day</span>
              <p className="text-sm">7 days a week</p>
            </div>
            <div className="flex flex-col items-center mb-8">
            <Image 
            className="w-[64px] h-[64px] items-center"
            src={"/assets/Message.png"} 
            alt={""} 
            width={100} 
            height={100} />
            <span className="font-semibold text-sm">We&apos;ll reply within</span>
              <p className="text-sm">five business days</p>
            </div>
            <div className="flex flex-col items-center mb-8">
            <Image 
            className="w-[64px] h-[64px] items-center"
            src={"/assets/Location.png"} 
            alt={""} 
            width={100} 
            height={100} />
            <span className="font-semibold text-sm">STORE LOCATION</span>
              <p className="text-sm">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
