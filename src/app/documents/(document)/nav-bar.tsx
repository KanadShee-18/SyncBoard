import Image from "next/image";
import LOGO from "/public/Images/logo3.png";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const DocNavBar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href={"/"} className="">
          <Image
            src={LOGO}
            alt="Script-board"
            width={60}
            height={60}
            quality={100}
            unoptimized
          />
        </Link>
        <h3 className="text-xl text-slate-700 font-semibold">Sync Board</h3>
      </div>
      <SearchInput />
      <div />
    </nav>
  );
};
