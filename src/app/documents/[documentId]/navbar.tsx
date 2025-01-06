import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DocumentInput } from "./document-input";
import {
  Menubar,
  MenubarItem,
  MenubarSeparator,
  MenubarTrigger,
  MenubarContent,
  MenubarShortcut,
  MenubarSubContent,
  MenubarMenu,
} from "@/components/ui/menubar";

const navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex gap-2 items-center ">
        <Link href={"/"}>
          <Image src={"./logo.svg"} alt="logo" width={40} height={40} />
        </Link>
        <div className="flex flex-col ">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
