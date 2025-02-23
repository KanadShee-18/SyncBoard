import { Editor } from "./editor";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
