import { ReactNode } from "react";

import { Size } from "@/shared/models/types/base";

export interface ModalConfig {
    title: string;
    content: ReactNode;
    footer?: ReactNode;
    size?: Size;
    closeOnOutsideClick?: boolean;
  }
  
export interface ModalContextType {
    openModal: (config: ModalConfig) => void;
    closeModal: () => void;
  }