'use client';

import React from 'react';

import { Eye } from '@/resources/assets/icons/Eye';
import { Trash } from '@/resources/assets/icons/Trash';
import { Update } from '@/resources/assets/icons/Update';
import { Status } from '@/shared/models/enums/status';
import { Button } from '@/shared/ui/Button/Button';
import { FormCard } from '@/shared/ui/Card/Form/FormCard';
import { BadgeVariant } from '@/shared/ui/Card/Form/FormCard.types';

import styles from './FormItemCard.module.scss';
import { FormItemCardProps } from './FormItemCard.types';

export const FormItemCard: React.FC<FormItemCardProps> = ({
  form,
  onEdit,
  onDelete,
  className = '',
}) => {
  const { name, isVisible, isReadOnly, fields } = form;

  // Get badge data based on type
  const getBadge = (type: 'visible' | 'readonly'): { text: string; variant: BadgeVariant } => {
    if (type === 'visible') {
      return {
        text: isVisible ? 'Visible' : 'Hidden',
        variant: isVisible ? Status.SUCCESS : Status.DANGER,
      };
    } else {
      return {
        text: isReadOnly ? 'Read only' : 'Editable',
        variant: isReadOnly ? Status.WARNING : Status.SUCCESS,
      };
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) onEdit(form._id!);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) onDelete(form._id!);
  };

  const fieldCountDisplay = fields
    ? {
        icon: <span className={styles.fieldIcon}>📋</span>,
        text: `${fields.length} ${fields.length === 1 ? 'Field' : 'Fields'}`,
      }
    : null;

  return (
    <FormCard
      title={name}
      badge={[getBadge('visible'), getBadge('readonly')]}
      className={`${className} ${isReadOnly ? styles.readOnly : ''} ${!isVisible ? styles.hidden : ''}`}
      metadata={[...(fieldCountDisplay ? [fieldCountDisplay] : [])]}
      actions={
        <>
          {onEdit && (
            <Button
              className={`${styles.button} ${isReadOnly ? styles.viewButton : styles.editButton}`}
              variant="outline"
              size="sm"
              onClick={handleEdit}
              disabled={false}
              icon={isReadOnly ? <Eye /> : <Update />}
              title={isReadOnly ? 'View' : 'Edit'}
            />
          )}

          {onDelete && (
            <Button
              className={`${styles.button} ${styles.deleteButton}`}
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={!isVisible || isReadOnly}
              icon={<Trash />}
              title="Delete"
            />
          )}
        </>
      }
    />
  );
};
