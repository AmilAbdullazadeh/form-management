import React, { forwardRef } from 'react';

import { Status } from '@/shared/models/enums/status';
import { Message } from '@/shared/ui/Message/Message';
import { classNames } from '@/shared/utils/classNames';

import styles from './Input.module.scss';
import { InputProps } from './Input.type';


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    label, 
    error, 
    fullWidth = false, 
    className = '', 
    disabled = false,
    containerClassName = '',
    ...props 
  }, ref) => {
    const inputClasses = classNames(
      styles.input,
      {
        [styles.disabled]: disabled,
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
        <input
          ref={ref}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && <Message message={error} type={Status.ERROR} />}
      </div>
    );
  }
);

// Add display name for React DevTools
Input.displayName = 'Input';
 