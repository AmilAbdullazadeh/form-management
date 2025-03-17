import { ChangeEvent } from 'react';

import { FormField } from '@/features/FormManagement/api/models/FormApiModel';
import { FormValues } from '@/features/FormManagement/api/models/FormManagementModel';

export interface FormModalContentProps {
  values: FormValues;
  errors: Record<string, string>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  isViewOnly: boolean;
  formFields: FormField[];
  handleOpenFieldModal: () => void;
  handleDeleteField?: (fieldName: string) => void;
  handleEditField?: (field: FormField) => void;
  submitError: string | null;
  reorderFormFields?: (fields: FormField[]) => void;
}
