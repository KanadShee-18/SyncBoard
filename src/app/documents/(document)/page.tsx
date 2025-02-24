"use client";

import { useQuery } from "convex/react";
import { DocNavBar } from "./nav-bar";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../../convex/_generated/api";

const DocumentsPage = () => {
  const documents = useQuery(api.documents.get);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed p-4 top-0 left-0 right-0 z-10 h-16 bg-white">
        <DocNavBar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        {documents?.map((doc) => <span key={doc._id}>{doc.title}</span>)}
      </div>
    </div>
  );
};

export default DocumentsPage;
