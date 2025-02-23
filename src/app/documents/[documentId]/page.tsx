import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { ToolBar } from "./tool-bar";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Navbar />
      <ToolBar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
