import { InputHTMLAttributes } from 'react';

import { ElementConfig } from '@/shared/models/types/base';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Partial<ElementConfig>;
