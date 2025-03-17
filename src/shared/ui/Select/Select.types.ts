import { SelectHTMLAttributes } from 'react';

import { ElementConfig } from '@/shared/types/base';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & Partial<ElementConfig>;
