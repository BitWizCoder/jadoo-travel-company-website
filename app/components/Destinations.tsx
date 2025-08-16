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
      image: "/italy.png",
      price: "$4.2k",
      days: "12 Days Trip",
    },
    {
      name: "Full Europe",
      image: "/italy.png",
      price: "$15k",
      days: "28 Days Trip",
    },
  ];

  return (
    <div className="text-center items-center mt-24">
      <div>
        <h2>DESTINATIONS</h2>
        <h1 className="text-2xl font-bold text-[#14183E] mb-18">
          Top Destinations
        </h1>
      </div>

      <div className="flex flex-col items-center">
        {contents.map((content) => (
          <div key={content.name}>
            <Image
              src={content.image}
              width={314}
              height={300}
              alt="location image"
            />
            <div>
              <div>
                <p>{content.name}</p>
                <p>{content.price}</p>
              </div>
              <p>{content.days}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
