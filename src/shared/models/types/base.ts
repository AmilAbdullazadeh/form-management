  export interface ElementConfig {
    label: string;
    error: string;
    fullWidth: boolean;
    className: string;
    containerClassName: string;
    options: Array<{ value: string; label: string }>;
  }

  export interface Icon {
    fill?: string;
    stroke?: string;
    className?: string;
  }

  export type Size = 'sm' | 'md' | 'lg';

  export type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'warning';

  export type Type = 'visible' | 'readonly' | 'required' | 'optional';
  