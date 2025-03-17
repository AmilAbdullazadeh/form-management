import { ReactNode } from 'react';

import { Size } from '@/shared/models/types/base';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: Size;
  closeOnOutsideClick?: boolean;
}

export interface ModalConfig {
  title: string;
  content: ReactNode;
  footer?: ReactNode;
  size?: Size;
  closeOnOutsideClick?: boolean;
}
