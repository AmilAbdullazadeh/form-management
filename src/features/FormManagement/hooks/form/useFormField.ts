'use client';

import { useCallback, useState } from 'react';

import { FormField } from '@/features/FormManagement/api/models/FormApiModel';
import { useModalState } from '@/shared/hooks/useModalState';

interface UseFormFieldsProps {
  initialFields?: FormField[];
}

export const useFormField = ({ initialFields = [] }: UseFormFieldsProps = {}) => {
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [selectedField, setSelectedField] = useState<FormField | undefined>(undefined);
  const fieldModal = useModalState(false);

  const resetFields = useCallback((newFields: FormField[] = []) => {
    setFields(newFields);
    setSelectedField(undefined);
  }, []);

  const openFieldModal = useCallback(() => {
    setSelectedField(undefined);
    fieldModal.open();
  }, [fieldModal]);

  const closeFieldModal = useCallback(() => {
    setSelectedField(undefined);
    fieldModal.close();
  }, [fieldModal]);

  const addField = useCallback((field: FormField) => {
    if (selectedField) {
      setFields(prev => prev.map(f => 
        f.name === selectedField.name ? field : f
      ));
      setSelectedField(undefined);
    } else {
      setFields(prev => [...prev, field]);
    }
  }, [selectedField]);

  const deleteField = useCallback((fieldName: string) => {
    setFields(prev => prev.filter(field => field.name !== fieldName));
  }, []);

  const editField = useCallback((field: FormField) => {
    setSelectedField(field);
    fieldModal.open();
  }, [fieldModal]);

  const reorderFields = useCallback((reorderedFields: FormField[]) => {
    setFields(reorderedFields);
  }, []);

  return {
    fields,
    selectedField,
    isFieldModalOpen: fieldModal.isOpen,
    openFieldModal,
    closeFieldModal,
    addField,
    deleteField,
    editField,
    reorderFields,
    resetFields
  };
}; 