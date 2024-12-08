import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
        <header className="body-font  bg-[#F5F5F5]">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row w-[1440px] h-[36px]  justify-between items-center">
                <Image className="flex w-[24px] h-[24px] "
                    width={100}
                    height={100}
                    src={"/assets/Vector.png"}
                    alt={""} />

                <Image className="flex w-[146.86px] h-[26px] ml-80"
                    width={1000}
                    height={1000}
                    src={"/assets/Frame.png"}
                    alt={""} />

                <nav className="container w-[272.81px] h-[36px] flex flex-wrap items-center justify-between text-[#111111] text-sm font-helvetica -mr-12" >
                   
                        <Link href={"/"}>Find a Store</Link>
                        <div className="w-[2px] h-[14px] bg-[#111111]"></div>
                   
                    <Link href={"/"}>Help</Link>
                    <div className="w-[2px] h-[14px] bg-[#111111]"></div>
                    <Link href={"/"}>Join Us</Link>
                    <div className="w-[2px] h-[14px] bg-[#111111]"></div>
                    <Link href={"/SignIn"} className="hover:text-gray-900">Sign In</Link>
                </nav>

            </div>
            
</header>

            <header className="w-full h-[60px] flex justify-between items-center font-helvetica bg-[#FFFFFF]">
      {/* Left Side - Logo */}
      <div className="flex items-center ml-7">
        <img
          src="/assets/Nike.png"
          alt="Nike Logo"
          className="w-[78.47px] h-[78.47px]"
        />
      </div>

      {/* Middle - Navigation Links */}
      <nav className="flex ml-44 space-x-4 text-[15px] font-helvetica">
        <Link href="/" className="hover:text-gray-600">New & Featured
        </Link>
        <Link href="/" className="hover:text-gray-600">Men
        </Link>
        <Link href="/" className="hover:text-gray-600">Women
        </Link>
        <Link href="/" className="hover:text-gray-600">Kids
        </Link>
        <Link href="/" className="hover:text-gray-600">Sale
        </Link>
        <Link href="/" className="hover:text-gray-600">SNKRS
        </Link>
      </nav>

      {/* Right Side - Icons */}
      <div className="flex items-center space-x-4 mr-8">
        {/* Search Icon */}
        <div className="flex items-center">
        <img
          src="/assets/Search.png"
          alt="Nike Logo"
          className="w-[180px] h-[40px]"
        />
      </div>

        {/* Wishlist Icon */}
        <div className="flex items-center">
        <img
          src="/assets/Search Icon.png"
          alt="Nike Logo"
          className="w-[84px] h-[60px]"
        />
      </div>

      </div>
    </header>
    </>
           
    )
}