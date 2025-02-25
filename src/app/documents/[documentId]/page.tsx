import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { ToolBar } from "./tool-bar";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdProps) => {
  const { documentId } = await params;
  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD]">
          <Navbar />
          <ToolBar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentIdPage;
