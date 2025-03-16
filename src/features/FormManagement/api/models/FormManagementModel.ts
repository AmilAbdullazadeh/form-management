import { Form, FormField } from '@/features/FormManagement/api/models/FormApiModel';

export enum FormModalMode {
  CREATE = 'creating',
  UPDATE = 'updating',
  VIEW = 'viewing',
  DELETE = 'deleting'
}

export interface FormModalState {
  isOpen: boolean;
  mode: FormModalMode;
  selectedFormId: string | null;
} 

export interface FormValues {
  name: string;
  isVisible: boolean;
  isReadOnly: boolean;
}

export interface FieldFormValues extends Pick<FormValues, 'name'> {
  type: string;
  isRequired: boolean;
}

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: FormModalMode;
  initialForm?: Partial<Form>;
}

export interface FieldModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (field: FormField) => void;
  existingFields?: FormField[];
  fieldToEdit?: FormField;
}

export interface FormModeProps {
  mode: FormModalMode;
  initialValues: FormValues;
}