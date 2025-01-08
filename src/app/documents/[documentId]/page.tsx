import { Editor } from "./editor";
import Toolbar from "./Toolbar";
import Navbar from "./navbar";
import { Room } from "./Room";

export default function page() {
  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfd] w-full">
        <div className="w-full flex flex-col px-4 gap-y-2 fixed top-0 left-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0 w-full">
          <Editor />
        </div>
      </div>
    </Room>
  );
}
