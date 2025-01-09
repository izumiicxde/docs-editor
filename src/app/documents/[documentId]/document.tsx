"use client";
import { Editor } from "./editor";
import Toolbar from "./Toolbar";
import Navbar from "./navbar";
import { Room } from "./Room";
import { api } from "../../../../convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export function Document({ preloadedDocument }: DocumentProps) {
  const document = usePreloadedQuery(preloadedDocument);

  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfd] w-full">
        <div className="w-full flex flex-col px-4 gap-y-2 fixed top-0 left-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0 w-full">
          <Editor />
        </div>
      </div>
    </Room>
  );
}
