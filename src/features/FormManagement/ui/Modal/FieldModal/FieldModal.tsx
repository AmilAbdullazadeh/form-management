'use client';

import React, { useCallback } from 'react';

import { FieldModalProps } from '@/features/FormManagement/api/models/FormManagementModel';
import { useField } from '@/features/FormManagement/ui/Modal/FieldModal/hooks/useField';
import { FIELD_TYPE_OPTIONS } from '@/resources/constants/form';
import { Button } from '@/shared/components/common/Button/Button';
import { Checkbox } from '@/shared/components/common/Checkbox/Checkbox';
import { Input } from '@/shared/components/common/Input/Input';
import { Modal } from '@/shared/components/common/Modal/Modal';
import { Select } from '@/shared/components/common/Select/Select';

import styles from './FieldModal.module.scss';


export const FieldModal: React.FC<FieldModalProps> = ({
  isOpen,
  onClose,
  onSave,
  existingFields = [],
  fieldToEdit
}) => {
  const isEditMode = !!fieldToEdit;
  
  const { 
    values, 
    errors, 
    isSubmitting,
    handleChange, 
    handleSubmit,
    resetForm
  } = useField({
    isOpen,
    onSave,
    onClose,
    existingFields,
    fieldToEdit
  });
  
  const handleCloseModal = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  const modalFooter = (
    <div className={styles.footer}>
          <Button 
            variant="outline" 
            onClick={handleCloseModal}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          
          <Button 
            type="submit"
            form="field-form"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isEditMode ? 'Update' : 'Create'}
          </Button>
        </div>
  );
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      title={isEditMode ? 'Edit field' : 'Add field'}
      size="md"
      footer={modalFooter}
    >
      <form id="field-form" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            autoFocus
          />
        </div>
        
        <div className={styles.formGroup}>
          <Select
            id="type"
            name="type"
            label="Type"
            value={values.type}
            onChange={handleChange}
            options={FIELD_TYPE_OPTIONS}
            error={errors.type}
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <Checkbox
            id="isRequired"
            name="isRequired"
            label="Required"
            checked={values.isRequired}
            onChange={handleChange}
          />
        </div>
      </form>
    </Modal>
  );
}; 