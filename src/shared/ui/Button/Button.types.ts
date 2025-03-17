import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Size, Variant } from '@/shared/models/types/base';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
}
