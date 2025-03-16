import { FormField } from "@/features/FormManagement/api/models/FormApiModel";

export interface FieldListProps {
    fields: FormField[];
    isViewOnly: boolean;
    onAddField: () => void;
    onDeleteField?: (fieldName: string) => void;
    onEditField?: (field: FormField) => void;
    onReorderFields?: (reorderedFields: FormField[]) => void;
    addButtonLabel?: string;
    emptyMessage?: string;
}