'use client';

import React, { forwardRef } from 'react';

import styles from './Checkbox.module.scss';
import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, helperText, className = '', containerClassName = '', ...props }, ref) => {
    // Generate checkbox classes based on props
    const getCheckboxClasses = () => {
      const classes = [styles.checkbox];

      if (error) {
        classes.push(styles.error);
      }

      if (className) {
        classes.push(className);
      }

      return classes.join(' ');
    };

    // Generate container classes based on props
    const getContainerClasses = () => {
      const classes = [styles.checkboxGroup];

      if (containerClassName) {
        classes.push(containerClassName);
      }

      return classes.join(' ');
    };

    return (
      <div className={getContainerClasses()}>
        <div className={styles.container}>
          <input
            ref={ref}
            type="checkbox"
            className={getCheckboxClasses()}
            id={props.id}
            {...props}
          />
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
