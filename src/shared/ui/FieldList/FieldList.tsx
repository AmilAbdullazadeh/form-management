'use client';

import React from 'react';

import { Plus } from '@/resources/assets/icons/Plus';
import { Trash } from '@/resources/assets/icons/Trash';
import { Update } from '@/resources/assets/icons/Update';
import { FORM_EMPTY_STATES } from '@/resources/constants/form';
import { useDragAndDrop } from '@/shared/hooks/useDragAndDrop';

import { Button } from '../Button/Button';

import styles from './FieldList.module.scss';
import { FieldListProps } from './FieldList.types';


export const FieldList: React.FC<FieldListProps> = ({
  fields,
  isViewOnly,
  onAddField,
  onDeleteField,
  onEditField,
  onReorderFields,
  addButtonLabel = 'Add Field',
  emptyMessage = FORM_EMPTY_STATES.NO_FIELDS_ADDED
}) => {
  const { 
    draggedItem,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop
  } = useDragAndDrop({
    items: fields,
    onReorder: (reorderedItems) => {
      if (onReorderFields) {
        onReorderFields(reorderedItems);
      }
    }
  });

  const handleAddFieldClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddField();
  };

  const handleDeleteField = (e: React.MouseEvent, fieldName: string) => {
    e.preventDefault();
    if (onDeleteField) {
      onDeleteField(fieldName);
    }
  };

  const handleEditField = (e: React.MouseEvent, field: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (onEditField && !isViewOnly) {
      onEditField(field);
    }
  };

  const isDragEnabled = !isViewOnly && onReorderFields !== undefined;

  return (
    <div className={styles.fieldsSection}>
      <div className={styles.fieldsSectionHeader}>
        <h3>Form fields</h3>
        <Button
          variant="primary"
          size="md"
          onClick={handleAddFieldClick}
          disabled={isViewOnly}
          type="button"
          icon={<Plus />}
        >
          {addButtonLabel}
        </Button>
      </div>
      
      {fields.length > 0 ? (
        <div className={styles.fieldsList}>
          {fields.map(field => (
            <div 
              key={field.name} 
              className={`${styles.fieldItem} ${draggedItem?.name === field.name ? styles.dragging : ''}`}
              draggable={isDragEnabled}
              onDragStart={isDragEnabled ? (e) => handleDragStart(e, field) : undefined}
              onDragOver={isDragEnabled ? handleDragOver : undefined}
              onDrop={isDragEnabled ? (e) => handleDrop(e, field) : undefined}
              onDragEnd={isDragEnabled ? handleDragEnd : undefined}
            >
              <div className={styles.fieldInfo}>
                {isDragEnabled && (
                  <span className={styles.dragHandle} title="Drag to reorder">
                    ⋮⋮
                  </span>
                )}
                <span className={styles.fieldLabel}>{field.name}</span>
                <span className={styles.fieldType}>{field.type}</span>
                {field.isRequired && <span className={styles.fieldRequired}>Required</span>}
              </div>
              <div className={styles.fieldActions}>
                {!isViewOnly && onEditField && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => handleEditField(e, field)}
                    type="button"
                    className={styles.editButton}
                    icon={<Update />}
                    title="Edit"
                  />
                )}
                {!isViewOnly && onDeleteField && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => handleDeleteField(e, field.name)}
                    type="button"
                    className={styles.deleteButton}
                    icon={<Trash />}
                    title="Delete"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noFields}>
          {emptyMessage}
        </div>
      )}
    </div>
  );
}; 