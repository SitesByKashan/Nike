export default function Help() {
    return (
      <div className="bg-gray-100 min-h-screen py-8">
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
            <div className="w-full md:w-2/3 pr-4 mb-8 md:mb-0">
              <h2 className="text-lg font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
              <p className="text-sm mb-4">
                We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
              </p>
              <ul className="list-disc pl-6 mb-4 text-sm">
                <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                <li>Apple Pay</li>
              </ul>
              <p className="text-sm mb-4">
                If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="text-sm mb-6">
                <strong>Nike Members</strong> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, 
                <a href="#" className="text-blue-600 hover:underline"> join us today.</a>
              </p>
              <div className="flex space-x-4 mb-6">
                <button className="bg-black text-white px-6 py-2 text-sm rounded-md">JOIN US</button>
                <button className="border border-black text-black px-6 py-2 text-sm rounded-md">SHOP NIKE</button>
              </div>
  
              <h3 className="font-bold text-lg mb-4">FAQs</h3>
              <div className="text-sm space-y-4">
                <p>
                  <strong>Does my card need international purchases enabled?</strong><br />
                  Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                </p>
                <p>
                  <strong>Can I pay for my order with multiple methods?</strong><br />
                  No, payment for Nike orders can’t be split between multiple payment methods.
                </p>
                <p>
                  <strong>What payment method is accepted for SNKRS orders?</strong><br />
                  You can use any accepted credit card to pay for your SNKRS order.
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
              <p className="text-sm mb-4">
                000 800 919 0566<br />
                Products & Orders: 24 hours a day, 7 days a week<br />
                Company Info & Enquiries: 07:30 – 16:30, Monday – Friday
              </p>
              <p className="text-sm mb-4">24 hours a day, 7 days a week</p>
              <p className="text-sm mb-4">We’ll reply within five business days</p>
              <h4 className="text-lg font-bold mb-4">STORE LOCATOR</h4>
              <p className="text-sm">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  