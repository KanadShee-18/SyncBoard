import Image from "next/image";
import LOGO from "/public/Images/logo3.png";
import SYNC_BOARD_LOGO from "/public/Images/sync-board.png";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

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
        <Image
          src={SYNC_BOARD_LOGO}
          alt="Collaboration"
          width={130}
          height={80}
        />
      </div>
      <SearchInput />
      <div className="flex gap-3 pl-6 items-center">
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/documents"}
          afterLeaveOrganizationUrl="/documents"
          afterSelectOrganizationUrl={"/documents"}
          afterSelectPersonalUrl={"/documents"}
        />
        <UserButton />
      </div>
    </nav>
  );
};
