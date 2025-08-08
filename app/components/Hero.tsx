import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h2 className="text-xl uppercase text-[#DF6951]">
          Best Destinations around the world
        </h2>
        <h1 className="text-7xl">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex gap-6">
          <Link href="/">Find out more</Link>
          <Link href="/">Play Demo</Link>
        </div>
      </div>
      <div>
        <Image
          src="/traveller.png"
          width={600}
          height={600}
          alt="Traveler Image"
        />
      </div>
    </div>
  );
}
