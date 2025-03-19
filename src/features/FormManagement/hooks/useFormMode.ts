'use client';

import {
  FormModalMode,
  FormModeProps,
} from '@/features/FormManagement/api/models/FormManagementModel';

export const useFormMode = ({ mode, initialValues }: FormModeProps) => {
  const isUpdateMode = mode === FormModalMode.UPDATE;
  const isViewOnly = mode === FormModalMode.VIEW || (isUpdateMode && initialValues.isReadOnly);
  const isDeleteMode = mode === FormModalMode.DELETE;
  const isCreateMode = mode === FormModalMode.CREATE;

  return {
    isUpdateMode,
    isViewOnly,
    isDeleteMode,
    isCreateMode,
  };
};
