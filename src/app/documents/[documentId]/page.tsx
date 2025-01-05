import { Editor } from "./editor";
import Toolbar from "./Toolbar";
import Navbar from "./navbar";

//interface DocumentIdProps {
//  params: Promise<{ documentId: string }>;
//}
export default function page() {
  return (
    <div className="min-h-screen bg-[#fafbfd] ">
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
}
