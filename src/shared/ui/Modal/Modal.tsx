'use client';

import React, { useEffect, useRef } from 'react';

import { Close } from '@/resources/assets/icons/Close';

import { Button } from '../Button/Button';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOutsideClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Handle outside click
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      closeOnOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={handleOutsideClick}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${styles[size]}`}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Button
            className={styles.closeButton}
            size="sm"
            variant="outline"
            onClick={onClose}
            icon={<Close />}
          />
        </div>
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};
