import Link from "next/link";
import { SearchInput } from "./search-input";
import { FileTextIcon } from "lucide-react";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex items-center shrink-0 pr-6 ">
        <Link href={"/"}>
          <FileTextIcon className="size-10 fill-blue-500 stroke-white" />
        </Link>
        <h3 className="text-lg font-bold">Docs</h3>
      </div>
      <SearchInput />
      <div className="flex items-center gap-3 pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
};
