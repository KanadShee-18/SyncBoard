import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import LOGO from "/public/Images/logo3.png";

interface FullScreenLoaderProps {
  label?: string;
  className?: string;
}

export const FullScreenLoader = ({
  className,
  label,
}: FullScreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Image
        src={LOGO}
        alt="Sync Board"
        width={100}
        height={100}
        unoptimized
        quality={100}
        className="animate-pulse opacity-70"
      />
      <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
