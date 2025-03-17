import { SelectHTMLAttributes } from 'react';

import { ElementConfig } from '@/shared/models/types/base';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & Partial<ElementConfig>;
