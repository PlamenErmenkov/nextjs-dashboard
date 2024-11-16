import { lusitana } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex items-center justify-center flex-1`}
    >
      <div className="w-32 h-32 hidden md:flex items-center justify-center md:w-40 md:h-40">
          <Image
            src="/interface.png"
            alt="dashboard logo"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center text-black md:hidden">
          <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
          <p>Home</p>
        </div>
    </div>
  );
}
