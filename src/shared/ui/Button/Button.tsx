import React from 'react';

import { classNames } from '@/shared/utils/classNames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  children,
  icon,
  ...props
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.full]: fullWidth,
      [styles.loading]: isLoading,
      [styles.disabled]: props.disabled
    },
    className
  );

  return (
    <button className={buttonClasses} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <span className={styles.spinner}></span> : null}
      {icon && icon}
      {children && <span className={isLoading ? styles.spinnerText : ''}>{children}</span>}
    </button>
  );
};
