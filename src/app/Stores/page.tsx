export default function Stores() {
  const stores = [
    {
      name: "Nike NYC - House of Innovation 000",
      address: "650 5th Ave, New York, NY, 10019, US",
      status: "Closed",
      openTime: "Opens at 11:00 am",
    },
    {
      name: "Nike By Upper East Side",
      address: "1131 3rd Ave, New York, NY, 10065, US",
      status: "Closed",
      openTime: "Opens at 11:00 am",
    },
    {
      name: "Nike By Flatiron",
      address: "156 Fifth Ave, New York, NY, 10010, US",
      status: "Closed",
      openTime: "Opens at 11:00 am",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 mx-8 border-r">
        <h1 className="text-xl font-bold mb-4">Find a Nike Store</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Location"
            className="w-full p-3 mr-3 border rounded-md focus:ring focus:outline-none"
          />
        </div>
        <div className="w-[250px] h-[1px] bg-[#111111] my-4"></div>
        <ul>
          {stores.map((store, index) => (
            <li key={index} className="mb-6 text-[15px]">
              <h2 className=" font-semibold">{store.name}</h2>
              <p className="text-gray-500">{store.address}</p>
              <p className="text-red-500">{store.status}</p>
              <p className="text-gray-700">{store.openTime}</p>
              <div className="w-[250px] h-[1px] bg-[#111111] my-4"></div>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="text-[#111111] hover:underline block mt-4"
        >
          View All Stores
        </a>
      </aside>

      {/* Map */}
      <div className="flex-1">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24139.88219928233!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3162b3a5f5%3A0x9ad2ff5e5b911bd3!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1638958297891!5m2!1sen!2sus"
          className="w-full h-full"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}
