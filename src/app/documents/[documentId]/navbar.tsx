import Link from "next/link";
import LOGO from "/public/Images/logo3.png";
import Image from "next/image";
import { DocumentInput } from "./document-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Image
            src={LOGO}
            alt="Script-board"
            width={50}
            height={50}
            quality={100}
            unoptimized
          />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
        </div>
      </div>
    </nav>
  );
};
