import { Form } from "@/features/FormManagement/api/models/FormApiModel";

export interface FormCardListProps {
  forms: Form[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  emptyMessage?: string;
  className?: string;
}
