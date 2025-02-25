"use client";

import { usePaginatedQuery } from "convex/react";
import { DocNavBar } from "./nav-bar";
import { TemplateGallery } from "./template-gallery";
import { api } from "../../../../convex/_generated/api";
import { FullScreenLoader } from "@/components/full-screen-loader";
import { DocumentsTable } from "./documents-table";

const DocumentsPage = () => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 }
  );
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed p-4 top-0 left-0 right-0 z-10 h-16 bg-white">
        <DocNavBar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default DocumentsPage;
