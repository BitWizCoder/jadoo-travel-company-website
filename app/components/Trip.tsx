import Image from "next/image";

export default function Trip() {
  const itemsData = [
    {
      icon: "/icon-1.svg",
      heading: "Choose Destination",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "/icon-2.svg",
      heading: "Make Payment",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "/icon-3.svg",
      heading: "Reach Airport on Selected Date",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between md:flex-row mt-24">
      <div>
        <div className="text-center md:text-left">
          <h2>Easy and Fast</h2>
          <h1 className="text-2xl md:text-4xl font-bold text-[#14183E] mb-18">
            Book your next trip in 3 easy steps
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {itemsData.map((data) => (
            <div key={data.heading} className="flex gap-4 px-12 md:px-0">
              <div>
                <Image src={data.icon} width={50} height={50} alt="icon" />
              </div>
              <div>
                <h2 className="font-bold">{data.heading}</h2>
                <p>{data.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-auto">
        <Image src="/trip.png" width={485} height={459} alt="icon" />
      </div>
    </div>
  );
}
