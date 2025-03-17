import { FormEvent } from 'react';

import { FormField } from '@/features/FormManagement/api/models/FormApiModel';
import { FormModalMode } from '@/features/FormManagement/api/models/FormManagementModel';

import { FormModalContentProps } from '../FormModalContent/FormModalContent.types';

export interface FormModalRenderProps extends FormModalContentProps {
  isOpen: boolean;
  onClose: () => void;
  mode: FormModalMode;
  isSubmitting: boolean;
  handleSubmit: (e: FormEvent) => void;
  isFieldModalOpen: boolean;
  handleCloseFieldModal: () => void;
  handleSaveField: (field: FormField) => void;
  formId: string;
  selectedField?: FormField;
}
