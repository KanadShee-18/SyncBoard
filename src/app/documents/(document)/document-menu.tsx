import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  documentTitle: string;
  onNewTab: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({
  documentId,
  documentTitle,
  onNewTab,
}: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full text-gray-500 hover:text-primary"
        >
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RenameDialog documentId={documentId} initialTitle={documentTitle}>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <FilePenIcon className="size-4 mr-2" />
            Rename Document
          </DropdownMenuItem>
        </RenameDialog>
        <RemoveDialog documentId={documentId}>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <TrashIcon className="size-4 mr-2" />
            Remove
          </DropdownMenuItem>
        </RemoveDialog>
        <DropdownMenuItem
          className="group"
          onClick={() => onNewTab(documentId)}
        >
          <ExternalLinkIcon className="size-4 mr-2 group-hover:translate-x-1 transition-all duration-200" />
          <p className="group-hover:-translate-x-1 transition-all duration-200">
            Open in a new tab
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
