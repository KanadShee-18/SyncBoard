"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParam } from "@/hooks/use-search-param";
import { SearchIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

export const SearchInput = () => {
  const [, setSearch] = useSearchParam();

  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef.current?.blur();
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form onSubmit={handleSubmit} className="relative max-w-[720px] w-full">
        <Input
          value={value}
          onChange={handleInputChange}
          ref={inputRef}
          placeholder="Search documents"
          className="md:text-base text-slate-800 placeholder:text-neutral-500 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65, 69, 73, .3),0_1px_3px_1px_rgba(65, 69, 73, .15)] bg-[#F0F4F8] rounded-full h-12 focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="submit"
          variant={"ghost"}
          size={"icon"}
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            type="button"
            onClick={() => {
              setValue("");
              setSearch("");
              inputRef.current?.blur();
            }}
            variant={"ghost"}
            size={"icon"}
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
          >
            <XIcon />
          </Button>
        )}
      </form>
    </div>
  );
};
