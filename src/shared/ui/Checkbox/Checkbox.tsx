'use client';

import React, { forwardRef } from 'react';

import { classNames } from '@/shared/utils/classNames';

import { CheckboxProps } from './Checbox.types';
import styles from './Checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, className = '', containerClassName = '', ...props }, ref) => {
    const containerClasses = classNames(styles.checkboxGroup, containerClassName);

    const checkboxClasses = classNames(styles.checkbox, className);

    return (
      <div className={containerClasses}>
        <div className={styles.container}>
          <input ref={ref} type="checkbox" className={checkboxClasses} id={props.id} {...props} />
          <label className={styles.label} htmlFor={props.id}>
            <span className={styles.checkmark}></span>
            {label}
          </label>
        </div>
        {error && <p className={styles.errorText}>{error}</p>}
        {helperText && !error && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
