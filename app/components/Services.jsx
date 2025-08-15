import Image from "next/image";

export default function Services() {
  const serviceContents = [
    {
      image: "/weather.png",
      heading: "Calculated Weather",
      paragraph: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      image: "/flights.png",
      heading: "Best Flights",
      paragraph: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      image: "/events.png",
      heading: "Local Events",
      paragraph:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      image: "/customization.png",
      heading: "Customization",
      paragraph:
        "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div className="text-center items-center">
      <div>
        <h2>CATEGORY</h2>
        <h1 className="text-2xl font-bold text-[#14183E] mb-18">
          We Offer Best Services
        </h1>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        {serviceContents.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mb-12"
          >
            <div className="flex flex-col flex-wrap">
              <Image
                src={item.image}
                width={92}
                height={92}
                alt="weather image"
              />
              <h3 className="text-xl font-bold py-4">{item.heading}</h3>
              <p className="w-46">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
