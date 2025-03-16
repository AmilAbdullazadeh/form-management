'use client';

import React from 'react';

import { FORM_EMPTY_STATES } from '@/resources/constants/form';
import { Checkbox } from '@/shared/components/common/Checkbox/Checkbox';
import { ErrorMessage } from '@/shared/components/common/ErrorMessage/ErrorMessage';
import { FieldList } from '@/shared/components/common/FieldList/FieldList';
import { Input } from '@/shared/components/common/Input/Input';

import styles from './FormModalContent.module.scss';
import { FormModalContentProps } from './FormModalContent.types';


export const FormContent = ({ 
  values, 
  errors, 
  handleChange, 
  isViewOnly, 
  formFields, 
  handleOpenFieldModal,
  handleDeleteField,
  handleEditField,
  submitError,
  reorderFormFields
}: FormModalContentProps) => {
  const fieldCount = formFields.length;

  return (
    <>
      <div className={styles.formGroup}>
        <Input
          id="name"
          name="name"
          label="Form name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter form name"
          error={errors.name}
          fullWidth
          required
          autoFocus
          disabled={isViewOnly}
        />
      </div>
      
      <div className={styles.checkboxGroup}>
        <Checkbox
          id="isVisible"
          name="isVisible"
          label="Visible"
          checked={values.isVisible}
          onChange={handleChange}
          disabled={isViewOnly}
        />
        
        <Checkbox
          id="isReadOnly"
          name="isReadOnly"
          label="Read only"
          checked={values.isReadOnly}
          onChange={handleChange}
          disabled={isViewOnly}
        />
      </div>

      {isViewOnly && (
        <div className={styles.formSummary}>
          <div className={styles.formSummaryItem}>
            <span className={styles.formSummaryLabel}>Fields:</span>
            <span className={styles.formSummaryValue}>{fieldCount}</span>
          </div>
        </div>
      )}
      
      <div className={`${styles.fieldsContainer} ${isViewOnly ? styles.readOnlyFields : ''}`}>
        <FieldList 
          fields={formFields}
          isViewOnly={isViewOnly}
          onAddField={handleOpenFieldModal}
          onDeleteField={handleDeleteField}
          onEditField={handleEditField}
          onReorderFields={!isViewOnly ? reorderFormFields : undefined}
          addButtonLabel="Add field"
          emptyMessage={isViewOnly 
            ? FORM_EMPTY_STATES.NO_FIELDS_FOUND
            : FORM_EMPTY_STATES.NO_FIELDS_ADDED
          }
        />
      </div>
      
      {submitError && (
        <div className={styles.submitError}>
          <ErrorMessage message={submitError} />
        </div>
      )}
    </>
  );
}; 