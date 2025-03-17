'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Form } from '@/features/FormManagement/api/models/FormApiModel';
import {
  FormModalMode,
  FormModalProps,
  FormValues,
} from '@/features/FormManagement/api/models/FormManagementModel';
import {
  useCreateFormMutation,
  useUpdateFormMutation,
} from '@/features/FormManagement/api/slices/FormManagementSlice';
import { useGetFormsQuery } from '@/features/FormManagement/api/slices/FormManagementSlice';
import { useFormField } from '@/features/FormManagement/hooks/useFormField';
import { useFormMode } from '@/features/FormManagement/hooks/useFormMode';
import { FORM_SUBMIT_ERRORS } from '@/resources/constants/form';
import { useForm } from '@/shared/hooks/useForm';
import { Operation } from '@/shared/models/enums/operation';
import { validateFormName } from '@/shared/utils/validation';

import { FormModalRenderer } from '../FromModalRenderer/FormModalRenderer';

export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  mode = FormModalMode.CREATE,
  initialForm,
}) => {
  const { data: forms = [] } = useGetFormsQuery();
  const [createForm, { isLoading: isCreating }] = useCreateFormMutation();
  const [updateForm, { isLoading: isUpdating }] = useUpdateFormMutation();
  const [submitError, setSubmitError] = useState<string | null>(null);

  // field management
  const {
    fields: formFields,
    selectedField,
    isFieldModalOpen,
    openFieldModal,
    closeFieldModal,
    addField,
    deleteField,
    editField,
    reorderFields,
    resetFields,
  } = useFormField();

  // Determine initial values based on mode
  const initialValues = useMemo(
    () => ({
      name: initialForm?.name || '',
      isVisible: initialForm?.isVisible ?? true,
      isReadOnly: initialForm?.isReadOnly ?? false,
    }),
    [initialForm]
  );

  const { isUpdateMode, isViewOnly } = useFormMode({ mode, initialValues });

  // Form validation and submission
  const validateFormValues = useCallback(
    (values: FormValues) => {
      const errors: Partial<Record<keyof FormValues, string>> = {};

      const nameValidation = validateFormName(
        values.name,
        forms,
        isUpdateMode ? initialForm?._id : undefined
      );

      if (!nameValidation.isValid && nameValidation.error) {
        errors.name = nameValidation.error;
      }

      return errors;
    },
    [forms, isUpdateMode, initialForm?._id]
  );

  const handleFormSubmit = useCallback(
    async (values: FormValues) => {
      setSubmitError(null);

      try {
        const formData = {
          ...values,
          fields: formFields,
        };

        if (isUpdateMode && initialForm?._id) {
          await updateForm({ ...formData, _id: initialForm._id } as Form).unwrap();
        } else {
          await createForm(formData as Omit<Form, '_id'>).unwrap();
        }

        onClose();
      } catch (error) {
        console.error(
          `Error ${isUpdateMode ? Operation.UPDATING : Operation.CREATING} form:`,
          error
        );
        setSubmitError(
          isUpdateMode ? FORM_SUBMIT_ERRORS.UPDATE_FAILED : FORM_SUBMIT_ERRORS.CREATE_FAILED
        );
      }
    },
    [isUpdateMode, initialForm, createForm, updateForm, onClose, formFields]
  );

  // form management
  const { values, errors, isSubmitting, handleChange, handleSubmit, setValues, resetForm } =
    useForm<FormValues>({
      initialValues,
      onSubmit: handleFormSubmit,
      validate: validateFormValues,
    });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setValues(initialValues);
      resetFields(initialForm?.fields || []);
    } else {
      resetForm();
      resetFields([]);
      setSubmitError(null);
    }
  }, [isOpen, initialForm, setValues, resetForm, resetFields, initialValues]);

  // Handle modal close with cleanup
  const handleModalClose = useCallback(() => {
    resetForm();
    resetFields([]);
    setSubmitError(null);
    onClose();
  }, [onClose, resetForm, resetFields]);

  return (
    <FormModalRenderer
      isOpen={isOpen}
      onClose={handleModalClose}
      mode={mode}
      isViewOnly={isViewOnly}
      isSubmitting={isSubmitting || isCreating || isUpdating}
      values={values}
      errors={errors}
      formFields={formFields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleOpenFieldModal={openFieldModal}
      handleDeleteField={deleteField}
      handleEditField={editField}
      reorderFormFields={reorderFields}
      submitError={submitError}
      isFieldModalOpen={isFieldModalOpen}
      handleCloseFieldModal={closeFieldModal}
      handleSaveField={addField}
      formId={initialForm?._id || ''}
      selectedField={selectedField}
    />
  );
};
