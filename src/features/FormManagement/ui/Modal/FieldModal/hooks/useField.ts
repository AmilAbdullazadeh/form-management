'use client';

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';

import { FormField } from '@/features/FormManagement/api/models/FormApiModel';
import {
  FieldFormValues,
  FieldModalProps,
} from '@/features/FormManagement/api/models/FormManagementModel';
import { DEFAULT_FIELD_VALUES } from '@/resources/constants/form';
import { validateFieldName } from '@/shared/utils/validation';

export const useField = ({
  isOpen,
  onSave,
  onClose,
  existingFields = [],
  fieldToEdit,
}: FieldModalProps) => {
  const [values, setValues] = useState<FieldFormValues>(
    fieldToEdit
      ? {
          name: fieldToEdit.name,
          type: fieldToEdit.type,
          isRequired: fieldToEdit.isRequired,
        }
      : DEFAULT_FIELD_VALUES
  );
  const [errors, setErrors] = useState<Partial<Record<keyof FieldFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;

      if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setValues(prev => ({ ...prev, [name]: checked }));
      } else {
        setValues(prev => ({ ...prev, [name]: value }));
      }

      if (errors[name as keyof FieldFormValues]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    },
    [errors]
  );

  const validateForm = useCallback(() => {
    const newErrors: Partial<Record<keyof FieldFormValues, string>> = {};

    // Skip name validation if we're editing and the name hasn't changed
    const shouldValidateName = !fieldToEdit || (fieldToEdit && fieldToEdit.name !== values.name);

    if (shouldValidateName) {
      const nameValidation = validateFieldName(values.name, existingFields);
      if (!nameValidation.isValid && nameValidation.error) {
        newErrors.name = nameValidation.error;
      }
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  }, [values, existingFields, fieldToEdit]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const { isValid, errors } = validateForm();
      setErrors(errors);

      if (!isValid) {
        return;
      }

      setIsSubmitting(true);

      try {
        const field: FormField = {
          name: values.name,
          type: values.type as FormField['type'],
          isRequired: values.isRequired,
        };

        onSave(field);
        onClose();
      } catch (error) {
        console.error('Error saving field:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateForm, onSave, onClose]
  );

  const resetForm = useCallback(() => {
    setValues(
      fieldToEdit
        ? {
            name: fieldToEdit.name,
            type: fieldToEdit.type,
            isRequired: fieldToEdit.isRequired,
          }
        : DEFAULT_FIELD_VALUES
    );
    setErrors({});
  }, [fieldToEdit]);

  // Update form values when fieldToEdit changes or modal opens/closes
  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      if (fieldToEdit) {
        setValues({
          name: fieldToEdit.name,
          type: fieldToEdit.type,
          isRequired: fieldToEdit.isRequired,
        });
      } else {
        setValues({ ...DEFAULT_FIELD_VALUES });
      }
      setErrors({});
    }
  }, [isOpen, fieldToEdit]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
