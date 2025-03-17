'use client';

import React, { useCallback, useState } from 'react';

import { FormModal } from '@/features/FormManagement/ui/Modal/FormModal/FormModal';
import { Plus } from '@/resources/assets/icons/Plus';
import { BUTTON_TEXT } from '@/resources/constants/button';
import { FORM_BUTTON_TEXT, FORM_EMPTY_STATES, FORM_MODAL_TEXT } from '@/resources/constants/form';
import { Button } from '@/shared/ui/Button/Button';
import { FormCardList } from '@/shared/ui/Card/Form/List/FormCardList';
import formStyles from '@/shared/ui/Card/Form/List/FormCardList.module.scss';
import { useModal } from '@/shared/ui/Modal/ModalContent/ModalContext';

import { FormModalMode, FormModalState } from './api/models/FormManagementModel';
import { useDeleteFormMutation } from './api/slices/FormManagementSlice';
import { useGetFormsQuery } from './api/slices/FormManagementSlice';
import { SkeletonFormList } from './ui/Skeleton/SkeletonFormList';

export const FormManagement: React.FC = () => {
  const { openModal, closeModal } = useModal();

  const { data: forms = [], isLoading, error } = useGetFormsQuery();
  const [deleteForm, { isLoading: isDeleting }] = useDeleteFormMutation();

  const [modalState, setModalState] = useState<FormModalState>({
    isOpen: false,
    mode: FormModalMode.CREATE,
    selectedFormId: null,
  });

  const selectedForm = forms.find(form => form._id === modalState.selectedFormId);

  const handleOpenCreateModal = useCallback(() => {
    setModalState({
      isOpen: true,
      mode: FormModalMode.CREATE,
      selectedFormId: null,
    });
  }, []);

  const handleDeleteForm = useCallback(
    (id: string) => {
      deleteForm(id);
      closeModal();
    },
    [deleteForm, closeModal]
  );

  const modalFooter = (id: string) => (
    <div className="button-wrapper">
      <Button variant="outline" onClick={closeModal} disabled={isDeleting}>
        {BUTTON_TEXT.CANCEL}
      </Button>
      <Button variant="danger" onClick={() => handleDeleteForm(id)} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : BUTTON_TEXT.DELETE}
      </Button>
    </div>
  );

  const handleEdit = useCallback(
    (id: string) => {
      const form = forms.find(f => f._id === id);

      if (form) {
        setModalState({
          isOpen: true,
          mode: form.isReadOnly ? FormModalMode.VIEW : FormModalMode.UPDATE,
          selectedFormId: id,
        });
      }
    },
    [forms]
  );

  const handleDelete = useCallback(
    (id: string) => {
      const formToDelete = forms.find(form => form._id === id);

      if (formToDelete) {
        openModal({
          title: FORM_MODAL_TEXT[FormModalMode.DELETE].TITLE,
          content: (
            <p>
              Are you sure you want to delete <strong>{formToDelete.name}</strong>? This action
              cannot be undone.
            </p>
          ),
          size: 'sm',
          footer: modalFooter(formToDelete._id || ''),
        });
      }
    },
    [forms, openModal, closeModal, deleteForm, isDeleting]
  );

  const handleCloseModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <SkeletonFormList count={forms.length || 9} gridClassName={formStyles.formCardList} />;
    }

    if (error) {
      return <div>Error loading forms. Please try again.</div>;
    }

    return (
      <FormCardList
        forms={forms}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage={FORM_EMPTY_STATES.NO_FORMS_FOUND}
      />
    );
  };

  return (
    <div>
      <div className="header">
        <h1>Form List</h1>
        <Button onClick={handleOpenCreateModal} icon={<Plus />}>
          {FORM_BUTTON_TEXT.CREATE_FORM}
        </Button>
      </div>

      {renderContent()}

      <FormModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        mode={modalState.mode}
        initialForm={selectedForm}
      />
    </div>
  );
};
