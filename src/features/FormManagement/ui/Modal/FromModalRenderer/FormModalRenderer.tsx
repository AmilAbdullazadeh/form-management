'use client';

import React from 'react';

import { FormModalMode } from '@/features/FormManagement/api/models/FormManagementModel';
import styles from '@/features/FormManagement/ui/Modal/FormModalContent/FormModalContent.module.scss';
import { BUTTON_TEXT } from '@/resources/constants/button';
import { FORM_MODAL_TEXT } from '@/resources/constants/form';
import { Button } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';
 
import { FieldModal } from '../FieldModal/FieldModal';
import { FormContent } from '../FormModalContent/FormModalContent';

import { FormModalRenderProps } from './FormModalRenderer.types';


export const FormModalRenderer: React.FC<FormModalRenderProps> = ({
  isOpen,
  onClose,
  mode,
  isViewOnly,
  isSubmitting,
  values,
  errors,
  formFields,
  handleChange,
  handleSubmit,
  handleOpenFieldModal,
  handleDeleteField,
  handleEditField,
  submitError,
  isFieldModalOpen,
  handleCloseFieldModal,
  handleSaveField,
  formId,
  reorderFormFields,
  selectedField
}) => {
  // Modal title and submit button text based on mode
  const modalTitle = isViewOnly ? FORM_MODAL_TEXT[FormModalMode.VIEW].TITLE : FORM_MODAL_TEXT[mode].TITLE;
  const submitButtonText = FORM_MODAL_TEXT[mode].SUBMIT_BUTTON;
  
  // Modal footer with action buttons - hide submit button in view-only mode
  const footerRenderer = (
    <div className="button-wrapper">
      <Button 
        variant="outline" 
        onClick={onClose} 
        disabled={isSubmitting}
      >
        {BUTTON_TEXT.CANCEL}
      </Button>
      {!isViewOnly && (
        <Button 
          type="submit"
          form="form-modal"
          isLoading={isSubmitting}
        >
          {submitButtonText}
        </Button>
      )}
    </div>
  );

  const enhancedTitle = isViewOnly && formFields.length > 0 
    ? `${modalTitle} (${formFields.length} fields)` 
    : modalTitle;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={enhancedTitle}
      footer={isViewOnly ? null : footerRenderer}
      size="lg"
    >
      <div className={`${styles.formContainer} ${isViewOnly ? styles.readOnlyForm : ''}`}>
        <form id="form-modal" onSubmit={handleSubmit} noValidate>
          <FormContent 
            values={values}
            errors={errors}
            handleChange={handleChange}
            isViewOnly={isViewOnly}
            formFields={formFields}
            handleOpenFieldModal={handleOpenFieldModal}
            handleDeleteField={handleDeleteField}
            handleEditField={handleEditField}
            submitError={submitError}
            reorderFormFields={reorderFormFields}
          />
        </form>
      </div>
      
      <FieldModal
        isOpen={isFieldModalOpen}
        onClose={handleCloseFieldModal}
        onSave={handleSaveField}
        existingFields={formFields}
        fieldToEdit={selectedField}
      />
    </Modal>
  );
}; 