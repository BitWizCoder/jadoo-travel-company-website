import { PlayIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center mt-14 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg uppercase text-[#DF6951] font-bold">
          Best Destinations around the world
        </h2>
        <h1 className="text-7xl">
          Travel, enjoy <br /> and live a new <br /> and full life
        </h1>
        <p className="mx-w-xl px-6">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex gap-6">
          <Link
            href="/"
            className="bg-[#F1A501] text-white py-4 px-6 rounded-xl"
          >
            Find out more
          </Link>
          <Link href="/" className="flex items-center gap-4">
            <div className="bg-[#DF6951] rounded-full p-3">
              <PlayIcon size={32} className="text-white" />
            </div>
            Play Demo
          </Link>
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
