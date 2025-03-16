import { Form } from "@/features/FormManagement/api/models/FormApiModel";

export interface FormItemCardProps {
  form: Form;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  className?: string;
}