import { DocNavBar } from "./nav-bar";

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed p-4 top-0 left-0 right-0 z-10 h-16 bg-white">
        <DocNavBar />
      </div>
      <div className="mt-16">content</div>
    </div>
  );
};

export default DocumentsPage;
