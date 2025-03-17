'use client';

import { FormModalMode, FormModeProps } from '@/features/FormManagement/api/models/FormManagementModel';

export const useFormMode = ({ mode, initialValues }: FormModeProps) => {
  const isUpdateMode = mode === FormModalMode.UPDATE;
  const isViewOnly = mode === FormModalMode.VIEW || (isUpdateMode && initialValues.isReadOnly);

  return {
    isUpdateMode,
    isViewOnly,
    isCreateMode: mode === FormModalMode.CREATE,
    isViewMode: mode === FormModalMode.VIEW
  };
}; 