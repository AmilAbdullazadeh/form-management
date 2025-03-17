  export enum Operation {
    CREATING = 'creating',
    UPDATING = 'updating',
    DELETING = 'deleting',
    VIEWING = 'viewing'
  }
  
  export interface ElementConfig {
    label: string;
    error: string;
    fullWidth: boolean;
    className: string;
    containerClassName: string;
    options: Array<{ value: string; label: string }>;
  }