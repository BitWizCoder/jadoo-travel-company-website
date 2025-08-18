import Image from "next/image";

export default function Destinations() {
  const contents = [
    {
      name: "Rome, Italty",
      image: "/italy.png",
      price: "$5,42k",
      days: "10 Days Trip",
    },
    {
      name: "London, UK",
      image: "/london.png",
      price: "$4.2k",
      days: "12 Days Trip",
    },
    {
      name: "Full Europe",
      image: "/europe.png",
      price: "$15k",
      days: "28 Days Trip",
    },
  ];

  return (
    <div className="text-center mt-24">
      <div>
        <h2>DESTINATIONS</h2>
        <h1 className="text-2xl font-bold text-[#14183E] mb-18">
          Top Destinations
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {contents.map((content) => (
          <div
            key={content.name}
            className="text-left shadow-gray-100 shadow rounded-xl"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={content.image}
                alt="location image"
                width={314}
                height={457}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="px-6 py-6">
              <div className="flex justify-between mb-6">
                <p className="font-semibold">{content.name}</p>
                <p className="text-gray-600">{content.price}</p>
              </div>
              <p className="text-sm text-gray-500">{content.days}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
