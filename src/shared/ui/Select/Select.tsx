import React, { forwardRef } from 'react';

import { Status } from '@/shared/types/status';
import { Message } from '@/shared/ui/Message/Message';
import { classNames } from '@/shared/utils/classNames';

import styles from './Select.module.scss';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    label, 
    error, 
    fullWidth = false, 
    className = '', 
    containerClassName = '',
    options = [],
    ...props 
  }, ref) => {

    const selectClasses = classNames(
      styles.select,
      {
        [styles.error]: !!error,
        [styles.full]: fullWidth
      },
      className
    );

    const containerClasses = classNames(
      styles.formGroup,
      { [styles.full]: fullWidth },
      containerClassName
    );
    
    return (
      <div className={containerClasses}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <Message message={error} type={Status.ERROR} />}
      </div>
    );
  }
);

Select.displayName = 'Select'; 